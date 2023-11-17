import React, { useState } from 'react'
import { InstructText, MainInput, Container, SideMenu, Column } from './styles'
import SuggestionBox from '../../components/SuggestionBox'

const Main = () => {
    const [sugList, setSugList] = useState([])
    // const [count, setCount] = useState(0)

    document.addEventListener('keypress', event => {
        if (event.key === '@'){
            const txt = document.getElementById('inputArea').innerHTML;
            setSugList([...sugList, txt.split(" ").slice(-1)[0]])
            // sugList.push(txt.split(" ").slice(-1)[0])
        }
      })

    return (
        <Container>
            <Column>
                <InstructText>
                    Enter your text here. Prefix a word with @ to mark it for suggestions.
                </InstructText>
                <MainInput contentEditable id={'inputArea'} />
            </Column>
            <SideMenu>
            {sugList.map((suggestion) => {return <SuggestionBox key={suggestion} word={suggestion} />})}
            </SideMenu>
        </Container>
    )
}

export default Main
