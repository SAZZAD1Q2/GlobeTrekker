import './App.css';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/AllCountry';
import Details from './components/CountryDetails';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Countries />} />
          <Route path="/details/:name" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
