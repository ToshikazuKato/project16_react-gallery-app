import React, {Component} from 'react';
//import Reac, { Component } from 'react';


class SearchForm extends Component {

    state = {
        inputText: ''
    }
	//store input value
    handleValue = e => {
        e.preventDefault();
        // console.log(e.target.value);
        this.setState({
            inputText: e.target.value,
        });
    }
	//run handleSearch by input value 
    handleSubmit = e => {
        e.preventDefault();
		//check empty input
		if(this.query.value){
			this.props.handleSearch(this.query.value);
		}else{
			let val = document.querySelector('a.active');
			if(val){
				// empty input && navlink is active => handleSearch by path
				val = val.getAttribute('href').replace('/', '');
				this.props.handleSearch(val);
			}
		}
        // e.target.value = "";
    }

    render() {
        return (
            <form className="search-form" 
                  onSubmit={this.handleSubmit}>
                <input type="search" 
                       name="search" 
                       placeholder="Search" 
                       onChange={this.handleValue}
                       ref={ input => this.query = input } required />
                <button type="submit" className="search-button" onClick={this.handleSubmit}>
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </button>
            </form>
        );
    }
}

export default SearchForm;