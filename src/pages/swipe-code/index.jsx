import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./style.scss";

class SwipeCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  config = {
    navigationBarTitleText: "扫码"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className='swipe-code-container'>扫码</View>;
  }
}
export default SwipeCode;
