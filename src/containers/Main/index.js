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
            {sugList.map((suggestion) => {return <SuggestionBox key={suggestion} word={suggestion} />})}
            </SideMenu>
        </Container>
    )
}

export default Main
