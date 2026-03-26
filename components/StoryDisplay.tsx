
import React from 'react';
import { StorySegment } from '../types';

interface StoryDisplayProps {
  segment: StorySegment | undefined;
  isLoading: boolean;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <svg className="animate-spin h-10 w-10 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-lg">The world is taking shape...</p>
    </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="flex flex-col items-center justify-center h-full bg-red-900/20 border border-red-500 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-400 mb-2">A Fissure in Reality!</h3>
        <p className="text-red-300 text-center">{message}</p>
        <p className="text-red-400 mt-4 text-sm">Please try making another choice or start a new adventure.</p>
    </div>
);


const StoryDisplay: React.FC<StoryDisplayProps> = ({ segment, isLoading, error }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden h-full flex flex-col">
      <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : segment ? (
          <img
            src={segment.image}
            alt="Story visual"
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
        ) : (
           <div className="w-full h-full flex items-center justify-center">
                <p>Begin your adventure to see the world.</p>
            </div>
        )}
        {isLoading && segment && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <LoadingSpinner />
            </div>
        )}
      </div>
      <div className="p-6 flex-grow overflow-y-auto">
        {error ? (
          <ErrorDisplay message={error} />
        ) : isLoading && !segment ? (
          <p className="text-gray-400 italic">Awaiting the first chapter...</p>
        ) : segment ? (
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{segment.story}</p>
        ) : null}
      </div>
    </div>
  );
};

export default StoryDisplay;
