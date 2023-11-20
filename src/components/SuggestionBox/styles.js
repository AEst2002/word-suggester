import styled from 'styled-components'

export const Container = styled.div`
    min-height: 250px;
    width: 400px;
    border: 2px solid black;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const TitleText = styled.p`
    font-weight: bold;
    font-size: 32px;
    margin: 0px;
`

export const SuggestedWord = styled.p`
    background-color: #2274A5;
    padding: 4px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
`

export const SuggestionGrid = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: auto;
`

export const Prompter = styled.input`
    border-radius: 5px;
    border: 2px solid gray;
    height: 35px;
    width: 75%;
    font-size: 18px;
    padding-left: 10px;

    &::placeholder {
        font-style: italic;
    }
`

export const SubmitButton = styled.button`
    border-radius: 5px;
    padding: 5px;
    background-color: green;
    color: white;
    font-weight: bold;
    border: none;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`