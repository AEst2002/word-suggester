import OpenAI from "openai";

export const openai = new OpenAI({
    organization: 'org-x7LE1EOortseNW98HPCIMzye', 
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})

export const genInitPrompt = (word) => {
    return `Give me 4 synonyms for the word ${word}. Format your response as an array, for example: ["word1", "word2", "word3", "word4"]. Do not include any other information in your response. All future messages will provide extra context for the word.`
}

export const generateText = async (word, messages) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',  
        temperature: 0.9,
        max_tokens: 50,
        messages: [{"role": "user", "content": genInitPrompt(word)}, ...messages]
    });
    // Return the generated text from the response
    return JSON.parse(response.choices[0].message.content)
}