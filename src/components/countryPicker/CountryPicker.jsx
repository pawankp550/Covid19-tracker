import React, {useState, useEffect} from 'react'

import styles from './countryPicker.module.css'

import { fetchCountries } from '../../api'
import { FormControl, NativeSelect } from '@material-ui/core'

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        const fetchedCountries = await fetchCountries()
        if(fetchedCountries.error) console.log(fetchedCountries.error)

        setCountries(fetchedCountries)
    }

    useEffect(() => {
        getCountries()
    }, [setCountries])

    return (
        <FormControl variant="outlined" className={styles.formControl}>
           <NativeSelect defaultValue="" onChange = {(e) => {handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker