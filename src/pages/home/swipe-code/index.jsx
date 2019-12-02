import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon, AtList, AtListItem } from "taro-ui";
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
    // try {
    //   const login = await Taro.getUserInfo();
    //   const res = await Taro.scanCode();
    //   console.log(res, login, 'wwww');
    // } catch (error) {
    //   console.log(error, 'wwww');
    // }
  }

  render() {
    return (
      <View className='swipe-code-container'>
        <View className='top-container'>
          <View className='btn-container'>
            <IconButton value="scan" onClick={this.swipeCode.bind(this)}>扫码缴费</IconButton>
          </View>
        </View>
        <View className="content-container">
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' extraText='详细信息' />
        </View>
      </View>
    );
  }
}
export default SwipeCode;
