import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showSeconds, showDate } from './../../../../actions/actions';
import './ClockOptions.css';

class ClockOptions extends React.Component {
	constructor(props) {
		super(props);

		this._handleSecondsCheck = this._handleSecondsCheck.bind(this);
		this._handleDateCheck = this._handleDateCheck.bind(this);
	}

	_handleSecondsCheck({target}) {
		return this.props.showSeconds(target.checked);
	}

	_handleDateCheck({target}) {
		return this.props.showDate(target.checked);
	}

	render() {
		return (
			<div>
				<ul className="clock-options">
					<li className="clock-option">
						<label htmlFor="cbDate">Show Date</label>
						<input type="checkbox" name="cbDate" id="cbDate" onChange={this._handleDateCheck}/>
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
	showSeconds: PropTypes.func,
	showDate: PropTypes.func
};

function mapStateToProps({showSeconds, showDate}) {
	return {showSeconds, showDate};
}

export default connect(mapStateToProps, { showSeconds, showDate })(ClockOptions);