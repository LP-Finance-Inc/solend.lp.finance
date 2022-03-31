import React from "react";
import { useSelector } from "react-redux";
import PoolOverview from "./PoolOverview";
import Table from "./Table";

const Home = () => {
  const PoolAssetsReducer = useSelector((state) => state.PoolAssetsReducer);

  return (
    <>
      <PoolOverview />
      <Table {...PoolAssetsReducer} />
    </>
  );
};

export default Home;
