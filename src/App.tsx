import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const CountryDetails = lazy(() => import("./pages/CountryDetails"));
import { CountryData } from "./lib/countryData";
import axios from "axios";

function App() {
  const [eachCountry, setEachCountry] = useState<CountryData>({
    name: {
      common: "",
      official: "",
      nativeName: {
        fra: {
          official: "",
          common: "",
        },
      },
    },
    tld: [],
    currencies: {
      XPF: {
        name: "",
        symbol: "",
      },
    },
    capital: [],
    region: "",
    subregion: "",
    languages: {
      fra: "",
    },
    borders: [],
    population: 0,
    flags: {
      png: "",
      svg: "",
    },
  });
  const { countryName } = useParams();
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await axios.get<CountryData>(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      setEachCountry(response.data);
    };
    fetchCountry();
  }, [eachCountry, countryName]);
  return (
    <>
      <Suspense
        fallback={
          <div className="text-white font-medium text-xl">Loading...</div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/:countryName"
                element={<CountryDetails country={eachCountry} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
