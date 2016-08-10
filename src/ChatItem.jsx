import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var endStyle = {
  fontWeight: "bold",
  display: "inline-block",
  padding: "10px",
  width: "75%",
  margin: "0 auto",
  marginBottom: "10px",
  marginLeft: "100px",
  border: "3px solid #73AD21",
  borderRadius: "15px",
  // textAlign: "justify",
  fontFamily: "Verdana",
  fontSize: "14px",
  backgroundColor: "white",
}

var clearStyle = {
  padding: "10px",
  display: "inline-block",
  float: "right",
  marginRight: "30px",
  marginTop: "5px",
  height: "30px",
}

export default class ChatItem extends Component {

  render (){
    return (
      <div>
      <h4 style={endStyle}>{this.props.nickname}'s comment about {this.props.title} -- {this.props.message}</h4>
      </div>
    );
  }
}
