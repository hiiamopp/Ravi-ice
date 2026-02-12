
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "./data";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFlavorRecommendation = async (userMood: string) => {
  const productList = PRODUCTS.map(p => `${p.name} by ${p.brand} ($${p.price})`).join(", ");
  
  const prompt = `
    You are the AI Flavor Assistant for Ravi's Ice Cream Shop. 
    The user is feeling: "${userMood}".
    Based on our menu: [${productList}], recommend 1-2 specific flavors.
    Keep the tone sweet, friendly, and enthusiastic like an ice cream shop employee.
    Use emojis!
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! I'm a bit brain-frozen right now. How about a Classic Vanilla? Everyone loves that! 🍦";
  }
};
