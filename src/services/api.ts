import axios from "axios";

const base_url = "https://restcountries.com/v3.1/";

export const getCountries = async () => {
    return await axios.get(base_url + "all");
}

export const getCountriesByName = async (name: string, category: string) => {
    return await axios.get(base_url + `${category}/${name}`);
}

export const getCountriesIndependent = async (isIndependent: string) => {
    return await axios.get(base_url + `independent?status=${isIndependent}`);
}