import * as anchor from "@project-serum/anchor";
import { SolendMarket } from "@solendprotocol/solend-sdk";
import { NETWORK_MAINNET } from "../lib/constants/common";

const { Connection } = anchor.web3;

const getFullPercent = (percent_str) => {
  return parseFloat(percent_str) * 100;
};

const getParsedAmount = (amount_str) => {
  return new anchor.BN(amount_str)
    .div(new anchor.BN("1000000000000000000000000"))
    .toString();
};

export const getPoolAssetsInfo = async (Token) => {
  try {
    const connection = new Connection(NETWORK_MAINNET, "processed");

    const market = await SolendMarket.initialize(connection);

    await market.loadReserves();

    var TokenPoolAssetsInfoObjet = [];
    for (var i = 0; i < market.reserves.length; i++) {
      const assetReserve = market.reserves[i];

      const resultObject = {
        AssetName: assetReserve.stats.symbol,
        LTV: getFullPercent(assetReserve.stats.loanToValueRatio.toString()),
        TotalSupply: getParsedAmount(
          assetReserve.stats.totalDepositsWads.toString()
        ),
        SupplyAPY: getFullPercent(
          assetReserve.stats.supplyInterestAPY.toString()
        ),
        TotalBorrowed: getParsedAmount(
          assetReserve.stats.totalBorrowsWads.toString()
        ),
      };

      TokenPoolAssetsInfoObjet.push(resultObject);
    }

    market.refreshAll();

    return TokenPoolAssetsInfoObjet;
  } catch (err) {}
};
