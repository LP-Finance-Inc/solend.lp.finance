import React from "react";
import PoolOverviewWrapper from "./PoolOverview.style";
import { TableTokenListApi } from "../../../assets/api/Home";

const PoolOverview = () => {
  const PoolAssetsListApi = TableTokenListApi();

  return (
    <PoolOverviewWrapper>
      <div className="container poolOverview mt-4 pt-1">
        <div className="row pl-lg-2 pr-lg-2">
          <div className="col-12">
            <div className="title">
              <span>Pool overview</span>
            </div>
          </div>

          <div className="col-12 mt-3">
            <div className="poolOverview_details">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-6 d-lg-flex justify-content-lg-start">
                  <div className="poolOverview_card">
                    <span>Total supply</span>
                    <p className="pt-1">$1.24M</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 d-lg-flex justify-content-lg-start ">
                  <div className="poolOverview_card">
                    <span>Total borrow</span>
                    <p className="pt-1">$463M</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 d-lg-flex justify-content-lg-start mt-lg-0 mt-md-0 mt-2">
                  <div className="poolOverview_card">
                    <span>TVL</span>
                    <p className="pt-1">$780M</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6  d-lg-flex justify-content-lg-start mt-lg-0 mt-md-0 mt-2">
                  <div className="poolOverview_card">
                    <span>Assets</span>
                    <p className="pt-1">
                      {PoolAssetsListApi && PoolAssetsListApi.length}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PoolOverviewWrapper>
  );
};

export default PoolOverview;
