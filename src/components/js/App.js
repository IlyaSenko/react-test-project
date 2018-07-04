import React, {Component} from 'react';
import style from '../scss/App.scss';
import NormalLoginForm from './form.js'
import  {Layout}  from 'antd';
import {Button} from 'antd';
import {Input} from 'antd';


// console.log(form)

const {
  Header,
  Footer,
  Sider,
  Content
} = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   condition: "unsigned";
    //   content: ""
    // };

    this.Info = () => {
      if(this.state.condition = "unsigned") {
        return <p className={style.p}> hey, sign up firstly, motherfucker</p>
      }
    }
  }

  render() {
    return (
      <Layout>
        <Header className={style.header}>
          <Input placeholder="login" className={style.input} />
          <Input placeholder="passsword" className={style.input} />
          <Button className={style.input}>sign up</Button>
        </Header>
        <Layout>
          <Sider className={style.sider}>Sider</Sider>
          <Content className={style.content}>
          <div>
            <NormalLoginForm className='form' />
          </div>
          </Content>
        </Layout>
        <Footer className={style.footer}>Footer</Footer>
      </Layout>
    )
  }

}
