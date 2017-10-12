import React, { Component } from 'react';
import { View, Image } from 'react-native-elements';
import Style from './style';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { doLogin } from './actions';
import Input from '../../components/input';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,  Form, Item, Label } from 'react-native-elements';

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }
  return error;
};

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

  }

  onSubmit(values){
    this.props.doLogin(values,()=>{
      this.props.navigation.navigate("home")
    })
}


 

  render() {
    

    return (
      <Container style={Style.viewStyle}>
        <Content>
            <View>
                <Form style={Style.allwith}>
                    {this.props.error && <Text>{this.props.error}</Text>}
                    <Input name="email" label="Email" icon="person"/>
                    <Input name="password" label="Senha" icon="unlock"/>
                    <Button
                        style={Style.btn}
                        onPress={this.props.handleSubmit((event)=>this.onSubmit(event))}
                    >
                        <Text>Entrar</Text>
                    </Button>
                </Form>
            </View>
        </Content>
        <Footer>
          <FooterTab>
              <Left style={Style.mt15}>
                    <Text>Esqueceu sua senha?</Text>
              </Left>
              <Right style={Style.mb20}>
                  <Text>Criar uma conta</Text>
              </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function mapStateToProps(state){
    return {
      success:state.data
    }
  }

  
export default reduxForm({
    validate,
    form:'LoginPage'
})(
connect(mapStateToProps,{doLogin})(LoginPage)
)