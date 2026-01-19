
import { GoogleGenAI, Type } from "@google/genai";
import { PredictionResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getTrendingInsights(category: string = "lifestyle"): Promise<PredictionResponse> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Predict 6 upcoming visual and lifestyle trends for 2025 in the category: ${category}. 
    Each trend must have a catchy title, a short description, a category, and specify a visual ratio of either '1:1' or '3:2'. 
    Assign each a unique ID. Make them sound like Pinterest Predicts style (future-facing, artistic, specific).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          trends: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                category: { type: Type.STRING },
                ratio: { 
                  type: Type.STRING, 
                  description: "Must be either '1:1' or '3:2'" 
                },
              },
              required: ["id", "title", "description", "category", "ratio"],
            },
          },
        },
      },
    },
  });

  const rawJson = JSON.parse(response.text || '{"trends": []}');
  
  // Enrich with placeholder images
  const enrichedTrends = rawJson.trends.map((trend: any, index: number) => {
    const width = trend.ratio === '3:2' ? 600 : 400;
    const height = 400;
    return {
      ...trend,
      imageUrl: `https://picsum.photos/seed/${trend.id}/${width}/${height}`
    };
  });

  return { trends: enrichedTrends };
}
