import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/index.css";
import apiKey from "./config";

//App components
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

class App extends Component {
	
	state = {
		photos: [],
		navMenues: ["Japan", "UK", "US", "Russia"],
		loading: true,
		err404: true
	};
	//fetch img when the page loaded first time
	componentDidMount() {
		let chk = document.querySelector('li.not-found.error');
		//console.log('didmount running');
		if(!chk){
			this.handleSearch("Japan");
		}else{
			this.setState({
				err404:false
			});
		}
		
	}

	//fetch api
	handleSearch = (query) => {
		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
		)
			.then(res => res.json())
			.then(resData => {
				console.log(query);
				// console.log(resData.photos.photo);
				this.setState({ 
					photos: resData.photos.photo,
					loading: false,
					 });
			})
			.catch(err => {
				console.log("error fetching and parsing data", err);
			});
	};
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header />
					<SearchForm handleSearch={this.handleSearch} />
					<Nav navMenues={this.state.navMenues} handleSearch={this.handleSearch} />
					
					<Switch>
						<Route exact path="/" />
						{
							this.state.navMenues.map( (val, index) => {
								return <Route path={`/${val}`} key={index} />
							})
						}
						<Route render={()=><NotFound title="404 Error" text="Please go back"/>} />
					</Switch>	
					{
						this.state.loading && this.state.err404
							? <Loading />
							: <PhotoContainer photos={this.state.photos} />
					}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
