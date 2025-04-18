import axios from "axios";

const GetAllCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};

export default GetAllCountries;
