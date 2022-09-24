import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => setCountries(json))
    },[])

    return (
        <div>
            <h1>Call API rest Countries</h1>

        <div className='countries-container'>
            {
                countries.map( country => <Country
                     country = {country}

                     key ={country.cca3}
                     ></Country>)
            }
        </div>

        </div>
    );
};

export default Countries;