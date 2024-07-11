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
  const eachCountry = country.filter((item) => item.cca3 === countryName);

  return (
    <div className="">
      <Button
        className="shadow-md text-[#111111] dark:text-[white] w-[50%] sm:w-[30%] md:w-[25%] dark:bg-[#293947] bg-[white] flex gap-3"
        onClick={handleBackNavigate}
      >
        <FaBackward className="text-[1.1rem]  sm:text-[1.1rem] md:text-base" />
        <span>Back</span>
      </Button>
      {eachCountry.map((item, index) => {
        return (
          <div
            className="country-info mt-[2em] flex flex-col md:flex-row md:justify-between  md:gap-24"
            key={index}
          >
            <img
              src={item.flags?.png}
              alt="country's flag"
              className="h-25 md:h-34 w-[100%] sm:w-[100%] md:w-[45%]"
            />
            <div className="details-container  text-[#111111] dark:text-[white] mt-8 md:mt-0 flex flex-col gap-10 text-sm w-[100%] sm:w-[100%] md:w-[55%]">
              <h2 className="text-xl">{item.name.common}</h2>
              <div className="second-container flex flex-col gap-10">
                <div className="left-content">
                  <p>
                    Native Name:{" "}
                    <span className="text-[black] dark:text-[#cccccc]">
                      {item.name.nativeName?.fra?.common}
                    </span>
                  </p>

                  <p>
                    Population:{" "}
                    <span className="text-[black] dark:text-[#cccccc]">
                      {item.population}
                    </span>
                  </p>

                  <p>
                    Region:{" "}
                    <span className="text-[black] dark:text-[#cccccc]">
                      {" "}
                      {item.region}{" "}
                    </span>
                  </p>

                  <p>
                    Sub Region:{" "}
                    <span className="text-[black] dark:text-[#cccccc]">
                      {" "}
                      {item.subregion}
                    </span>
                  </p>

                  <span className="flex gap-2">
                    Capital:
                    {item.capital?.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="text-[black] dark:text-[#cccccc]"
                        >
                          {item}
                        </p>
                      );
                    })}
                  </span>
                </div>
                <div className="right-content">
                  <span className="flex gap-2">
                    Top Level Domain:{" "}
                    {item.tld?.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="text-[black] dark:text-[#cccccc]"
                        >
                          {item.split("").slice(1)}
                        </p>
                      );
                    })}
                  </span>

                  <p>
                    Currencies:
                    <span className="text-[black] dark:text-[#cccccc]">
                      {" "}
                      {item.currencies?.XPF?.name}
                    </span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span className="text-[black] dark:text-[#cccccc]">
                      {" "}
                      {item.languages?.fra}
                    </span>
                  </p>
                </div>
              </div>
              <div className="btn-content text-sm ">
                <p>Border countries:</p>
                <div className="">
                  {item.borders?.map((info, index) => {
                    return (
                      <Link
                        to={`/country/${info} `}
                        key={index}
                        className="details-link rounded-[5px] bg-[white] dark:bg-[#293947] text-sm p-2 mr-4 text-[black] dark:text-[#cccccc]"
                      >
                        <Button className="">{info}</Button>
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
