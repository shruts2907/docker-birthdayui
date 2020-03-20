import React, { Component } from "react";
import Fetch from "./FetchData";
import Sort from "./Sort";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortOrder: "name",
      sortObjOrder: "first",
      sortDir: "asc",
	  queryText: ''
    };


    this.searchApts = this.searchApts.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.filtereList = this.filteredList.bind(this);
    this.url = "https://next.json-generator.com/api/json/get/E1LpMX5Su";
  }


	/*
		Search the table with query passed
		@param query string
	*/
	searchApts(query) {
		this.setState({ queryText: query });
	}
	
	/*
		Captures Sort order event and updates state
		@param order string
		@param dir string
		@param name string
	*/
	changeOrder(order, dir, name) {
		this.setState({
		  sortOrder: order,
		  sortObjOrder: name,
		  sortDir: dir
		});
	}
	/*
		Fitler the json data with response to sort order change
	*/  
	filteredList() {
		let order;
		let filtereList = this.state.data;

		if (this.state.sortDir === "asc") {
		  order = 1;
		} else {
		  order = -1;
		}

		filtereList = filtereList.sort((a, b) => {
		  if (
			typeof a[this.state.sortOrder] === "object" ||
			typeof b[this.state.sortOrder] === "object"
		  ) {
			if (
			  a[this.state.sortOrder][this.state.sortObjOrder].toLowerCase() <
			  b[this.state.sortOrder][this.state.sortObjOrder].toLowerCase()
			) {
			  return -1 * order;
			} else {
			  return 1 * order;
			}
		  } else {
			if (
			  a[this.state.sortOrder].toLowerCase() <
			  b[this.state.sortOrder].toLowerCase()
			) {
			  return -1 * order;
			} else {
			  return 1 * order;
			}
		  }
		})
		.filter(eachItem => {
			return (
			  eachItem['name']['first']
				.toLowerCase()
				.includes(this.state.queryText.toLowerCase()) ||
			  eachItem['name']['last']
				.toLowerCase()
				.includes(this.state.queryText.toLowerCase()) ||
			  eachItem['country']
				.toLowerCase()
				.includes(this.state.queryText.toLowerCase())
			);
		  });
		  
		return filtereList;
	}
  
	componentDidMount() {
		fetch(this.url)
			.then(response => response.json())
			.then(result => {
				const list = result.map(item => {
					return item;
				});
			
			this.setState({
				data: list
			});
		}, (error) => {
				if (error) {
				  console.log("Error while fetching data: "+error);
				}
			}
		);
	}
	render() {

	let filtereList = this.filteredList();

		return (
		  <div className="App wrapper">
			<h3 className="greetings">Hello, Check Who's Birthday is Coming Up!</h3>
			<Sort
			  orderBy={this.state.sortOrder}
			  orderDir={this.state.sortDir}
			  objOrder={this.state.sortObjOrder}
			  changeOrder={this.changeOrder}
			  searchApts={this.searchApts}
			/>
			<Fetch data={filtereList} />
		  </div>
		);
	}
}
export default App;
