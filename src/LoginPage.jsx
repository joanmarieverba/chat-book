import React, {Component} from 'react';
import { browserHistory } from 'react-router';

    // browserHistory.push('/chat/nickname')

var logInPageStyle = {
  backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/cityscape7.jpg")',
  width: '100%',
  minHeight: '100%',
}

var topBanner = {
   width : "100%",
   position: "fixed",
   textAlign: "center",
   fontFamily: 'Bangers',
   fontSize: "36px",
   top: "0",
   left : "0",
   border: "3px solid #73AD21",
   backgroundColor: "red",
   WebkitTransition: 'all',
   msTransition: 'all'
 }

var instructions = {
  paddingTop: "75px",
  textAlign: "center",
  display: "inline-block",
  fontFamily: "Arial",
  fontSize: "12px",
  fontWeight: "bold",
  // backgroundColor: "white",

}

var inputBox = {
  paddingTop: "100px",
  textAlign: "center",
  display: "inline-block",
  fontFamily: "Arial",
  fontSize: "12px",
  fontWeight: "bold",
  // backgroundColor: "white",
  // border: "2px solid lightblue",
}

export default class LoginPage extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      nickname: "",
      enteredName:''
    }
  }
  handleSubmitButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("click", this.state.enteredName);
    browserHistory.push('/chat/' + this.state.enteredName);
  }
  handleSearchInputChange(e){
    //we have a value
    console.log("target ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredName: e.target.value});
  }
  render() {


    return (
      <div style={logInPageStyle} >
      <span style={topBanner}>Astronomy Observers Chat</span>
      <span style={instructions} > Enter your nickname to begin and click the Enter button: </span>
      <form onSubmit={this.handleSubmitButtonClick.bind(this)}>  //submit responds to return or click
        <label  style={inputBox}>
          <input type="text" placeholder="Enter nickname" onChange={this.handleSearchInputChange.bind(this)} />
          <input type="submit" value="Enter" />
        </label>
      </form>
      </div>
    );
  }
};
