import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './India.module.css';

import { fetchStates } from '../../api/india.js';
const India = ({ handleStateChange }) => {

    const [fetchedStates, setFetchedStates] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedStates(await fetchStates());
        }
        fetchAPI();

    }, [setFetchedStates]);
    // console.log(fetchedCountries);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                <option value="">India</option>
                {fetchedStates.map((state, i) => <option key={i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>


    )
}

export default India;