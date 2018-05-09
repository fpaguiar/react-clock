import * as React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { updateTime, updateDate } from './../../actions/actions';
import { connect } from 'react-redux';
import ClockOptions from './components/ClockOptions/ClockOptions';
import './Clock.css';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.intervalID = 0;
		this.time = this._getTime();
	}

	_getTime() {
		return moment();
	}

	_getDate() {
		return moment().format('DD-MMM-YYYY');
	}

	componentDidMount() {
		this.intervalID = setInterval(() => {
			this.props.updateTime(this._getTime());
			this.props.shouldShowDate && this.props.updateDate(this._getDate());
		}, 1000);
	}

	componentDidUpdate() {
		this.time = this.props.time;
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<div className="clock">
				<ClockOptions />
				<div className="clock__content">
					<div>{this.time.format(this.props.shouldShowSeconds ? 'hh:mm:ss' : 'hh:mm')}</div>
					<div>{this.props.shouldShowDate && this.props.date}</div>
				</div>
			</div>
		);
	}
}

Clock.propTypes = {
	updateTime: PropTypes.func,
	updateDate: PropTypes.func,
	time: PropTypes.string,
	date: PropTypes.string,
	shouldShowSeconds: PropTypes.bool,
	shouldShowDate: PropTypes.bool
};

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, { updateTime, updateDate })(Clock);
