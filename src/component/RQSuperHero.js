import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHero = () => {
  const { data, loading, error } = useQuery("super-heros", () => {
    return axios.get("http://localhost:4000/superheros");
  });
  console.log(data?.data, "getting useQuery");
  return (
    <>
      <div className="px-5">
        <h2 className="fs-2">RQ Super Heros Page</h2>
        {data?.data.map((hero, id) => (
          <div key={hero.id} className="d-flex gap-5 justify-content-evenly">
            <h6 className="text-center">{hero.name}</h6>
            <p>{hero.alterEgo}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RQSuperHero;
