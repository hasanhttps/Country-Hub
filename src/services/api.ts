import axios from "axios";

const base_url = "https://restcountries.com/v3.1/";

export const getCountries = async () => {
    return await axios.get(base_url + "all");
}