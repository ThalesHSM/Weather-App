import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";
import {
  StyledCelsiusButton,
  StyledCelsiusFahrenheitDiv,
  StyledFahrenheitButton,
  StyledFeatureDiv,
  StyledFeaturesDiv,
  StyledgreyTemperature,
  StyledLoadingDiv,
  StyledMainDiv,
  StyledTemperatureDiv,
  StyledWhiteTemperature,
} from "./StyledSchedule";
import Colors from "../../utils/colors";

interface ISchedule {
  isCelsius: any;
  handleCelsiusFahrenheit: any;
  temperature: any;
  isLoading: any;
}

function Schedule({
  isCelsius,
  handleCelsiusFahrenheit,
  temperature,
  isLoading,
}: ISchedule) {
  const [weekTemperature, setWeekTemperature] = useState<any>();

  useEffect(() => {
    async function HandleWeather() {
      if (temperature) {
        const fiveDays = temperature.consolidated_weather.slice(1, 6);

        setWeekTemperature(fiveDays);
      }
    }

    HandleWeather();
  }, [temperature]);

  return (
    <StyledMainDiv>
      <StyledCelsiusFahrenheitDiv>
        <StyledCelsiusButton
          onClick={handleCelsiusFahrenheit}
          isCelsius={isCelsius}
        >
          °C
        </StyledCelsiusButton>
        <StyledFahrenheitButton
          onClick={handleCelsiusFahrenheit}
          isCelsius={isCelsius}
        >
          °F
        </StyledFahrenheitButton>
      </StyledCelsiusFahrenheitDiv>

      <StyledFeaturesDiv>
        {isLoading === false && weekTemperature ? (
          weekTemperature.map((item: any, index: any) => (
            <StyledFeatureDiv key={item.id}>
              {index === 0 ? (
                <h2>Tomorrow</h2>
              ) : (
                <h2>
                  <Moment add={{ days: index }} format="ddd,DD MMM "></Moment>
                </h2>
              )}

              <img
                src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`}
                alt=""
                style={{ width: 70 }}
              />

              <StyledTemperatureDiv>
                {isCelsius ? (
                  <>
                    <StyledWhiteTemperature style={{ color: Colors.weakWhite }}>
                      {JSON.stringify(item.max_temp)
                        .slice(0, 2)
                        .replace(".", "")}
                      °C
                    </StyledWhiteTemperature>
                    <StyledgreyTemperature style={{ color: Colors.grey }}>
                      {JSON.stringify(item.min_temp)
                        .slice(0, 2)
                        .replace(".", "")}
                      °C
                    </StyledgreyTemperature>
                  </>
                ) : (
                  <>
                    <StyledWhiteTemperature style={{ color: Colors.weakWhite }}>
                      {JSON.stringify(item.max_temp * 1.8 + 32).slice(0, 2)}
                      °F
                    </StyledWhiteTemperature>
                    <StyledgreyTemperature style={{ color: Colors.grey }}>
                      {JSON.stringify(item.min_temp * 1.8 + 32).slice(0, 2)}
                      °F
                    </StyledgreyTemperature>
                  </>
                )}
              </StyledTemperatureDiv>
            </StyledFeatureDiv>
          ))
        ) : (
          <StyledLoadingDiv>
            <Spinner
              color={Colors.white}
              size={32}
              speed={1}
              animating={true}
            />
          </StyledLoadingDiv>
        )}
      </StyledFeaturesDiv>
    </StyledMainDiv>
  );
}

export default Schedule;
