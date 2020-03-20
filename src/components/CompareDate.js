import React, { Component } from "react";

class Birthday extends Component {
  constructor(props) {
    super(props);

    this.verifyBirthday = this.verifyBirthday.bind(this);
  }

  /* Compares date with todays date to verify if birthday status
	 @param date string
	 @return msg string
  */	
  verifyBirthday(date) {
    let today = new Date();
    let bDate = new Date(date);
    let todayDate = today.getDate();
    let bDateDate = bDate.getDate();
    let todayMonth = today.getMonth();
    let bDateMonth = bDate.getMonth();
    let msg = "";
    if (todayMonth < bDateMonth) {
      msg = "has yet to occur";
    } else if (todayMonth > bDateMonth) {
      msg = "already happened";
    } else {
      if (todayDate < bDateDate) {
        msg = "has yet to occur";
      } else if (today > bDateDate) {
        msg = "already happened";
      } else {
        msg = "is today(!)";
      }
    }

    return msg;
  }

  render() {
    let birthdayStatus = this.verifyBirthday(this.props.date);

    return <span> {birthdayStatus} </span>;
  }
}

export default Birthday;
