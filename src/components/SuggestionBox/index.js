import React, {useState} from 'react'
import { Container, Prompter, Row, SubmitButton, SuggestedWord, SuggestionGrid, TitleText } from './styles'
import XIcon from '../../assets/close.png'

const SuggestionBox = ({ word, setWord }) => {
    // In here let's set up code for giving GPT an initial prompt,
    // and continued prompting should happen inside this component.

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
                        <SuggestedWord>demonstration</SuggestedWord>
                        <SuggestedWord>instance</SuggestedWord>
                        <SuggestedWord>sample</SuggestedWord>
                        <SuggestedWord>representative</SuggestedWord>
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