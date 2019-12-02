import wznUtil from "wzn-utils";
import Taro from "@tarojs/taro";

export const Api = (options={methods: 'GET',data : {}}) => {
  const result = Taro.request({
      url: options.url,
      data: options.data,
  })
}
export const Util = { ...wznUtil };