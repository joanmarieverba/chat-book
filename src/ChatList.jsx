import React, {Component} from 'react';
import ChatItem from './ChatItem.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var chatStyle = {
    // display: "inline-block",
    // marginTop: "50px",
    // marginLeft: '50px',
    // fontFamily: "Righteous",
    // fontSize: "14px",
    // padding: '15px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };


export default class ChatList extends Component {


  render() {
    console.log("chatlist ", this.props.messageArray);
    return (
      <div style={chatStyle}>
      {this.props.messageArray.map((item) => {
        return (
          <ChatItem nickname={item.nickname} gmt={item.gmt} message={item.message}/>
        )})}
      </div>
    )
  }
}
