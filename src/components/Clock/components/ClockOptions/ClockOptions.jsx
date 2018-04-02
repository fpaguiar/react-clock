import * as React from 'react';
import { connect } from 'react-redux';
import './ClockOptions.css';

class ClockOptions extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul className="clock-options">
					<li className="clock-option">
						<label htmlFor="cbDate">Show Date</label>
						<input type="checkbox" name="cbDate" id="cbDate"/>
					</li>
					<li className="clock-option">
						<label htmlFor="cbSeconds">Show Seconds</label>
						<input type="checkbox" name="cbSeconds" id="cbSeconds"/>
					</li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {})(ClockOptions);