import React from "react";
import TableWrapper from "./Table.style";
import { AssetsHeaderList, TableTokenListApi } from "../../../assets/api/Home";
import Loader from "../../Loader";
import { CalcTwoDigit, numFormatter } from "../../../helper";

const Table = ({ process, status }) => {
  const PoolAssetsListApi = TableTokenListApi();

  return (
    <TableWrapper>
      <div className="container assets mt-lg-2 mt-md-2 mt-4 pb-3">
        <div className="row pl-lg-2 pr-lg-2">
          <div className="col-12">
            <div className="title">
              <span>All assets</span>
            </div>
          </div>
        </div>

        <div className="row pl-lg-2 pr-lg-2 mt-3 assets_table">
          <div className="col-12">
            <div className="Table_card table-responsive-sm">
              {process ? (
                <Loader />
              ) : (
                <table className="table mt-4">
                  <thead>
                    <tr>
                      {AssetsHeaderList.map((list) => {
                        return (
                          <th scope="col" key={list.id}>
                            {list.name}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {PoolAssetsListApi &&
                      PoolAssetsListApi.map((list) => {
                        return (
                          <tr key={list.id}>
                            <td>
                              <div className="d-flex align-items-center table_list">
                                <img src={list.img} alt="Loading..." />
                                <div className="token_name pl-3">
                                  <p>{list.AssetsName}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="table_list">
                                <p>{list.LTV}%</p>
                              </div>
                            </td>
                            <td>
                              <div className="table_list">
                                <p>
                                  {numFormatter(list.TotalSupply)}{" "}
                                  {list.AssetsName}
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="table_list">
                                <p>{CalcTwoDigit(list.SupplyAPY)}%</p>
                              </div>
                            </td>
                            <td>
                              <div className="table_list">
                                <p>
                                  {numFormatter(list.TotalBorrowed)}{" "}
                                  {list.AssetsName}
                                </p>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </TableWrapper>
  );
};

export default Table;
