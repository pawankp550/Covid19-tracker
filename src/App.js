import React, {useState, useEffect} from "react";

import styles from './app.module.css'

import Cards from './components/cards/Cards';
import CountryPicker from './components/countryPicker/CountryPicker';
import Charts from './components/charts/Charts'

import Loader from './components/core/loader/Loader'
import covidImage from './images/image.png'

import { fetchData } from './api'

const App = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('')
    const [error, setError] = useState('')

    const init = async () => {
        const fetchedData = await fetchData()
        if(fetchedData.error) {
            return setError(fetchedData.error)
        }
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
            {Object.keys(data).length === 0 ? <Loader/> : 
                error ? <div>{error}</div> : (
                    <>  
                        <div><img src={covidImage} alt="COVID19"/></div>
                        <Cards data={data} country={country}/>
                        <CountryPicker handleCountryChange={handleCountryChange}/>
                        <Charts data={data} country={country}/>
                    </>
                )
            }
        </div>
    )
}

export default App