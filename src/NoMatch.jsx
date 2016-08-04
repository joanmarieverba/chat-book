import React, { Component } from 'react';
import globalStyles from "./assets/styles/global.css";

var errorPage = {
    backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/stars-half-blue.jpg")',
   //  position: "fixed",
    width: "100%",
    minHeight: "100%",
};
var errorMsg = {
    paddingTop: "50px",
    textAlign: "center",
    fontFamily: 'Verdana',
    color: "yellow",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

export default class NoMatch extends Component {
  render() {
    return (
      <div style={errorPage}>
        <h1 style={errorMsg}>OOPS!</h1>
        <h4 style={errorMsg}>You probably want to <a href="/">start over</a></h4>
      </div>
    );
  }
}
