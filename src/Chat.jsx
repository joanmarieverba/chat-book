import React, {Component} from 'react';
import ChatForm from './ChatForm.jsx';
import ChatList from './ChatList.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { browserHistory } from 'react-router';


var chatpageStyle = {
    backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/folder-1049826_1280.jpg")',
    // backgroundColor: "green",
    width: "100%",
    minHeight: "100%",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

 var boxheader = {
   paddingLeft: "200px",
   paddingRight: "150px",
   paddingTop: "20px",
   paddingBottom: "40px",
   display: "inline-block",
   margin: "0 auto",
   fontFamily: "Diplomata",
   fontSize: "48px",
  //  webkitTextStroke: "1px black",
   color: "purple",
 }

export default class Chat extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      messageArray: [],
    }
  }

  handleNewMsg(title, message) {   //method
    console.log ("chattitle ", title, "chatmsg ", message, this);
    var newMessageArray = Array.prototype.slice.call(this.state.messageArray);
    newMessageArray.push({title: title, message: message, nickname: this.props.params.nickname});
    this.setState({messageArray: newMessageArray});
  }

 //react calls render over and over again by the brower when it refreshes
    render() {
      // console.log("nickname:", {this.props.nickname});
      return (
        <div style={chatpageStyle}>
        <h1 style={boxheader}>Welcome to the Book Chat</h1>
        <ChatList nickname={this.props.params.nickname} messageArray={this.state.messageArray} />
        <ChatForm nickname={this.props.params.nickname} onNewMsg={this.handleNewMsg.bind(this)} />
        </div>
      )}
    };
