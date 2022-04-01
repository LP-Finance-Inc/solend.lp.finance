import { getPoolAssetsInfo } from "../../../utils/getPoolAssetsInfo";

export const getPoolAssetsInfoFun = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SEND_POOL_ASSETS_PROGRESS",
      });

      const PoolAssetsObj = await getPoolAssetsInfo();

      dispatch({
        type: "SEND_POOL_ASSETS_INFO",
        payload: PoolAssetsObj,
      });
    } catch (error) {
      dispatch({
        type: "SEND_POOL_ASSETS_ERROR",
      });
    }
  };
};
