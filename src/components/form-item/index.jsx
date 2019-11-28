import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Util from "wzn-utils";
import "./index.scss";


class FormItem extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { getFiledInfo } = this.props;
    const fileInfo = getFiledInfo;
    let isRequired = false;
    if (
      fileInfo &&
      fileInfo.rules &&
      Util.isArray(fileInfo.rules) &&
      fileInfo.rules.length
    ) {
      fileInfo.rules.forEach(item => {
        if (Util.isString(item) && item === "required") {
          isRequired = true;
        }
        if (Util.isObject(item) && item.required) {
          isRequired = true;
        }
      });
    }
    return (
      <View className='form-item-container'>
        <View className='content-item-container'>
          <View className='required-mask'>{isRequired ? "*" : null}</View>
          {this.props.children}
        </View>
        {fileInfo.isError ? (
          <View className='error-item-container'>{fileInfo.message}</View>
        ) : null}
      </View>
    );
  }
}
export default FormItem;
