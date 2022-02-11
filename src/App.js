import { useEffect, useState } from 'react';
import { fetchData } from './api';
import CountryPicker from './components/CountryPicker';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      console.log(data);
      setData(data);
    })();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    console.log(country, data);
    setData(data);
    setCountry(country);
  };

  return (
    <div className="App">
      <Header />
      <CountryPicker handleCountryChange={handleCountryChange} />
    </div>
  );
}

export default App;
