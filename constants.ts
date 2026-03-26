// FIX: Import React to use React.createElement for creating SVG icon components without JSX.
import React from 'react';

export const STORY_MODEL = 'gemini-2.5-flash';
export const IMAGE_MODEL = 'imagen-4.0-generate-001';

export const ART_STYLE_PROMPT = "A high-quality, detailed, painterly, fantasy digital art style image. Cinematic lighting, epic feel.";

export const INITIAL_STORY_PROMPT = `You are a master storyteller for an infinite text-based choose-your-own-adventure game. Start a new fantasy story. Provide a compelling opening scene. The story should be described in about 150 words. After the story, provide exactly 3 distinct and interesting choices for the player to make. You must also determine the player's starting inventory and their initial quest based on the opening scene.

Format your entire response as a single, valid JSON object with four keys:
- "story": A string containing the opening story text.
- "choices": An array of 3 strings for the player's choices.
- "inventory": An array of strings for the player's starting items.
- "quest": A string describing the initial quest.

Example format:
{
  "story": "The ancient ruins loom before you, a skeletal silhouette against the blood-red sunset. A chilling wind whispers through crumbling archways, carrying tales of forgotten kings and a legendary artifact said to be hidden within. Your map, a tattered piece of parchment, flutters in your hand. According to legend, the 'Sunstone of Eldoria' can repel the encroaching darkness that threatens the kingdom. The entrance is a gaping maw, promising both treasure and peril.",
  "choices": [
    "Enter the ruins through the main archway.",
    "Scout the perimeter for a less obvious entrance.",
    "Make camp and wait for morning."
  ],
  "inventory": ["Tattered Map", "Rusty Shortsword", "Leather Waterskin"],
  "quest": "Find the Sunstone of Eldoria within the ancient ruins."
}
`;

export const NEXT_STORY_PROMPT = (history: string, choice: string, inventory: string[], quest: string) => `
You are a master storyteller continuing an infinite text-based choose-your-own-adventure game. The player's journey so far, their current state, and their latest choice are provided below. Your task is to generate the next chapter of the story.

**Previous Story Summary:**
${history}

**Current Inventory:**
[${inventory.join(', ')}]

**Current Quest:**
"${quest}"

**Player's Choice:**
"${choice}"

**Your Instructions:**
1.  Write the next part of the story (about 150 words) that logically follows from the player's choice and the preceding events. The narrative should be engaging and descriptive.
2.  Based on the new story segment, determine if the player's inventory or quest has changed. For example, they might find an item, lose one, complete a quest, or receive a new one.
3.  Create exactly 3 new, distinct, and meaningful choices for the player to make.

**Output Format:**
Respond with a single, valid JSON object with four keys: "story", "choices", "inventory", and "quest". The inventory and quest should reflect the updated state AFTER the events of the new story segment.
`;

// FIX: Converted from JSX to React.createElement to be valid in a .ts file.
// JSX is not supported in .ts files, only .tsx files.
export const GithubIcon = () => (
  React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  React.createElement('path', { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
  React.createElement('path', { d: "M9 18c-4.51 2-5-2-7-2" })
  )
);

// FIX: Converted from JSX to React.createElement to be valid in a .ts file.
// JSX is not supported in .ts files, only .tsx files.
export const ZapIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    },
    React.createElement('polygon', { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
    )
);