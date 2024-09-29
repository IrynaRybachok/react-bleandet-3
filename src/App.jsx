import { Header } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Country } from 'pages/Country';
import { SearchCountry } from 'pages/SearchCountry';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
