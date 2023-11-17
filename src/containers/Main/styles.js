import styled from 'styled-components';

export const InstructText = styled.p`
    color: #808080;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 5px;
    margin-top: 30px;
    text-align: center;
    line-height: 30px;
`
export const MainInput = styled.div`
    width: 50vw;
    min-height: 80%;
    padding: 10px;
    border: 1px solid black;
`

export const Container = styled.div`
    /* padding-top: 30px; */
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    /* overflow-x: hidden; */
    overflow-y: scroll;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    align-items: center;
    width: 60vw;
    /* height: 100vh; */
    /* padding-top: 30px; */
`

export const SideMenu =  styled.div`
    width: 40vw;
    border-left: 1px solid black;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y:scroll;
    /* padding-top: 30px; */
`

export const WritingOutput = styled.p`
    min-width: 80%;
    word-wrap: break-word;
    margin-bottom: 40px;
    overflow-y: scroll;
    min-height: 40%;
    border: 2px solid black;
    padding: 10px;
    margin-top: 0px;
`