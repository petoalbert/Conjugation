import OpenAI from "openai";
import { top500Verbs } from "./Top500Verbs";
import * as fs from 'fs';

// Create an openai instance
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

const words = top500Verbs.splice(500, 700);

async function translate(word: string): Promise<string[]> {
  // Send this to an openai prompt: "hello"
  const completion = await openai.chat.completions.create({
    seed: 11111,
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content:
          `Provide the list of most common translations for the spanish verb '${word}'. Do not provide examples or explanations, just a simple list of verbs. Provide exactly 3 translations and prefix them with 'to '.`,
      },
    ],
    temperature: 0,
    response_format: {
      // See /docs/guides/structured-outputs
      type: "json_schema",
      json_schema: {
        name: "translation_schema",
        schema: {
          type: "object",
          properties: {
            translations: {
              description: "List of simple translations",
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          additionalProperties: false,
        },
      },
    },
  });

  let response = completion.choices[0].message.content;
  // parse response as { translations: ['verb1', 'verb2', ...] }
  if (response) return JSON.parse(response).translations;
  else return [];
}

async function run() {
  // read contents of translations.json as Record<string, string[]>
  // If the file doesn't exist, create an empty object
  fs.readFile("translations.json", "utf8", async (err, data) => {
    if (err) {
      console.log("File not found, creating an empty object");
      return {};
    } else {
      console.log("File found, reading contents");
      const translations = JSON.parse(data) as Record<string, string[]>;
      for (let word of words) {
        console.log(`Translating ${word}`);
        translations[word] = await translate(word);
      }
      // write translations to a file called translations.json
      // Convert the translations object to a JSON string
      const jsonContent = JSON.stringify(translations, null, 2);
    
      // Write the JSON string to a file called translations.json
      fs.writeFile("translations.json", jsonContent, "utf8", (err) => {
        if (err) {
          console.error("An error occurred while writing JSON Object to File.", err);
        } else {
          console.log("JSON file has been saved.");
        }
      });
    }
  });
}

run();
