import { CountryData } from "../lib/countryData";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FaBackward } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

interface Country {
  country: CountryData[];
}

const CountryDetails = ({ country }: Country) => {
  const navigate = useNavigate();
  const { countryName } = useParams();

  const handleBackNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };
  const eachCountry = country.filter(
    (item) => item.name.common === countryName
  );
  return (
    <div className="flex flex-col gap-12">
      <Button
        className="flex items-center  bg-[#293947] border-0 w-[10%] gap-2 mt-[2em] shadow-md"
        onClick={handleBackNavigate}
      >
        <FaBackward />
        <span>Back</span>
      </Button>
      {eachCountry.map((item, index) => {
        return (
          <div
            className="country-info flex justify-between items-center mt-[2em]"
            key={index}
          >
            <img
              src={item.flags?.png}
              alt="country's flag"
              className="h-34 w-[30%]"
            />
            <div className="details flex flex-col gap-3 text-[white]">
              <h2 className="text-xl">{item.name.common}</h2>
              <div className="second-container flex justify-between gap-16 text-sm ">
                <div className="left-content">
                  <p>Native Name: {item.name.nativeName?.fra?.common}</p>
                  <p>Population: {item.population}</p>
                  <p>Region: {item.region}</p>
                  <p>Sub Region: {item.subregion}</p>
                  <span className="flex gap-1">
                    Capital:
                    {item.capital?.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </span>
                </div>
                <div className="right-content">
                  <span className="flex gap-1">
                    Top Level Domain:{" "}
                    {item.tld?.map((item, index) => {
                      return <p key={index}>{item.split("").slice(1)}</p>;
                    })}
                  </span>
                  <p>Currencies: {item.currencies?.XPF?.name}</p>
                  <p>Languages: {item.languages?.fra}</p>
                </div>
              </div>
              <div className="btn-content text-sm flex justify-between items-center">
                <p>Border countries:</p>
                <div className="flex gap-2 items-center">
                  {item.borders?.map((info, index) => {
                    return (
                      <Link
                        to={`/country/${item.name.common}`}
                        key={index}
                        className="rounded-[5px] bg-[#293947] text-sm p-[0.5em]"
                      >
                        {info}
                      </Link>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryDetails;
