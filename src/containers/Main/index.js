import React, { useState } from 'react'
import { InstructText, MainInput, Container, SideMenu, Column, WritingOutput } from './styles'
import OpenAI from "openai";
import SuggestionBox from '../../components/SuggestionBox'

const Main = () => {
    // const openai = new OpenAI({
    //     organization: 'org-x7LE1EOortseNW98HPCIMzye', 
    //     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    //     dangerouslyAllowBrowser: true,
    //   });
      
    //   const doPrompting = async () => {
    //     const chatCompletion = await openai.chat.completions.create({
    //         model: "gpt-3.5-turbo",
    //         messages: [{"role": "user", "content": "Hello!"}],
    //       });
    //       console.log(chatCompletion.choices[0].message);
    //   }

    const [rawString, setRawString] = useState("")
    const [wordList, setWordList] = useState([])
    const [taggedWords, setTaggedWords] = useState([])
    const [sugList, setSugList] = useState([])

    const wordMapping = (word) => {

        return word.startsWith('@') ? 
            (<text onClick={() => {setSugList([...sugList, word])}} style={{cursor: 'pointer', color: 'red'}}>{word.substring(1) + ' '}</text>)
             : (<text>{word + ' '}</text>) 
    }

    return (
        <Container>
            <Column>
                <InstructText>
                    Enter your text here. Prefix a word with @ to mark it for suggestions.
                </InstructText>
                <MainInput onChange={e => {setRawString(e.target.value); setWordList(e.target.value.split(' '))}} />
                <InstructText>
                    Output: Click a highlighted word to get suggestions.
                </InstructText>
                <WritingOutput>{wordList.map(word => wordMapping(word))}</WritingOutput>
            </Column>
            <SideMenu>
            {sugList.map((word) => {return <SuggestionBox word={word.substring(1)}></SuggestionBox>})}
            </SideMenu>
        </Container>
    )
}

export default Main
