import styled from "styled-components";
import Colors from "../../utils/colors";

export const StyledInput = styled.input`
  width: 380px;
  pointer-events: none;
  background-color: ${Colors.white};
  border-radius: 200px;
  overflow: hidden;
  -webkit-appearance: none;
  border: 1px solid black;
  margin-top: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 10px;
    box-shadow: -400px 0 0 400px #fbee6a;
  }
`;

export const StyledFeaturesMainDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledMainDiv = styled.div`
  margin-left: 85px;

  @media (max-width: 1200px) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    margin-left: 20px;
    width: 80%;
  }
`;

export const StyledDiv = styled.div`
  background-color: ${Colors.darkBlue};
  color: ${Colors.weakWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 500px;
  height: 240px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    margin-left: 300px;
  }
  @media (max-width: 930px) {
    margin-left: 190px;
  }
  @media (max-width: 850px) {
    margin-left: 180px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
  }
`;

export const StyledInputValueDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${Colors.grey};
`;

export const StyledInputDiv = styled.div`
  display: flex;
  width: 380px;
  flex-direction: column;
  margin-top: -20px;
  margin-bottom: -20px;
`;

export const StyledFeatureName = styled.h2`
  font-size: 25px;
  margin-bottom: 0px;
  margin-top: 10px;
`;

export const StyledNumberTextDiv = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const StyledNumber = styled.h1`
  font-size: 80px;
  margin-top: -30px;
  margin-bottom: 0px;
`;

export const StyledFeatureTitle = styled.h2``;
