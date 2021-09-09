import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { HandleLocation, HandleLocations } from "./api/axios";
import Moment from "react-moment";
import { MdPlace } from "react-icons/md";

function App() {
  const [todayImageName, setTodayImageName] = useState<any>();
  const [todayTemperature, setTodayTemperature] = useState<any>();
  const [todayPlace, setTodayPlace] = useState<any>();
  const [todayImage, setTodayImage] = useState<any>();
  const [tomorrowImage, setTomorrowImage] = useState<any>();
  const [thirdDayImage, setThirdDayImage] = useState<any>();
  const [fourthDayImage, setFourthDayImage] = useState<any>();
  const [fifthDayImage, setFifthDayImage] = useState<any>();
  const [sixthDayImage, setSixthDayImage] = useState<any>();

  useEffect(() => {
    async function a() {
      const getWeather = await HandleLocation();

      const getWeatherJSON = JSON.parse(getWeather);
      console.log(getWeatherJSON);

      //   const cc = bb[0].woeid;

      // const bbba = await HandleLocations(cc);
      const getMaxTemperature = JSON.stringify(
        getWeatherJSON.consolidated_weather[0].max_temp
      ).slice(0, 2);

      setTodayImageName(
        getWeatherJSON.consolidated_weather[0].weather_state_name
      );

      setTodayTemperature(getMaxTemperature);

      setTodayPlace(getWeatherJSON.title);

      setTodayImage(
        `https://www.metaweather.com/static/img/weather/${getWeatherJSON.consolidated_weather[0].weather_state_abbr}.svg`
      );
      setTomorrowImage(
        `https://www.metaweather.com/static/img/weather/${getWeatherJSON.consolidated_weather[1].weather_state_abbr}.svg`
      );

      setThirdDayImage(
        `https://www.metaweather.com/static/img/weather/${getWeatherJSON.consolidated_weather[2].weather_state_abbr}.svg`
      );

      setFourthDayImage(
        `https://www.metaweather.com/static/img/weather/${getWeatherJSON.consolidated_weather[3].weather_state_abbr}.svg`
      );

      setFifthDayImage(
        `https://www.metaweather.com/static/img/weather/${getWeatherJSON.consolidated_weather[4].weather_state_abbr}.svg`
      );

      setSixthDayImage(
        `https://www.metaweather.com/static/img/weather/${getWeatherJSON.consolidated_weather[5].weather_state_abbr}.svg`
      );
    }

    a();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 500,
          height: "100%",
          backgroundColor: "#1f203a",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 50,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#6f707a",
              color: "#fff",
              fontFamily: "arial",
              width: 200,
              height: 30,
            }}
          >
            Search Places
          </button>
          <img src={todayImage} alt="" style={{ width: 350 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "#e7e7eb",
              fontSize: 50,
              marginBottom: -40,
            }}
          >
            <h1>{todayTemperature}</h1>
            <h2> °C</h2>
          </div>

          <h1 style={{ color: "#89859d", fontSize: 30 }}>{todayImageName}</h1>

          <p style={{ color: "#89859d", marginTop: 80, fontSize: 20 }}>
            Today ● <Moment format="ddd,DD MMM "></Moment>
          </p>
          <h1 style={{ color: "#89859d" }}>
            <MdPlace size={24} color="#89859d" style={{ marginRight: 15 }} />
            {todayPlace}
          </h1>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-evenly",
          flexDirection: "column",
          backgroundColor: "#100d1d",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 20,
            marginRight: 80,
          }}
        >
          <button
            style={{
              borderRadius: "50%",
              width: 40,
              height: 40,
              border: "none",
              cursor: "pointer",
              marginRight: 10,
              backgroundColor: "#e7e7eb",
              color: "#140a3b",
              fontSize: 20,
            }}
          >
            °C
          </button>
          <button
            style={{
              borderRadius: "50%",
              width: 40,
              height: 40,
              border: "none",
              cursor: "pointer",
              backgroundColor: "#595576",
              color: "#fff",
              fontSize: 20,
            }}
          >
            °F
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: "yellow",
          }}
        >
          <div
            style={{
              backgroundColor: "#1f203a",
              color: "#e7e7eb",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Tomorrow</h1>

            <img src={tomorrowImage} alt="" style={{ width: 100 }} />
          </div>
          <div>
            <h1>
              <Moment add={{ days: 2 }} format="ddd,DD MMM "></Moment>
            </h1>
            <img src={thirdDayImage} alt="" />
          </div>
          <div>
            <h1>
              <Moment add={{ days: 3 }} format="ddd,DD MMM "></Moment>
            </h1>
            <img src={fourthDayImage} alt="" />
          </div>
          <div>
            <h1>
              <Moment add={{ days: 4 }} format="ddd,DD MMM "></Moment>
            </h1>
            <img src={fifthDayImage} alt="" />
          </div>
          <div>
            <h1>
              <Moment add={{ days: 5 }} format="ddd,DD MMM "></Moment>
            </h1>

            <img src={sixthDayImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
