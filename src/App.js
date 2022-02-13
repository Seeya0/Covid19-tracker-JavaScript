import { useEffect, useState } from 'react';
import { fetchData } from './api';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const firstFetch = async () => {
      const response = await fetchData();
      console.log(response);
      setData(response);
    };
    firstFetch();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    console.log({ country, data });
    setData({ data });
    setCountry({ country: country });
  };

  return (
    <div className="App">
      <Header />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
