import Taro, { Component } from "@tarojs/taro";
import { View, Picker } from "@tarojs/components";
import "./index.scss";
import { AtInput, AtButton, AtRadio } from "taro-ui";
import FormItem from "../../components/form-item";
import Validator from "../../components/form-item/validator";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: null,
      email: null,
      idCard: "122",
      radio: null,
      select: null,
      showMessage: false
    };
    this.validator = new Validator();
  }
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  changeInput(type, value) {
    this.setState({
      [type]: value
    });
  }
  //  确定
  confirm() {
    this.validator.validateFileds((err, values) => {
      console.log(err, values, "wwwwww");
    });
    this.setState({
      showMessage: this.validator.showMessage
    });
  }

  render() {
    const { mobile, email, idCard, radio, select } = this.state;
    console.log(radio, "1211");
    return (
      <View className='index'>
        <FormItem
          getFiledInfo={this.validator.getFiledInfo("mobile", {
            value: mobile,
            rules: ["mobile"]
          })}
        >
          <AtInput
            value={mobile}
            title='手机号码'
            onChange={this.changeInput.bind(this, "mobile")}
          ></AtInput>
        </FormItem>
        <FormItem
          getFiledInfo={this.validator.getFiledInfo("email", {
            value: email,
            rules: ["required", "email"]
          })}
        >
          <AtInput
            value={email}
            title='邮箱'
            onChange={this.changeInput.bind(this, "email")}
          ></AtInput>
        </FormItem>
        <FormItem
          getFiledInfo={this.validator.getFiledInfo("idCard", {
            value: idCard,
            rules: ["required", "idCard"]
          })}
        >
          <AtInput
            title='身份证号码'
            value={idCard}
            onChange={this.changeInput.bind(this, "idCard")}
          ></AtInput>
        </FormItem>
        <FormItem
          getFiledInfo={this.validator.getFiledInfo("radio", {
            value: radio,
            rules: ["required"]
          })}
        >
          <AtRadio
            options={[
              { label: "单选项一", value: "option1" },
              { label: "单选项二", value: "option2" },
              {
                label: "单选项三",
                value: "option3"
              }
            ]}
            value={radio}
            onClick={this.changeInput.bind(this, "radio")}
          />
        </FormItem>
        <FormItem>
          <View>
            <Picker
              mode='selector'
              range={['美国','日本']}
              onChange={this.changeInput.bind(this, "select")}
            >
              <View className='picker'>当前选择：{select}</View>
            </Picker>
          </View>
        </FormItem>
        <AtButton type='primary' onClick={this.confirm.bind(this)}>
          确定
        </AtButton>
      </View>
    );
  }
}
export default Index;
