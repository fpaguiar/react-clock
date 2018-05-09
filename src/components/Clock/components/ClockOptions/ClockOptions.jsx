import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showSeconds } from './../../../../actions/actions';
import './ClockOptions.css';

class ClockOptions extends React.Component {
	constructor(props) {
		super(props);

		this._handleSecondsCheck = this._handleSecondsCheck.bind(this);
	}

	_handleSecondsCheck({target}) {
		return this.props.showSeconds(target.checked);
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
						<input type="checkbox" name="cbSeconds" id="cbSeconds" onChange={this._handleSecondsCheck}/>
					</li>
				</ul>
			</div>
		);
	}
}

ClockOptions.propTypes = {
	showSeconds: PropTypes.func
};

function mapStateToProps({showSeconds}) {
	return {showSeconds};
}

export default connect(mapStateToProps, { showSeconds })(ClockOptions);