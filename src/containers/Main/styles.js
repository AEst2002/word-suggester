import styled from 'styled-components';

export const InstructText = styled.p`
    color: #808080;
    font-size: 18px;
    font-style: italic;
`
export const MainInput = styled.textarea`
    width: 40vw;
    height: 80vh;
`

export const Container = styled.div`
    /* padding-top: 30px; */
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y:scroll;
    /* padding-top: 30px; */
`