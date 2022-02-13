import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      setCountries(await fetchCountries());
    };
    fetchAllCountries();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <label className="text-xl font-semibold mb-3">
        検索したい国を選択してください
      </label>
      <select
        className="text-lg bg-gray-200 rounded-full p-2 text-center outline-none appearance-none font-semibold"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">クリック or タップ！</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
