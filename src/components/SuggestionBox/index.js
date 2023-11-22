import React, {useState, useEffect, memo} from 'react'
import { Container, Prompter, Row, SubmitButton, SuggestedWord, SuggestionGrid, TitleText } from './styles'
import XIcon from '../../assets/close.png'
import OpenAI from "openai";


// const { Configuration, OpenAIApi } = require('openai');
// const openai = new OpenAIApi(new Configuration({
//     organization: 'org-x7LE1EOortseNW98HPCIMzye', 
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true,
// }));

const SuggestionBox = ({ word, numSuggestions }) => {
    // In here let's set up code for giving GPT an initial prompt,
    // and continued prompting should happen inside this component.
    const initPrompt = `Give me ${numSuggestions} synonyms for the word ${word}. Format your response as an array, for example: ["word1", "word2", "word3", "word4"]. Do not include any other information in your response. If you cannot come up with 5, provide as many as you can. All future messages will provide extra context for the word, incorporate them into your suggestions.`
    const [suggestions, setSuggestions] = useState([])
    const [messages, setMessages] = useState([{"role": "user", "content": initPrompt}])
    const [newMessage, setNewMessage] = useState("")
    const [visible, setVisible] = useState(true)

    console.log(initPrompt)
    console.log(messages)

    useEffect(() => {
        const m = messages
        m[0].content = initPrompt
        setMessages(m)
    }, [initPrompt, messages])
    
    useEffect(() => {
        const openai = new OpenAI({
            organization: 'org-x7LE1EOortseNW98HPCIMzye', 
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true,
        });

        const generateText = async () => {
            const response = await openai.chat.completions.create({
                model: 'gpt-4',  
                temperature: 0.9,
                max_tokens: 50,
                messages: messages
            });
            // Return the generated text from the response
            setSuggestions(JSON.parse(response.choices[0].message.content))
        }

        generateText()
    }, [messages])

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
                        {(suggestions.length > 0) ? (suggestions.map((s) => <SuggestedWord onClick={() => {navigator.clipboard.writeText(s)}} key={s}>{s}</SuggestedWord>)) : 'Loading...'}
                    </SuggestionGrid>
                    <Row>
                        <Prompter value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder='Add additional context...'/>
                        <SubmitButton onClick={() => {setSuggestions([]); setMessages([...messages, {"role": "user", "content": newMessage}]); setNewMessage("")}}>Submit</SubmitButton>
                    </Row>
                </Container>

            }
        </>
    )
}

export default memo(SuggestionBox)