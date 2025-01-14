import styled from "styled-components";

export const Container = styled.div`
    width: 45%;
    height: 150px;
    margin: 5px auto;
    background-color: #FFF;
    border: none;
    border-radius: 15px;
    box-shadow: 3px 3px 5px gray;
    text-align: left;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        height: 15px;
        width: 15px;
        margin:0 5px;
    }
    
    &:hover{
        cursor: pointer;
        background-color: rgb(61, 171, 194, 0.1);
    }

    @media(max-width: 851px){
        width: 80%;
        height: 200px;
    }
`