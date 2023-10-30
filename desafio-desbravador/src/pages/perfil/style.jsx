import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    @media(max-width: 850px){
        flex-direction: column;
    } 
`