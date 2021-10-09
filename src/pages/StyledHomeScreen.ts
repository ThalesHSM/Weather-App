import styled from "styled-components";
import Colors from "../utils/colors";

export const StyledMainDiv = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledCityDiv = styled.div`
  display: flex;
  width: 500px;
  min-height: 100vh;
  background-color: ${Colors.darkBlue};
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
    min-height: 75vh;
  }

  @media (max-width: 1000px) {
    width: 100%;
    min-height: 75vh;
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`;

export const StyledComponentsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const StyledLoadingDiv = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Colors.darkBlue};
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 700px;
    min-height: 75vh;
  }
`;

export const StyledMainTemperatureDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: ${Colors.weakWhite};
  font-size: 50px;
  margin-bottom: -40px;
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const StyledIconAndCityNameDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const StyledImg = styled.img`
  width: 350px;
  margin-right: 10px;
  margin-left: 10px;
  @media (max-width: 800px) {
    margin-top: 20px;
    width: 175px;
  }
`;

export const StyledTodayWeatherName = styled.p`
  color: ${Colors.grey};
  margin-top: 80px;
  font-size: 25px;
  @media (max-width: 800px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;
