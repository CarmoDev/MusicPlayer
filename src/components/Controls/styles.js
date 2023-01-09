import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 50%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0;
    padding: 0;
    border: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PrevButton = styled.button`
  height: 40px;
  background-color: transparent;

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const NextButton = styled.button`
  height: 40px;
  background-color: transparent;

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const PlayButton = styled.button`
  height: 40px;
  background-color: #2D283E;
  border-radius: 50%;

  svg {
    height: 35px;
    width: 35px;
  }
`;

export const PauseButton = styled.button`
  height: 40px;
  background-color: #2d283e;
  border-radius: 50%;

  svg {
    height: 35px;
    width: 35px;
  }
`;