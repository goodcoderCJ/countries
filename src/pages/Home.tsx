import { CountryData } from "../lib/countryData";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/card";

import Countries from "./Countries";
import { useState } from "react";
type Country = {
  country: CountryData[];
};

const Home = ({ country }: Country) => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchWord(e.target.value);
  };

  const [optionSelect, setOptionSelect] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSelect(e.target.value);
    console.log(e.target.value);
  };

  const searchedCountry = country.filter((item) => {
    if (item.name.common.toLowerCase().includes(searchWord.toLowerCase())) {
      return item.name.common;
    }
  });

  const searchedOptionContinent = country.filter((item) => {
    return item.region?.toLowerCase() === optionSelect.toLowerCase();
  });

  return (
    <>
      <section className="search-filter mt-[2em] mb-[4em] z-[9999999999999]">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
          <div className="search-input-container bg-[white] dark:bg-[#293947] flex items-center gap-4 px-[0.5em] py-[0.7em] rounded-[5px] w-[100] md:w-[40%]">
            <FaSearch className="text-[#111111] dark:text-[white] text-[0.9rem] ml-[1em]" />
            <input
              type="search"
              name="searchText"
              id="searchText"
              value={searchWord}
              onChange={handleSearchWord}
              className="bg-[white] dark:bg-[#293947] w-full text-[#111111] dark:text-[white] border-0 outline-[0]"
              placeholder="Search for a country..."
            />
          </div>

          <select
            value={optionSelect}
            onChange={handleOptionChange}
            className="w-[180px] bg-[#fffcfc] dark:bg-[#334555] text-[#111111] dark:text-[white] border-0 outline-[0] ring-offset-0 z-[9999999999] md:p-2 p-3 rounded-[3px]"
          >
            <option value="None">Select Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
      <section className="countries grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        {optionSelect !== "" &&
        optionSelect !== "None" &&
        searchWord.length === 0
          ? searchedOptionContinent.map((data, index) => {
              return (
                <Link to={`/country/${data.cca3}`} key={index}>
                  <Card className="text-[#111111] dark:text-[white] col-span-1 flex flex-col bg-[white] dark:bg-[#293947] border-0 shadow-lg">
                    <img
                      src={data.flags?.png}
                      alt="countries flag imag"
                      className="w-full rounded-t-[10px] h-[9rem]"
                    />

                    <div className="description flex flex-col pt-[0.9em] pb-[1.7em] px-[1em]">
                      <h4 className="mb-[0.5em] text-sm">{data.name.common}</h4>
                      <p className="text-xs mb-1">
                        Population: {data.population}
                      </p>
                      <p className="text-xs mb-1">Region: {data.region}</p>
                      <p className="text-xs mb-1">Capital: {data.capital}</p>
                    </div>
                  </Card>
                </Link>
              );
            })
          : searchWord.length > 1 &&
            (optionSelect === "" || optionSelect === "None")
          ? searchedCountry.map((data, index) => {
              return (
                <Link to={`/country/${data.cca3}`} key={index}>
                  <Card className="text-[#111111] dark:text-[white] col-span-1 flex flex-col dark:bg-[#293947] bg-[white] border-0 shadow-lg">
                    <img
                      src={data.flags?.png}
                      alt="countries flag imag"
                      className="w-full rounded-t-[10px] h-[9rem]"
                    />

                    <div className="description flex flex-col pt-[0.9em] pb-[1.7em] px-[1em]">
                      <h4 className="mb-[0.5em] text-sm">{data.name.common}</h4>
                      <p className="text-xs mb-1">
                        Population: {data.population}
                      </p>
                      <p className="text-xs mb-1">Region: {data.region}</p>
                      <p className="text-xs mb-1">Capital: {data.capital}</p>
                    </div>
                  </Card>
                </Link>
              );
            })
          : ""}
        {searchWord.length === 0 &&
          (optionSelect === "" || optionSelect === "None") && (
            <Countries country={country} />
          )}
        {/* {message && <p>Error occurred</p>} */}
      </section>
    </>
  );
};

export default Home;
