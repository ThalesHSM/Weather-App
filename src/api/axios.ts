import axios from "axios";

async function HandleLocation() {
  const response = await axios.get(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://www.metaweather.com/api/location/44418"
    )}`
  );

  console.log(JSON.parse(response.data.contents));
  return response.data.contents;
}

async function HandleLocations(location: any) {
  const response = await axios.get(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://www.metaweather.com/api/location/${location}`
    )}`
  );

  return response.data.contents;
}

export { HandleLocation, HandleLocations };
