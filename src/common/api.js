import Taro from "@tarojs/taro";
import { BASE_URL } from "../constant";
import Util from "./util";

const request = async (options = { methods: "GET", data: {} }) => {
  const result = new Promise(async (resolve, reject) => {
    const res = await Taro.request({
      url: `${BASE_URL}${options.url}`,
      data: options.data,
      header: {
        "content-type": "application/json"
      }
    });
    if (Number(res.statusCode) === 707) {
      Taro.showModal({
        title: "未登陆",
        showCancel: false
      });
      Util.login();
    } else if (Number(res.statusCode) === 200) {
      const { success } = res.data;
      if (success) {
        resolve(res.data);
      } else {
        const { message } = res.data;
        Taro.showModal({
          title: message || "错误",
          showCancel: false
        });
        reject(res.data);
      }
    }
  });
  return result;
};

const Api = {
  get: (url, data) => {
    const result = request({
      url,
      data
    });
    return result;
  },
  post: (url, data) => {
    const result = request({
      methods: "POST",
      url,
      data
    });
    return result;
  }
};

export default Api;
