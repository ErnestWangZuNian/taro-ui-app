import Taro, { Component } from "@tarojs/taro";
import PropTypes from 'prop-types';
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import { Util } from "../../common";
import "./style.scss";

class IconButton extends Component {

  static defaultProps = {
    size: 24,
    isAt: false,
    onClick: () => null
  };

  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string.isRequired,
    size: PropTypes.string,
    isAt: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 触发点击事件
  handleClick(e) {
    const { onClick } = this.props;
    if (onClick && Util.isFunction(onClick)) {
      onClick(e);
    }
  }

  render() {
    const { value, size, isAt } = this.props;
    return (
      <View className='icon-button-container' onClick={this.handleClick.bind(this)}>
        <View className="icon-container">
          <AtIcon prefixClass={isAt ? 'at-icon' : 'icon'} value={value} size={size}></AtIcon>
        </View>
        <View className='text-container'>
          {this.props.children}
        </View>
      </View>
    );
  }
}
export default IconButton;
