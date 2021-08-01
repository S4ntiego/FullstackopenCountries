import axios from 'axios'

const baseUrl = "http://api.weatherstack.com/current"
const accessKey = process.env.REACT_APP_API_KEY

const getCapitalWeather = async (name) => {
    const response = await axios.get(`${baseUrl}?access_key=${accessKey}&query=${name}}`)
    return response.data
}

export default getCapitalWeather