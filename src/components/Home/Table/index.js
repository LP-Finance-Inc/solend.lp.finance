import React from "react";
import TableWrapper from "./Table.style";
import { AssetsHeaderList, TableTokenList } from "../../../assets/api/Home";

const Table = () => {
  return (
    <TableWrapper>
      <div className="container assets mt-2 pb-3">
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
              <table className="table table-hover mt-4">
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
                  {TableTokenList.map((list) => {
                    return (
                      <tr key={list.id}>
                        <td>
                          <div className="d-flex align-items-center table_list">
                            <img src={list.img} alt="Loading..." />
                            <div className="token_name pl-3">
                              <p>{list.AssetsName}</p>
                              <span>$120.3</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="table_list">
                            <p>{list.LTV}</p>
                          </div>
                        </td>
                        <td>
                          <div className="table_list">
                            <p>{list.TotalSupply}</p>
                          </div>
                        </td>
                        <td>
                          <div className="table_list">
                            <p>{list.SupplyAPY}</p>
                          </div>
                        </td>
                        <td>
                          <div className="table_list">
                            <p>{list.TotalBorrow}</p>
                          </div>
                        </td>
                        <td>
                          <div className="table_list">
                            <p>{list.BorrowAPY}</p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </TableWrapper>
  );
};

export default Table;
