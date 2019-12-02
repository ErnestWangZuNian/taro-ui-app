import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import MyTicket from "./my-ticket";
import SwipeCode from "./swipe-code";

import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
    this.tabList = [
      { title: "扫码缴费", iconType: "camera" },
      { title: "我的票据", iconType: "bullet-list" }
    ];
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    const { currentTab } = this.state;
    Taro.setNavigationBarTitle({
      title: this.tabList[currentTab].title
    });
  }

  componentDidUpdate() {
    const { currentTab } = this.state;
    Taro.setNavigationBarTitle({
      title: this.tabList[currentTab].title
    });
  }
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 切换tab
  handleClick(value) {
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
          tabList={this.tabList}
          onClick={this.handleClick}
        />
        {currentTab === 0 ? <SwipeCode /> : null}
        {currentTab === 1 ? <MyTicket /> : null}
      </View>
    );
  }
}
export default Home;
