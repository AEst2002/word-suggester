import React, {useState, useEffect, memo} from 'react'
import { Container, CopiedText, Prompter, Row, SubmitButton, SuggestedWord, SuggestionGrid, TitleText } from './styles'
import XIcon from '../../assets/close.png'
import OpenAI from "openai";

const SuggestionBox = ({ word, numSuggestions }) => {
    // In here let's set up code for giving GPT an initial prompt,
    // and continued prompting should happen inside this component.

    const initPrompt = `From now on, give me ${numSuggestions} distinct synonyms for the word ${word}. Format your response as an array, for example: ["word1", "word2", "word3", "word4"]. Do not include any other information in your response. If you cannot come up with ${numSuggestions}, provide as many as you can. All of my future messages will provide extra context for the word, you should incorporate them into your suggestions. The words you respond with should ALWAYS be synonyms for ${word}.`
    const [suggestions, setSuggestions] = useState([])
    const [messages, setMessages] = useState([{"role": "user", "content": initPrompt}])
    const [newMessage, setNewMessage] = useState("")
    const [visible, setVisible] = useState(true)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const m = messages
        m[0].content = initPrompt
        setMessages(m)
    }, [initPrompt, messages])

    useEffect(() => {
        const m = messages
        if(suggestions.length > 0){
            m.push({"role": "assistant", "content": `${suggestions}`})
        }
        setMessages(m)
    }, [messages, suggestions])
    
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
            try {
                setSuggestions(JSON.parse(response.choices[0].message.content))
            } catch (err) {
                setSuggestions(['No suggestions available'])
            }
        }

        generateText()
    }, [messages])

    const handleCopy = (suggestion) => {
        navigator.clipboard.writeText(suggestion)
        setCopied(true)
        setTimeout(() => {
            setCopied(false);
        }, 2500);
    }
    
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
                    {copied && <CopiedText>Copied!</CopiedText>}
                    <SuggestionGrid style={{marginTop: copied ? '5px' : '23px'}}>
                        {(suggestions.length > 0) ? (suggestions.map((s) => <SuggestedWord onClick={() => handleCopy(s)} key={s}>{s}</SuggestedWord>)) : 'Loading...'}
                    </SuggestionGrid>
                    <Row>
                        {/* CONTROL CONDITION: COMMENT THE TWO LINES BELOW (PROMPTER AND SUBMITBUTTON) */}
                        <Prompter value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder='Add additional context...'/>
                        <SubmitButton onClick={() => {setSuggestions([]); setMessages([...messages, {"role": "user", "content": newMessage}]); setNewMessage("")}}>Submit</SubmitButton>
                    </Row>
                </Container>

            }
        </>
    )
}

export default memo(SuggestionBox)