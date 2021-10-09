import React from "react";
import { useEffect, useState } from "react";

import {
  StyledDiv,
  StyledFeatureName,
  StyledFeaturesMainDiv,
  StyledInput,
  StyledInputDiv,
  StyledInputValueDiv,
  StyledMainDiv,
  StyledNumber,
  StyledNumberTextDiv,
} from "./StyledFeatures";
import { MdExplore } from "react-icons/md";

interface IFeatures {
  temperature: any;
  isLoading: any;
}

function Features({ temperature, isLoading }: IFeatures) {
  const [todayHighlights, setTodayHighlights] = useState<any>();

  useEffect(() => {
    async function HandleWeather() {
      if (temperature) {
        setTodayHighlights(temperature.consolidated_weather[0]);
      }
    }

    HandleWeather();
  }, [temperature]);

  return (
    <StyledMainDiv>
      {isLoading === false && todayHighlights ? (
        <>
          <h1 style={{ color: "white", marginLeft: 5 }}>Today's Highlights</h1>
          <StyledFeaturesMainDiv>
            <StyledDiv>
              <StyledFeatureName>Wind Status</StyledFeatureName>

              <StyledNumberTextDiv>
                <StyledNumber>
                  {todayHighlights.wind_speed.toString().slice(0, 1)}
                </StyledNumber>
                <h2>mph</h2>
              </StyledNumberTextDiv>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 18,
                  marginTop: -18,
                }}
              >
                <MdExplore
                  size={40}
                  color="#89859d"
                  style={{ marginRight: 15 }}
                />
                <h3>{todayHighlights.wind_direction_compass}</h3>
              </div>
            </StyledDiv>

            <StyledDiv
              style={{
                marginRight: 150,
              }}
            >
              <StyledFeatureName style={{ marginBottom: 15 }}>
                Humidity
              </StyledFeatureName>

              <StyledNumberTextDiv>
                <StyledNumber>{todayHighlights.humidity}</StyledNumber>
                <h2>%</h2>
              </StyledNumberTextDiv>

              <StyledInputDiv>
                <StyledInputValueDiv>
                  <h3>0</h3>
                  <h3>50</h3>
                  <h3>100</h3>
                </StyledInputValueDiv>

                <StyledInput
                  type="range"
                  value={todayHighlights.humidity}
                  min={0}
                  max={100}
                />

                <h3
                  style={{
                    marginTop: -3,
                    alignSelf: "flex-end",
                    color: "#a09eb1",
                  }}
                >
                  %
                </h3>
              </StyledInputDiv>
            </StyledDiv>

            <StyledDiv>
              <StyledFeatureName>Visibility</StyledFeatureName>
              <StyledNumberTextDiv
                style={{
                  marginBottom: 10,
                }}
              >
                <StyledNumber>
                  {todayHighlights.visibility
                    .toString()
                    .slice(0, 2)
                    .replace(".", "")}
                </StyledNumber>
                <h2>miles</h2>
              </StyledNumberTextDiv>
            </StyledDiv>

            <StyledDiv
              style={{
                marginRight: 150,
              }}
            >
              <StyledFeatureName>Air Pressure</StyledFeatureName>

              <StyledNumberTextDiv
                style={{
                  marginBottom: 10,
                }}
              >
                <StyledNumber>{todayHighlights.air_pressure} </StyledNumber>
                <h2>mb</h2>
              </StyledNumberTextDiv>
            </StyledDiv>
          </StyledFeaturesMainDiv>
        </>
      ) : null}
    </StyledMainDiv>
  );
}

export default Features;
