import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import IconButton from '../../../components/icon-button';
import "./style.scss";

class SwipeCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 扫码
  async swipeCode() {
    const res = await Taro.scanCode();
    console.log(res, 'wwww');
  }

  render() {
    return (
      <View className='swipe-code-container'>
        <View className='top-container'>
          <View className='btn-container'>
            <IconButton value="scan" onClick={this.swipeCode.bind(this)}>扫码缴费</IconButton>
          </View>
        </View>
      </View>
    );
  }
}
export default SwipeCode;
