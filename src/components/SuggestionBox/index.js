import React, {useState, useEffect} from 'react'
import { Container, Prompter, Row, SubmitButton, SuggestedWord, SuggestionGrid, TitleText } from './styles'
import XIcon from '../../assets/close.png'
import OpenAI from "openai";


// const { Configuration, OpenAIApi } = require('openai');
// const openai = new OpenAIApi(new Configuration({
//     organization: 'org-x7LE1EOortseNW98HPCIMzye', 
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true,
// }));

const SuggestionBox = ({ word, setWord }) => {
    // In here let's set up code for giving GPT an initial prompt,
    // and continued prompting should happen inside this component.
    const [suggestions, setSuggestions] = useState([])

    const openai = new OpenAI({
        organization: 'org-x7LE1EOortseNW98HPCIMzye', 
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const initPrompt = `Give me 4 synonyms for the word ${word}. Format your response as an array, for example: ["word1", "word2", "word3", "word4"]. Do not include any other information in your response. `

    const generateText = async () => {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',  
            temperature: 0.8,
            max_tokens: 50,
            messages: [{"role": "user", "content": initPrompt}]
        });

        // Return the generated text from the response
        console.log(JSON.parse(response.choices[0].message.content)[0])
        console.log("NDWHJABUYBEUYAE")
        setSuggestions(JSON.parse(response.choices[0].message.content))
        // return JSON.parse(response.choices[0].message.content);
    }

    useEffect(() => {
        
        generateText()
    }, [generateText, initPrompt, openai.chat.completions])

    // const generateText = async () => {
    //     const response = await openai.chat.completions.create({
    //         model: 'gpt-3.5-turbo',  
    //         temperature: 0.8,
    //         max_tokens: 50,
    //         messages: [{"role": "user", "content": initPrompt}]
    //     });

    //     // Return the generated text from the response
    //     console.log(response.choices[0].text)
    //     return response.choices[0].text;
    // }


    
    const [visible, setVisible] = useState(true)
    return (
        <>
            {visible && 

                <Container>
                    <Row>
                        <TitleText style={{fontWeight: 'bold'}}>{word}</TitleText>
                        <img 
                            style={{cursor: 'pointer', height: '20px', width: '20px'}} 
                            src={XIcon} 
                            onClick={() => setVisible(false)} alt="Close"
                        />
                    </Row>
                    <SuggestionGrid>
                        {suggestions.map((s) => <SuggestedWord>{s}</SuggestedWord>)}
                    </SuggestionGrid>
                    <Row>
                        <Prompter placeholder='Add additional context...'/>
                        <SubmitButton>Submit</SubmitButton>
                    </Row>
                </Container>

            }
        </>
    )
}

export default SuggestionBox