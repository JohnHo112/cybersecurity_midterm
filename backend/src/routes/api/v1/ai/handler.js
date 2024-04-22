import { GoogleGenerativeAI } from "@google/generative-ai";
import xss from 'xss'

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function rewrite(req, res) {
  try{
    const sentence = xss(req.body.sentence);
    console.log("rewrite sentence");
    console.log(sentence);
  
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = "Rewrite following sentence:\n" + sentence;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("ai rewrite sentence");
    console.log(text);
    res.send(text);
  } catch{(error) => {
    console.log(error)
    res.send(error);
    }
  }
}