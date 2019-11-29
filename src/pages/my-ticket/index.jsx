import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./style.scss";

class MyTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  config = {
    navigationBarTitleText: "我的票据"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className='my-ticket-container'>我的票据</View>;
  }
}
export default MyTicket;
