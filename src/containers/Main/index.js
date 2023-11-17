import React, { useState, useRef } from 'react'
import { InstructText, MainInput, Container, SideMenu, Column } from './styles'
import SuggestionBox from '../../components/SuggestionBox'

const Main = () => {
   const inputRef = useRef(null);
   const [sugList, setSugList] = useState([])
    // const [count, setCount] = useState(0)

    const handleKeyPress = (event) => {
        if (event.key === '@') {
            const txt = inputRef.current.innerText;
            setSugList([...sugList, txt.split(" ").slice(-1)[0].slice(0, -1)]);
        }
    };

    return (
        <Container>
            <Column>
                <InstructText>
                    Enter your text here. Prefix a word with @ to mark it for suggestions.
                </InstructText>
                <MainInput ref={inputRef} onKeyUp={handleKeyPress} contentEditable id={'inputArea'} />
            </Column>
            <SideMenu>
            {sugList.map((suggestion) => {return <SuggestionBox key={suggestion} word={suggestion} />})}
            </SideMenu>
        </Container>
    )
}

export default Main
