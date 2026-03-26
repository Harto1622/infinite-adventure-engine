
export interface StorySegment {
  story: string;
  image: string;
  choices: string[];
  inventory: string[];
  quest: string;
}

export interface GameState {
  storyHistory: StorySegment[];
  currentChoices: string[];
  inventory: string[];
  quest: string;
  error: string | null;
}
