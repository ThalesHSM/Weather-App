import axios from "axios";

async function HandleLocationTemperature(locationWoeid: any) {
  const response = await axios.get(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://www.metaweather.com/api/location/${locationWoeid}`
    )}`
  );

  const getWeather = await JSON.parse(response.data.contents);

  return getWeather;
}

async function handleLocationName(locationName: any) {
  const response = await axios.get(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://www.metaweather.com/api/location/search/?query=${locationName}`
    )}`
  );
  const getWeather = await JSON.parse(response.data.contents);

  return getWeather;
}

export { handleLocationName, HandleLocationTemperature };
