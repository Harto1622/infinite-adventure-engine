
import React from 'react';

interface ChoiceButtonsProps {
  choices: string[];
  onChoice: (choice: string) => void;
  isLoading: boolean;
}

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onChoice, isLoading }) => {
  if (choices.length === 0 && !isLoading) {
    return null;
  }
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {isLoading && choices.length === 0 ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-20 bg-gray-700/50 rounded-lg animate-pulse"></div>
        ))
      ) : (
        choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoice(choice)}
            disabled={isLoading}
            className="p-4 bg-gray-800 border border-gray-700 rounded-lg text-left text-gray-300 hover:bg-purple-900/50 hover:border-purple-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:hover:border-gray-700 h-full"
          >
            {choice}
          </button>
        ))
      )}
    </div>
  );
};

export default ChoiceButtons;
