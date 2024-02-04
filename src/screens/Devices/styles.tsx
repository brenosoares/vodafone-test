import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 4px #CCCCCC;
    display: block;
    margin: 0 auto;
    padding: 16px;
    width: 95%;
`

export const Button = styled.button`
    background-color: #e60000;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    display: block;
    height: 40px;
    margin: 0 0 16px auto;
    padding: 0 16px;
    text-align: center;
    &:hover{
        background-color: #990000;
    }
`

export const Table = styled.table`
    border-collapse: collapse;
    text-align: left;
    width: 100%;

    th {
        background-color: #f2f2f2;
        color: #333;
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }

    td {
        height: 45px;
        padding: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    tr:nth-child(even) {
        background-color: #ffffff;
    }
    tr:hover {
        background-color: #f0f0f0;
        cursor: pointer;
     }
`
