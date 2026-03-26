
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { StorySegment } from '../types';
import {
  STORY_MODEL,
  IMAGE_MODEL,
  ART_STYLE_PROMPT,
  INITIAL_STORY_PROMPT,
  NEXT_STORY_PROMPT,
} from '../constants';

// Ensure API_KEY is available. In a real app, this would be handled more securely.
if (!process.env.API_KEY) {
    // This is a placeholder for development.
    // In a real environment (like the one this code runs in), process.env.API_KEY is expected to be set.
    console.warn("API_KEY is not set. Using a placeholder. This will fail if not in a configured environment.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

async function generateStoryImage(story: string): Promise<string> {
  try {
    const fullPrompt = `${ART_STYLE_PROMPT} Depict the following scene: ${story}`;
    
    const response = await ai.models.generateImages({
        model: IMAGE_MODEL,
        prompt: fullPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '16:9',
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    }
    throw new Error('Image generation failed: No image data received.');
  } catch (error) {
    console.error('Error generating image:', error);
    // Return a placeholder or a default error image URL
    return 'https://picsum.photos/1280/720?grayscale';
  }
}

function parseJsonResponse(text: string): any {
  const cleanedText = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
  try {
    return JSON.parse(cleanedText);
  } catch (e) {
    console.error("Failed to parse JSON:", cleanedText);
    throw new Error("The AI's response was not in the expected format.");
  }
}

export const getInitialStory = async (): Promise<StorySegment> => {
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: STORY_MODEL,
    contents: [{ parts: [{ text: INITIAL_STORY_PROMPT }] }],
    config: { responseMimeType: "application/json" },
  });
  
  const data = parseJsonResponse(response.text);

  const image = await generateStoryImage(data.story);

  return { ...data, image };
};

export const getNextStorySegment = async (
  history: string,
  choice: string,
  inventory: string[],
  quest: string
): Promise<StorySegment> => {
  const prompt = NEXT_STORY_PROMPT(history, choice, inventory, quest);
  
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: STORY_MODEL,
    contents: [{ parts: [{ text: prompt }] }],
    config: { responseMimeType: "application/json" },
  });

  const data = parseJsonResponse(response.text);
  
  const image = await generateStoryImage(data.story);
  
  return { ...data, image };
};
