import React, {useState, useEffect} from "react";

import styles from './app.module.css'

import Cards from './components/cards/Cards';
import CountryPicker from './components/countryPicker/CountryPicker';
import Charts from './components/charts/Charts'

import { fetchData } from './api'

const App = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    const init = async () => {
        const fetchedData = await fetchData()
        setData(fetchedData)
    }
    useEffect(() => {
        init()
    },[])

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        setData(fetchedData)
        setCountry(country)
    }

    return(
        <div className={styles.container}>
            <Cards data={data} country={country}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Charts data={data} country={country}/>
        </div>
    )
}

export default App