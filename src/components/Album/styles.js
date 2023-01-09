import styled from "styled-components";

export const SongDetails = styled.div`
  display: flex;
  align-items: center;
  
  img {
    border-radius: 8px;
    margin-right: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Player = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    border-radius: 100px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 8px;
      background: transparent;
      cursor: pointer;
    }
  }
`;

export const Timer = styled.span`
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  .TotalMinutes {
    align-self: flex-end;
  }
`;