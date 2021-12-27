import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";

import axios from "axios";
import { useState, useEffect } from "react";

import { Box } from "@mui/material";

import Weather from "../../Components/Weather/Weather";

const CityName: NextPage = () => {
  const [city, setCity] = useState<any>();
  const router = useRouter();
  const cityname = router.query.cityName;
  console.log("cityname", cityname);
  useEffect(() => {
    // fetching data
    if (cityname)
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a80bec999ed8c77b8e990b8a42ce51cc`
        )
        .then((res) => {
          console.log("res", res);
          const updatecity = res.data;
          setCity(updatecity);
          console.log("city", city);
        })
        .catch((err: Error) => {
          console.log("error", err);
        });
  }, [cityname]);

  return (
    <Box>
      {/* cityName Component */}
      {city && (
        <Box>
          <Weather city={city} />
        </Box>
      )}
    </Box>
  );
};

//try for getSSR

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Fetch data from external API
//   // const res = await fetch(
//   //   `https://api.openweathermap.org/data/2.5/weather?q=${context.query.cityName}&appid=a80bec999ed8c77b8e990b8a42ce51cc`
//   // );
//   // const data = await res.json();
//   // const name = data.data;

//   // Pass data to the page via props
//   return { props: { city: name } };
// };

export default CityName;
