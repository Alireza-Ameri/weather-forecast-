import type { NextPage } from "next";
import Head from "next/head";

import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

import AllCities from "../Components/AllCity/AllCities";

const Home: NextPage = () => {
  const [listCity, setListCity] = useState<any>([]);

  useEffect(() => {
    //fetching data
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=a80bec999ed8c77b8e990b8a42ce51cc"
      )
      .then((res) => {
        console.log("res", res);
        const updatecity = res.data.list;
        setListCity(updatecity);
        console.log("city", listCity);
      })
      .catch((err: Error) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      <Head>
        <title> tenzo challenge </title>
        <meta name="description" content="code challenge" />
      </Head>

      {/* {homepage components} */}
      {listCity && <AllCities list={listCity} />}
    </div>
  );
};

//try for getSSR

// export const getServerSideProps: GetServerSideProps = async () => {
//   // Fetch data from external API
//   const res = await fetch(
//     "https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=a80bec999ed8c77b8e990b8a42ce51cc"
//   );
//   console.log("res", res);
//   // const data = await res.json();
//   // const cityList = data.list;

//   // Pass data to the page via props
//   return { props: {listcity: citylist} };
// };

export default Home;
