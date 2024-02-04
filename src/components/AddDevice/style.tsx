import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  position: relative;
  border-radius: 5px;
  & h2 {
    margin-bottom: 12px;
  }
`;

export const ButtonCloseModal = styled.div`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 10px;
    font-weight: 700;
`

export const InputStyled = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    appearance: none;
    margin-bottom: 12px;
    color: rgb(51, 51, 51);
    font-size: 1.6rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 8px;
`
