import React from "react";
import { useEffect, useState } from "react";
import { handleLocationName, HandleLocationTemperature } from "../api/api";

import Moment from "react-moment";

import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";

import { MdPlace } from "react-icons/md";

import Features from "../components/Features/Features";
import Schedule from "../components/Schedule/Schedule";
import Input from "../components/Input/Input";

import {
  StyledCityDiv,
  StyledComponentsDiv,
  StyledIconAndCityNameDiv,
  StyledImg,
  StyledLoadingDiv,
  StyledMainDiv,
  StyledMainTemperatureDiv,
  StyledTodayWeatherName,
} from "./StyledHomeScreen";
import Colors from "../utils/colors";

export default function HomeScreen() {
  const [cityTemperature, setCityTemperature] = useState<any>();
  const [todayImage, setTodayImage] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  useEffect(() => {
    async function HandleWeather() {
      const getWeatherJSON = await HandleLocationTemperature(44418);

      setCityTemperature(getWeatherJSON);
      setTodayImage(
        `https://www.metaweather.com/static/img/weather/${getWeatherJSON.consolidated_weather[0].weather_state_abbr}.svg`
      );
    }

    HandleWeather();
  }, []);

  async function handleInputChoice(selectedOption: any) {
    setIsLoading(true);

    const getWeather = await handleLocationName(selectedOption.label);

    const getLocation = await HandleLocationTemperature(getWeather[0].woeid);
    setIsLoading(false);

    setCityTemperature(getLocation);

    setTodayImage(
      `https://www.metaweather.com/static/img/weather/${getLocation.consolidated_weather[0].weather_state_abbr}.svg`
    );
  }

  function handleCelsiusFahrenheit() {
    setIsCelsius(!isCelsius);
  }

  return (
    <StyledMainDiv>
      <StyledCityDiv>
        <Input handleInputChoice={handleInputChoice} />

        {isLoading === false && cityTemperature ? (
          <>
            <StyledImg src={todayImage} alt="" />

            <StyledMainTemperatureDiv>
              {isCelsius ? (
                <>
                  <h1>
                    {cityTemperature.consolidated_weather[0].max_temp
                      .toString()
                      .slice(0, 2)
                      .replace(".", "")}
                  </h1>
                  <h2> °C</h2>
                </>
              ) : (
                <>
                  <h1 style={{ color: Colors.weakWhite }}>
                    {JSON.stringify(
                      cityTemperature.consolidated_weather[0].max_temp * 1.8 +
                        32
                    ).slice(0, 2)}
                    °F
                  </h1>
                </>
              )}
            </StyledMainTemperatureDiv>

            <h1 style={{ color: Colors.grey, fontSize: 30 }}>
              {cityTemperature.consolidated_weather[0].weather_state_name}
            </h1>

            <StyledTodayWeatherName>
              Today ● <Moment format="ddd,DD MMM "></Moment>
            </StyledTodayWeatherName>
            <StyledIconAndCityNameDiv>
              <MdPlace
                size={30}
                color={Colors.grey}
                style={{ marginRight: 15 }}
              />
              <h1 style={{ color: Colors.grey }}>{cityTemperature.title}</h1>
            </StyledIconAndCityNameDiv>
          </>
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
      </StyledCityDiv>

      <StyledComponentsDiv>
        <Schedule
          isCelsius={isCelsius}
          handleCelsiusFahrenheit={handleCelsiusFahrenheit}
          temperature={cityTemperature}
          isLoading={isLoading}
        />

        <Features isLoading={isLoading} temperature={cityTemperature} />
      </StyledComponentsDiv>
    </StyledMainDiv>
  );
}
