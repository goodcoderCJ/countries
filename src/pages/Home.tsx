import { Card } from "../components/ui/card";

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
import { useState } from "react";
type Country = {
  country: CountryData[];
};

const Home = ({ country }: Country) => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.target.value);
    console.log(searchWord);
  };

  const [optionSelect, setOptionSelect] = useState("");
  const handleOptionChange = (val: string) => {
    setOptionSelect(val);
    console.log(val);
  };
  return (
    <>
      <section className="search-filter mt-[2em] mb-[4em]">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
          <div className="search-input-container bg-[#293947] flex items-center gap-4 px-[0.5em] py-[0.7em] rounded-[5px] w-[100] md:w-[40%]">
            <FaSearch className="text-[#ebebeb] text-[0.9rem] ml-[1em]" />
            <input
              type="search"
              name="searchText"
              id="searchText"
              value={searchWord}
              onChange={handleSearchWord}
              className="bg-inherit w-full text-[#ebebeb] border-0 outline-[0]"
              placeholder="Search for a country..."
            />
          </div>

          <Select value={optionSelect} onValueChange={handleOptionChange}>
            <SelectTrigger className="w-[180px] bg-[#293947] text-[#ebebeb] border-0 outline-[0] ring-offset-0">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent className="border-0 outline-none ring-offset-0">
              <SelectGroup className="bg-[#293947] text-[#ebebeb] border-0 outline-[0]">
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
      </section>
      <section className="countries grid grid-col-1 md:grid-cols-4 gap-12">
        {country.map((data, index) => {
          return (
            <Link to={`/country/${data.name.common}`} key={index}>
              <Card className="text-white col-span-1 flex flex-col bg-[#293947] border-0">
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
