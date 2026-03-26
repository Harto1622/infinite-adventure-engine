
import React from 'react';

interface SidebarProps {
  inventory: string[];
  quest: string;
  onNewGame: () => void;
  isLoading: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ inventory, quest, onNewGame, isLoading }) => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/5 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 flex flex-col gap-8 h-fit sticky top-4">
      <div>
        <h2 className="text-xl font-bold text-purple-400 mb-4 border-b-2 border-purple-400/30 pb-2">
          Current Quest
        </h2>
        <p className="text-gray-300">{quest}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-teal-400 mb-4 border-b-2 border-teal-400/30 pb-2">
          Inventory
        </h2>
        {inventory.length > 0 ? (
          <ul className="space-y-2">
            {inventory.map((item, index) => (
              <li key={index} className="bg-gray-700/50 p-2 rounded-md text-gray-300 text-sm">
                - {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Your pockets are empty.</p>
        )}
      </div>
      <div className="mt-auto">
        <button
          onClick={onNewGame}
          disabled={isLoading}
          className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : 'Start New Adventure'}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
