import wznUtil from "wzn-utils";
import Api from "./api";
import Taro from "@tarojs/taro";

const utils = {
  ...wznUtil,
  login: async () => {
    const { code } = await Taro.login();
    await Api.get("/api/loginOpenId", {
      code
    });
  }
};

export default utils;
