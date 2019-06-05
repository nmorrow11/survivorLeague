import React from 'react';
import axios from 'axios';

class CreateLeague extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			teamName: '',
		};
		this.submitTeam = this.submitTeam.bind(this);
	}

	submitTeam() {
		axios.post('http://localhost:8081/createTeam', {team:'DreamTeam'})
			.then(function(response){
				console.log(response)
			});
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Team Name"/>
				<button onClick={this.submitTeam}>Create Team</button>
			</div>
		);
	}
}

export default CreateLeague;