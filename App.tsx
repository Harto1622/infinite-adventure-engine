
import React, { useState, useEffect, useCallback } from 'react';
import { GameState, StorySegment } from './types';
import { getInitialStory, getNextStorySegment } from './services/geminiService';
import Sidebar from './components/Sidebar';
import StoryDisplay from './components/StoryDisplay';
import ChoiceButtons from './components/ChoiceButtons';
import { GithubIcon, ZapIcon } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    storyHistory: [],
    currentChoices: [],
    inventory: [],
    quest: 'Begin your journey.',
    error: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const startGame = useCallback(async () => {
    setIsLoading(true);
    setGameStarted(true);
    setGameState({
      storyHistory: [],
      currentChoices: [],
      inventory: [],
      quest: 'Begin your journey.',
      error: null,
    });

    try {
      const initialSegment = await getInitialStory();
      setGameState(prevState => ({
        ...prevState,
        storyHistory: [initialSegment],
        currentChoices: initialSegment.choices,
        inventory: initialSegment.inventory,
        quest: initialSegment.quest,
        error: null,
      }));
    } catch (err) {
      console.error(err);
      setGameState(prevState => ({
        ...prevState,
        error: err instanceof Error ? err.message : 'An unknown error occurred.',
      }));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChoice = useCallback(async (choice: string) => {
    setIsLoading(true);
    const fullHistory = gameState.storyHistory.map(s => s.story).join('\n\n');

    try {
      const nextSegment = await getNextStorySegment(fullHistory, choice, gameState.inventory, gameState.quest);
      setGameState(prevState => ({
        ...prevState,
        storyHistory: [...prevState.storyHistory, nextSegment],
        currentChoices: nextSegment.choices,
        inventory: nextSegment.inventory,
        quest: nextSegment.quest,
        error: null,
      }));
    } catch (err) {
      console.error(err);
      setGameState(prevState => ({
        ...prevState,
        error: err instanceof Error ? err.message : 'Failed to fetch next part of the story. Please try again.',
      }));
    } finally {
      setIsLoading(false);
    }
  }, [gameState.storyHistory, gameState.inventory, gameState.quest]);

  const currentStorySegment = gameState.storyHistory[gameState.storyHistory.length - 1];

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
            Infinite Adventure Engine
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Forge your own path in a world that adapts to your every decision. Powered by Gemini, every choice carves a unique narrative, complete with dynamically generated visuals. No two journeys are the same.
          </p>
          <button
            onClick={startGame}
            disabled={isLoading}
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 disabled:bg-gray-500 disabled:scale-100 flex items-center justify-center mx-auto"
          >
            {isLoading ? (
                <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Waking the Oracle...
                </>
            ) : (
                "Begin Your Adventure"
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col md:flex-row p-4 gap-4">
      <Sidebar
        inventory={gameState.inventory}
        quest={gameState.quest}
        onNewGame={startGame}
        isLoading={isLoading}
      />
      <main className="flex-grow flex flex-col gap-4 w-full md:w-2/3 lg:w-3/5">
        <StoryDisplay
          segment={currentStorySegment}
          isLoading={isLoading && !currentStorySegment}
          error={gameState.error}
        />
        <ChoiceButtons
          choices={gameState.currentChoices}
          onChoice={handleChoice}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
};

export default App;
