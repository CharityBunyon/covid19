import axios from 'axios';

const provinceUrl = 'https://api.covid19api.com/live/country/United States of America/status/confirmed';

const getProvinceData = async () => {
  try {
    const { data } = await axios.get(provinceUrl);
    return data;
  } catch (error) {
    return error;
  }
};

export default getProvinceData;
