import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
  background-color: blue;
  width: 40px;
  height: 40px;
  color: #fff;
  border: none;
  margin: 2px;
  border-radius: 50%;
}
`;

const Container = styled.div`
  width: 60vw;
  height: 70vh;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

export default class App extends React.Component {
  state = {
    cont: 0
  };

  add = () => {
    let { cont } = this.state;
    this.setState({
      cont: cont < 10 ? cont + 1 : cont
    });
  };

  remove = () => {
    let { cont } = this.state;
    this.setState({
      cont: cont > 0 ? cont - 1 : cont
    });
  };

  limpar = () => {
    this.setState({
      cont: 0
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <h1>Contador</h1>
        <h2>{this.state.cont}</h2>
        <div>
          <button onClick={this.add}>+</button>
          <button onClick={this.remove}>-</button>
          <button onClick={this.limpar}>C</button>
        </div>
      </Container>
    );
  }
}

//npm install --save styled-components
