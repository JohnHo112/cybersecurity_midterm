import { GoogleGenerativeAI } from "@google/generative-ai";
import xss from 'xss'


export async function rewrite(req, res) {
  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  console.log(process.env.SESSION_SECRET);

  try{
    console.log(process.env.GEMINI_API_KEY);
    const sentence = xss(req.body.sentence);
    console.log("rewrite sentence");
    console.log(sentence);
  
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    console.log(model);
    
    const prompt = "Rewrite following sentence:\n" + sentence;
    console.log(prompt);
    
    const result = await model.generateContent(prompt);
    console.log(result);
    const response = await result.response;
    console.log(response);
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