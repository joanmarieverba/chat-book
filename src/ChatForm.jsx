import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var commentsBox = {
    // backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/cityscape7.jpg")',
    width: "75%",
    minHeight: "20%",
    margin: "20px auto",
    WebkitTransition: 'all',
    msTransition: 'all',
 };

 var sendbutton = {
   marginRight: "130px",
   float: "right",
 }

 var titlebutton = {
   width: "275px",
   height: "30px",
   marginRight: "130px",
   float: "right",
 }

var display = {
  marginLeft: "170px",
  color: "purple",
  fontWeight: "bold",
  fontFamily: "Syncopate",
}

var titledisplay = {
  marginLeft: "444px",
  marginRight: "130px",
  float: "right",
  fontWeight: "bold",
  color: "purple",
  fontFamily: "Syncopate",
  textAlign: "right",
  display: "inline-block",
  width: "150px",

}

export default class ChatForm extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      message: "",
      title:''
    }
  }
  handleSendButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("title ", this.state.enteredTitle);
    console.log("message ", this.state.enteredMessage);
    this.props.onNewMsg.bind(this)(this.state.enteredTitle, this.state.enteredMessage);
  }
  handleMessageChange(e){
    //we have a value
    console.log("message ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredMessage: e.target.value});
  }
  handleTitleChange(e){
    //we have a value
    console.log("Title ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredTitle: e.target.value});
  }

  render (){
    return (
      <div>
        <div>
          <Form type="inline" onSubmit={this.handleSendButtonClick.bind(this)}>

                <Row>
                  <Col sm="1/2">
                    <h2 style={display}> Nickname: {this.props.nickname}</h2>
                  </Col>
                  <Col sm="1/2">
                    <h2 style={titledisplay}>Book title: </h2>
                    <FormInput  style={titlebutton} type="text" placeholder="Enter book title" name="Title" onChange={this.handleTitleChange.bind(this)} />
                  </Col>
                </Row>
                <Row>
                    <FormInput style={commentsBox} placeholder="What did you think of the book?" multiline onChange={this.handleMessageChange.bind(this)} />
                </Row>
                <Row>
                  <Col>
                    <Button size="sm" style={sendbutton} onClick={this.handleSendButtonClick.bind(this)}>Record comments</Button>
                  </Col>
                </Row>
              </Form>

          </div>
      </div>
    );
  }
}
