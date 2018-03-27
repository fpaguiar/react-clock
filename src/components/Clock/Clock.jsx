import * as React from 'react';
import moment from 'moment';
import { updateTime } from './../../actions/actions';
import { connect } from 'react-redux';

class Clock extends React.Component {
	constructor(props) {
		super(props);
	}

	_getTime() {
		return moment().format('h:mm:ss');
	}

	componentDidMount() {
		setInterval(() => this.props.updateTime(this._getTime()), 1000);
	}

	render() {
		return (
			<div className="clock">
				<div className="content">{this.props.time}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, { updateTime })(Clock);