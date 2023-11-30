import React, { useState, useRef } from 'react'
import { InstructText, MainInput, Container, SideMenu, Column } from './styles'
import SuggestionBox from '../../components/SuggestionBox'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
import { marks } from '../../utils'


const Main = () => {
   const inputRef = useRef(null);
   const [sugList, setSugList] = useState([])
   const [numSuggestions, setNumSuggestions] = useState(5)
   const [wordCount, setWordCount] = useState(0)
   const prevTxt = useRef('')

    const handleKeyPress = (event) => {
        const txt = inputRef.current.innerText;
        if (event.key === '@') {

            const dif = txt.split(" ").filter(x => !prevTxt.current.split(" ").includes(x))[0];

            console.log(dif[dif.length - 1])
            // @ character can be escaped by writing \@
            if (dif && dif[dif.length - 1] === '@' && dif[dif.length - 2] !== '\\'){
                setSugList([...sugList, dif.slice(0, -1)]);
            }
        }


        prevTxt.current = txt
        console.log(prevTxt)

        setWordCount(txt.split(' ').length)
    };

    return (
        <Container>
            <Column>
                <InstructText>
                    Enter your text here. End a word with an '@' to request suggestions.<br/>
                    For example, try tryping "nice@"
                </InstructText>
                <MainInput ref={inputRef} onKeyUp={handleKeyPress} contentEditable id={'inputArea'} />
                <br/>
                <div style={{textAlign: 'left'}}>Word Count: {wordCount} </div>
            </Column>
            <SideMenu>
            <Box sx={{ width: 500 }}>
                <InstructText>Number of suggestions per generation</InstructText>
                <Slider
                    aria-label="Number of suggestions"
                    defaultValue={5}
                    getAriaValueText={(v) => {return v}}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={marks}
                    min={1}
                    max={10}
                    onChange={(e) => setNumSuggestions(e.target.value)}
                />
                <InstructText>Click a suggestion to copy it to your clipboard</InstructText>
            </Box>

            {sugList.map((suggestion) => {return <SuggestionBox key={suggestion} word={suggestion} numSuggestions={numSuggestions} />})}
            </SideMenu>
        </Container>
    )
}

export default Main
