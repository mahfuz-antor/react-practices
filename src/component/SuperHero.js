import React, { useEffect, useState } from "react";
import axios from "axios";

const SuperHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  // fetching data from localhost:4000
  useEffect(() => {
    axios.get("http://localhost:4000/superheros").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  console.log(data);

  return (
    <>
      <div className="px-5">
        <h2 className="fs-1">Super Heros Page</h2>
        {data.map((hero) => (
          <h4 key={hero.id} className="fs-4">
            {hero.name}
          </h4>
        ))}
      </div>
    </>
  );
};

export default SuperHero;
