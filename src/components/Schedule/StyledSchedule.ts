import styled, { css } from "styled-components";
import Colors from "../../utils/colors";

interface IButton {
  isCelsius: boolean;
}

export const StyledCelsiusButton = styled.button<IButton>`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin-right: 5px;

  background-color: ${Colors.weakBlue};
  color: ${Colors.white};
  font-size: 20px;
  ${(props) =>
    props.isCelsius === true &&
    css`
      background-color: ${Colors.weakWhite};
      color: ${Colors.darkBlue};
    `}

  @media (max-width: 800px) {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

export const StyledFahrenheitButton = styled.button<IButton>`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;

  background-color: ${Colors.weakWhite};
  color: ${Colors.darkBlue};

  font-size: 20px;
  ${(props) =>
    props.isCelsius === true &&
    css`
      background-color: ${Colors.weakBlue};
      color: ${Colors.white};
    `}

  @media (max-width: 800px) {
    width: 35px;
    height: 35px;

    border-radius: 50%;
  }
`;

export const StyledCelsiusFahrenheitDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 20px;
  margin-right: 80px;
  margin-bottom: 50px;
`;

export const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 930px) {
    width: 95%;
    margin-left: -5px;
  }

  @media (max-width: 870px) {
    width: 90%;
    margin-left: -5px;
  }

  @media (max-width: 750px) {
    width: 85%;
    margin-left: -5px;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-left: -5px;
  }

  @media (max-width: 650px) {
    width: 95%;
    margin-left: -5px;
  }
  @media (max-width: 600px) {
    width: 85%;
    margin-left: -5px;
  }
`;

export const StyledFeaturesDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;

export const StyledFeatureDiv = styled.div`
  background-color: ${Colors.darkBlue};
  color: ${Colors.weakWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
  max-height: 240px;

  @media (max-width: 850px) {
    max-width: 120px;
    font-size: 12px;
  }

  @media (max-width: 800px) {
    max-width: 120px;
    font-size: 12px;
  }
  @media (max-width: 700px) {
    max-width: 100px;
    font-size: 10px;
  }
`;
export const StyledTemperatureDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-top: 20px;
`;

export const StyledLoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledWhiteTemperature = styled.h2`
  color: ${Colors.weakWhite};
`;

export const StyledgreyTemperature = styled.h2`
  color: ${Colors.grey};
`;
