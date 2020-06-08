import React, { useCallback, useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { getCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      setFetchedCountries(await getCountries());
    };

    fetchCountry();
  }, [setFetchedCountries]);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(el) => handleCountryChange(el.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
