import React, { Component } from "react";
import BirthdayStatus from "./CompareDate";
import Moment from 'react-moment';

class FetchData extends Component {
  
  render() {
    return (
      
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Birthday status</th>
              <th className="country-item">Country</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(item => {
              return (
                <tr key={item._id}>
                  <td>{item.name.first}</td>
                  <td>{item.name.last}</td>
				  <td><Moment
                    date={item.dateOfBirth}
                    parse="dddd, MMMM D, YYYY h:mm a"
                    format="YYYY-MM-DD"
					/>
				  </td>
                  <td>
                    <BirthdayStatus date={item.dateOfBirth} />
                  </td>
                  <td className="country-item">{item.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FetchData;
