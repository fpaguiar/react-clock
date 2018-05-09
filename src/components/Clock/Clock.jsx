import * as React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { updateTime } from './../../actions/actions';
import { connect } from 'react-redux';
import ClockOptions from './components/ClockOptions/ClockOptions';
import './Clock.css';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.intervalID = 0;
	}

	_getTime() {
		return moment().format('hh:mm:ss');
	}

	componentDidMount() {
		this.intervalID = setInterval(() => this.props.updateTime(this._getTime()), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<div className="clock">
				<ClockOptions />
				<div className="clock__content">{this.props.time}</div>
			</div>
		);
	}
}

Clock.propTypes = {
	updateTime: PropTypes.func,
	time: PropTypes.string
};

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, { updateTime })(Clock);
