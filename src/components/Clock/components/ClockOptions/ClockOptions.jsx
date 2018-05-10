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
			<div className="clock-options">
				<div className="label-wrapper">
					<div className="switch">
						<input type="checkbox" name="cbDate" id="cbDate" onChange={this._handleDateCheck} />
						<label htmlFor="cbDate">
							<div></div>
						</label>
					</div>
					<div>Show Date</div>
				</div>
				<div className="label-wrapper">
					<div className="switch">
						<input type="checkbox" name="cbSeconds" id="cbSeconds" onChange={this._handleSecondsCheck} />
						<label htmlFor="cbSeconds">
							<div></div>
						</label>
					</div>
					<div>Show Seconds</div>
				</div>
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