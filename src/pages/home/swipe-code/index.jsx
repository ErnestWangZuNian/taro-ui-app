import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
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
    return (
      <View className='swipe-code-container'>
        <View className='top-container'>
          <View className='btn-container'>
            <AtIcon prefixClass='icon' value='scan'></AtIcon>扫码缴费
          </View>
        </View>
      </View>
    );
  }
}
export default SwipeCode;
