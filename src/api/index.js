import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableURL = url
    if (country) {
        changeableURL = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, deaths,  recovered, lastUpdate } } = await axios.get(changeableURL)
        return { confirmed, deaths,  recovered, lastUpdate }
    } catch (error) {
        return {error}
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        return data.map((dailyData) => {
            return {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }
        })
    } catch (error) {
        return {error}
    }
}


export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)

        return countries.map(country => country.name)
    } catch (error) {
        return {error}
    }
}