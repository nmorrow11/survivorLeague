import React from 'react';

class CreateLeague extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			teamName: '',
		};
	}
	render() {
		return (
			<div>
				<input type="text" placeholder="Team Name"/>
				<button>Create Team</button>
			</div>
		);
	}
}

export default CreateLeague;