import React, { useState } from 'react'
import { InstructText, MainInput, Container } from './styles'
import OpenAI from "openai";
import SuggestionBox from '../../components/SuggestionBox'

const Main = () => {
    const openai = new OpenAI({
        organization: 'org-x7LE1EOortseNW98HPCIMzye', 
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      
      const doPrompting = async () => {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": "Hello!"}],
          });
          console.log(chatCompletion.choices[0].message);
      }

    const [rawString, setRawString] = useState("")
    const [wordList, setWordList] = useState([])

    console.log(wordList)
    return (
        <Container>

            <InstructText>
                Enter your text here. Prefix a word with @ to mark it for suggestions.
            </InstructText>
            <MainInput onChange={e => {setRawString(e.target.value); setWordList(e.target.value.split(' '))}} />

            <div>{wordList.map(word => {return word.startsWith('@') ? <text onClick={() => console.log("holy fuck")} style={{cursor: 'pointer', color: 'red'}}>{word + ' '}</text> : <text>{word + ' '}</text> })}</div>
            {/* <button onClick={async () => await doPrompting()}>PRESS ME</button> */}
            <SuggestionBox isVisible word={"example"} />
        </Container>
    )
}

export default Main
