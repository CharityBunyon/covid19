import axios from 'axios';

const url = 'https://api.covid19api.com/summary';

const getData = async () => {
  try {
    const { data } = await axios.get(url);
    return data.Global;
  } catch (error) {
    return error;
  }
};

export default getData;
