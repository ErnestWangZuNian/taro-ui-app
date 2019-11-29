import Taro, { Component } from "@tarojs/taro";
import { View, Picker } from "@tarojs/components";
import "./style.scss";
import { AtInput, AtButton, AtRadio, AtTabBar } from "taro-ui";
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

  async componentDidMount() {
    const res = Taro.request({
      url: "https://api.apiopen.top/getJoke"
    });
    console.log(res);
  }

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

  // 切换tab
  handleClick(value){
   console.log(value, '21111');
  }

  render() {
    const { mobile, email, idCard, radio, select } = this.state;
    return (
      <View className='index'>
        <AtTabBar
          fixed
          tabList={[
            { title: "扫码缴费",  iconType: 'camera' },
            { title: "我的票据", iconType: 'bullet-list'},
          ]}
          onClick={this.handleClick.bind(this)}
        />
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
              range={["美国", "日本"]}
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
