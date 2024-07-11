import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const CountryDetails = lazy(() => import("./pages/CountryDetails"));
import { CountryData } from "./lib/countryData";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    async function getCountries() {
      const countryURL = "https://restcountries.com/v3.1/all";
      try {
        const response = await axios.get(countryURL);
        const data = response.data;

        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCountries();
    console.log("running");
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="text-white dark:text-[#111111] font-medium text-xl flex justify-center items-center">
            <div>Loading...</div>
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home country={countries} />} />
              <Route
                path="/country/:countryName"
                element={<CountryDetails country={countries} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
