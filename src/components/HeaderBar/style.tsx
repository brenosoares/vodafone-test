import styled from "styled-components"

export const HeaderBarContent = styled.div`
    display: block;
    margin: 0 auto;
    width: 95%;
`;

export const HeaderBarTop = styled.div`
    background-color: black;
    color: white;
    display: flex;
    font-size: 1.2rem;
    justify-content: flex-end;
    padding: 10px 16px;
    width: 100%;
    `

export const HeaderBarBottom = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    width: 100%;
`
export const Nav = styled.nav`
    display: block;
    width: 100%;
    & ul {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        list-style: none;
        & li {
            font-size: 1.8rem;
            padding: 5px 7px;

            & a {
                text-decoration: none;
                &:active, &:visited{
                    color: black;
                }
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

`
