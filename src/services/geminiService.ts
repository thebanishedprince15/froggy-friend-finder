
import { toast } from "sonner";

const GEMINI_API_KEY = "AIzaSyDGPeSilZ_tqvZ0qML1Ly8nSdYOITRmxtk";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;

export interface AmphibianData {
  commonName: string;
  scientificName: string;
  family: string;
  habitat: string;
  diet: string;
  conservationStatus: string;
  geographicRange: string;
  size: string;
  behavior: string;
}

export const identifyAmphibian = async (imageFile: File): Promise<AmphibianData> => {
  try {
    // Convert image to base64
    const base64Image = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        resolve(base64.split(',')[1]); // Remove data:image/jpeg;base64, prefix
      };
      reader.readAsDataURL(imageFile);
    });

    const prompt = `Analyze this image and identify the amphibian species. Provide the following information in JSON format only (no additional text):

{
  "commonName": "Common name of the amphibian",
  "scientificName": "Scientific/binomial name",
  "family": "Taxonomic family",
  "habitat": "Primary habitat description",
  "diet": "Dietary habits",
  "conservationStatus": "Conservation status (e.g., Least Concern, Endangered, etc.)",
  "geographicRange": "Geographic distribution",
  "size": "Typical size range",
  "behavior": "Key behavioral characteristics"
}

IMPORTANT: If this is NOT an amphibian (frog, toad, salamander, newt, or caecilian), respond with ONLY this format:
{
  "commonName": "Not an amphibian - please upload an amphibian photo",
  "scientificName": "N/A",
  "family": "N/A", 
  "habitat": "N/A",
  "diet": "N/A",
  "conservationStatus": "N/A",
  "geographicRange": "N/A",
  "size": "N/A",
  "behavior": "N/A"
}

Focus only on amphibians. Do not provide detailed descriptions of non-amphibian subjects.`;

    const requestBody = {
      contents: [{
        parts: [
          {
            text: prompt
          },
          {
            inline_data: {
              mime_type: imageFile.type,
              data: base64Image
            }
          }
        ]
      }]
    };

    console.log("Sending request to Gemini API...");
    
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Gemini API response:", data);

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No identification results received");
    }

    const result = data.candidates[0].content.parts[0].text;
    console.log("Raw result:", result);

    // Extract JSON from the response
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Could not parse identification results");
    }

    const amphibianData = JSON.parse(jsonMatch[0]);
    
    // Validate the response has required fields
    const requiredFields = ['commonName', 'scientificName', 'family', 'habitat', 'diet', 'conservationStatus', 'geographicRange', 'size', 'behavior'];
    const missingFields = requiredFields.filter(field => !amphibianData[field]);
    
    if (missingFields.length > 0) {
      console.warn("Missing fields in response:", missingFields);
      // Fill in missing fields with default values
      missingFields.forEach(field => {
        amphibianData[field] = "Information not available";
      });
    }

    return amphibianData;

  } catch (error) {
    console.error("Error identifying amphibian:", error);
    toast.error("Failed to identify amphibian. Please try again.");
    throw error;
  }
};
