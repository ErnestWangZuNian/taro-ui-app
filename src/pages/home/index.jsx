import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./style.scss";
import { AtTabBar } from "taro-ui";
import SwipeCode from "../swipe-code";
import Myticket from "../my-ticket";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 切换tab
  handleClick(value) {
    switch (value) {
      case 1:
        Taro.navigateTo({
          url: "/pages/my-ticket/index"
        });
        break;
      default:
        Taro.navigateTo({
          url: "/pages/swipe-code/index"
        });
        break;
    }
    this.setState({
      currentTab: value
    });
  }

  render() {
    const { currentTab } = this.state;
    return (
      <View className='home-container'>
        <AtTabBar
          fixed
          current={currentTab}
          tabList={[
            { title: "扫码缴费", iconType: "camera" },
            { title: "我的票据", iconType: "bullet-list" }
          ]}
          onClick={this.handleClick.bind(this)}
        />
      </View>
    );
  }
}
export default Home;
