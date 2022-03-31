import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import SnackbarProviderMessage from "./components/SnackbarProviderMessage";
import Snackbar from "./helper/Snackbar";

const App = () => {
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
