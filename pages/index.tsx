import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";

export const getName = async () => {
  const { data } = await axios.get("/api/name");
  return data;
};

const Home = () => {
  const [name, setName] = useState<string>("");

  // useEffect(() => {
  //   getName().then((data) => setName(data));
  // }, []);

  const handleName = async () => {
    const { data } = await axios.get("/api/name");
    setName(data);
  };

  return (
    <>
      <h1>Home</h1>
      <input />
      <p>{name}</p>
      <button onClick={handleName}>getName</button>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   // const { data } = await axios.get<string[]>("http://localhost:3000/test");
//   // console.log(data);

//   return {
//     props: {
//       data: ["test1", "test2"],
//     },
//   };
// };

export default Home;
