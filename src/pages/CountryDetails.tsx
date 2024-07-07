import { CountryData } from "../lib/countryData";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FaBackward } from "react-icons/fa6";
import { Link  } from "react-router-dom";


interface Country {
  country: CountryData;
}

const CountryDetails = ({ country }: Country) => {
  const navigate = useNavigate();
 
  const handleBackNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <div className="flex flex-col gap-12">
      <Button
        className="flex items-center justify-center bg-[#293947] border-0"
        onClick={handleBackNavigate}
      >
        <FaBackward />
        <span>Back</span>
      </Button>
      <div className="country-info flex justify-between items-center">
        <img
          src={country.flags?.png}
          alt="country's flag"
          className="h-10 w-[30%]"
        />
        <div className="details flex flex-col gap-3">
          <h2 className="text-xl">{country.name.common}</h2>
          <div className="second-container flex justify-between">
            <div className="left-content">
              <p>Native Name: {country.name.nativeName?.fra?.common}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.subregion}</p>
              <span>
                Capital:{" "}
                {country.capital?.map((item,index) => {
                  return <p key={index}>{item}</p>;
                })}
              </span>
            </div>
            <div className="right-content">
              <p>
                Top Level Domain:{" "}
                {country.tld?.map((item,index) => {
                  return <p key={index}>{item}</p>;
                })}
              </p>
              <p>Currencies: {country.currencies?.XPF?.name}</p>
              <p>Languages: {country.languages?.fra}</p>
            </div>
            <div className="btn-content">
              <p>Border countries: {
              country.borders?.map((item,index)=>{
                return (<Link to={`/${country.name.common}`} key={index} className="rounded-[5px] bg-[#293947] text-sm p-[0.5em]">{item}</Link>)
              })} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
