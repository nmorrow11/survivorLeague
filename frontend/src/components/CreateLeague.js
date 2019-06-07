import React from 'react';
import axios from 'axios';
import auth0Client from '../Auth';
import {Redirect} from 'react-router-dom';




class CreateLeague extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			leagueName: '',
			duplicateLeague: false,
			created: false,
		};
		this.submitLeague = this.submitLeague.bind(this);
		this.nameChange = this.nameChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.clearData = this.clearData.bind(this);
	}

	clearData(e){
    	this.setState({leagueName: ''})
    	e.target.value = '';
  	}
	submitLeague(e) {
		if(this.state.duplicateLeague) {
			this.setState({duplicateLeague:false})
		}
		this.clearData(e);
		let context = this;
		axios.post('http://localhost:8081/createLeague', {league: this.state.leagueName, creator: auth0Client.getProfile().name})
			.then(function(response){
				if(response.data.message === 'Duplicate') {
					context.setState({duplicateLeague: true})
				} else if(response.data.message === 'League Created') {
					context.setState({created: true})
				}
			});
	}

	nameChange(e) {
		this.setState({leagueName: e.target.value})
	}

	handleKeyDown(e) {
		if(e.key === 'Enter') {
			this.submitLeague(e);
		}
	}

	render() {
		let duplicate;
		let created;
		if(this.state.duplicateLeague) {
			duplicate = <div>Sorry this league name is already in use. Please try another! </div>
		} else if(this.state.created) {
			created = <Redirect to='/home'/>
		}
		return (
			<div>
				<input type="text" placeholder="League Name" onKeyDown={this.handleKeyDown} onChange={this.nameChange}/>
				<button onClick={this.submitLeague}>Create League</button>
				{duplicate}
				{created}
			</div>
		);
	}
}

export default CreateLeague;