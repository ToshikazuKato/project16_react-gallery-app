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
		loading: true
	};

	componentDidMount() {
		this.handleSearch();
	}

	handleSearch = (query = "Japan") => {
		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
		)
			.then(res => res.json())
			.then(resData => {
				console.log(query);
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
					<Nav navMenues={this.state.navMenues} />
					{
						this.state.loading
						? <Loading />
						:<PhotoContainer photos={this.state.photos} />								
					}
					<Switch>
						<Route exact path="/" />
						<Route path={`/Japan`} />
						<Route path={`/UK`} />
						<Route path={`/US`} />
						<Route path={`/Russia`} />
						<Route component={NotFound} />
					</Switch>
							
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
