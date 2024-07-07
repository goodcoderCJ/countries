import { Card } from "../components/ui/card";
import axios from "axios";

import { useState, useEffect } from "react";
import { CountryData } from "../lib/countryData";
import { FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  // const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function getCountries() {
      const countryURL = "https://restcountries.com/v3.1/all";
      try {
        const response = await axios.get(countryURL);
        const data = response.data;
        console.log(data);

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
      <section className="search-filter mt-[2em] mb-[4em]">
        <form action="">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="search-input-container bg-[#293947] flex items-center gap-4 px-[0.5em] py-[0.7em] rounded-[5px] w-[40%]">
              <FaSearch className="text-[#ebebeb] text-[0.9rem] ml-[1em]" />
              <input
                type="text"
                name="search"
                id="search"
                className="bg-inherit w-full text-[#ebebeb] border-0 outline-none"
                placeholder="Search for a country..."
              />
            </div>

            <Select>
              <SelectTrigger className="w-[180px] bg-[#293947] text-[#ebebeb] border-0 outline-none">
                <SelectValue placeholder="Filter by Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-[#293947] text-[#ebebeb] border-0 outline-none">
                  <SelectLabel>Countries</SelectLabel>
                  <SelectItem value="Africa">Africa</SelectItem>
                  <SelectItem value="America">America</SelectItem>
                  <SelectItem value="Asia">Asia</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="Oceania">Oceania</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
      </section>
      <section className="countries grid grid-col-1 md:grid-cols-4 gap-12">
        {countries.map((data) => {
          return (
            <Link to={`/${data.name.common}`} key={data.idd?.root}>
              <Card
                className="text-white col-span-1 flex flex-col bg-[#293947] border-0">
                <img
                  src={data.flags?.png}
                  alt="countries flag imag"
                  className="w-full rounded-t-[10px] h-[9rem]"
                />

                <div className="description flex flex-col pt-[0.9em] pb-[1.7em] px-[1em]">
                  <h4 className="mb-[0.5em] text-sm">{data.name.common}</h4>
                  <p className="text-xs mb-1">Population: {data.population}</p>
                  <p className="text-xs mb-1">Region: {data.region}</p>
                  <p className="text-xs mb-1">Capital: {data.capital}</p>
                </div>
              </Card>
            </Link>
          );
        })}
        {/* {message && <p>Error occurred</p>} */}
      </section>
    </>
  );
};

export default Home;
