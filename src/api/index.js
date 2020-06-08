import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const getData = async (country) => {
  let changeUrl = url;
  if (country && country !== "global") {
    changeUrl = `${changeUrl}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeUrl);

    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {}
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((el) => ({
      confirmed: el.confirmed.total,
      deaths: el.deaths.total,
      date: el.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    const names = countries.map((el) => el.name);
    return names;
  } catch (error) {}
};
