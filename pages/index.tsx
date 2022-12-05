import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";

export const getTest = async () => {
  const { data } = await axios.get("/test");
  return data;
};

const Home = () => {
  const [test, setTest] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/name")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    // .catch((err) => console.log(err));

    // fetch("http://localhost:3030/test")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <input />
      {test.map((el: string) => (
        <li key={el}>{el}</li>
      ))}
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
