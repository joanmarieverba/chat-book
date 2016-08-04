import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var endStyle = {
  marginLeft: "130px",
  fontFamily: "Verdana",
  color: "red",
  fontWeight: "bold",
}

export default class ChatItem extends Component {

  render (){
    return (
      <div>
      <h2 style={endStyle}>{this.props.nickname} {this.props.gmt} -- {this.props.message}</h2>
      </div>
    );
  }
}
