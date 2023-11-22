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
    // const [count, setCount] = useState(0)

    console.log(numSuggestions)

    const handleKeyPress = (event) => {
        if (event.key === '@') {
            const txt = inputRef.current.innerText;
            const sliced = txt.split(" ").slice(-1)[0].slice(0, -1)
            // @ character can be escaped by writing \@
            console.log(sliced[sliced.length - 1])
            if (sliced.length > 0 && sliced[sliced.length - 1] !== '\\'){
                setSugList([...sugList, txt.split(" ").slice(-1)[0].slice(0, -1)]);
            }
        }
    };

    return (
        <Container>
            <Column>
                <InstructText>
                    Enter your text here. End a word with an '@' to request suggestions.<br/>
                    For example, try tryping "nice@"
                </InstructText>
                <MainInput ref={inputRef} onKeyUp={handleKeyPress} contentEditable id={'inputArea'} />
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
            </Box>

            {sugList.map((suggestion) => {return <SuggestionBox key={suggestion} word={suggestion} numSuggestions={numSuggestions} />})}
            </SideMenu>
        </Container>
    )
}

export default Main
