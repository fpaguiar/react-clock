import * as React from 'react';
import { connect } from 'react-redux';

class ClockOptions extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>clock-options</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {})(ClockOptions);