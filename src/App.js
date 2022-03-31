import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import SnackbarProviderMessage from "./components/SnackbarProviderMessage";
import Snackbar from "./helper/Snackbar";
import { getPoolAssetsInfoFun } from "./redux/actions/lp_function";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPoolAssetsInfoFun());
  }, []);

  return (
    <>
      <SnackbarProviderMessage>
        <Snackbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </SnackbarProviderMessage>
    </>
  );
};

export default App;
