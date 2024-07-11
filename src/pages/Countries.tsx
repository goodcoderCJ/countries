import { CountryData } from "../lib/countryData";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/card";

type Country = {
  country: CountryData[];
};
const Countries = ({ country }: Country) => {
  return (
    <>
      {country.map((data, index) => {
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
                <p className="text-xs mb-1">Population: {data.population}</p>
                <p className="text-xs mb-1">Region: {data.region}</p>
                <p className="text-xs mb-1">Capital: {data.capital}</p>
              </div>
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default Countries;
