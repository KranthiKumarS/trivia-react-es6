import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

import Select from '../Select';

//const Select = require('../../../src/Select');
const STATES = require('../data/states');

export default class StatesField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: 'IND',
			disabled: false,
			searchable: props.searchable,
			selectValue: 'TR',
			clearable: true,
		};
		this.switchCountry = this.switchCountry.bind(this);
		this.updateValue = this.updateValue.bind(this);
		this.focusStateSelect = this.focusStateSelect.bind(this);
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	switchCountry (e) {
		var newCountry = e.target.value;
		console.log('Country changed to ' + newCountry);
		this.setState({
			country: newCountry,
			selectValue: null,
		});
	}
	updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue,
		});
	}
	focusStateSelect () {
		this.refs.stateSelect.focus();
	}
	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	}
	render () {
		var options = STATES[this.state.country];
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.title}</h3>
				<Select ref="stateSelect" autoFocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

				<div style={{ marginTop: 14 }}>
					<button type="button" onClick={this.focusStateSelect}>Focus Select</button>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Searchable</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Disabled</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Clearable</span>
					</label>
				</div>
				<div className="checkbox-list">
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'AU'} value="AU" onChange={this.switchCountry}/>
						<span className="checkbox-label">Australia</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry}/>
						<span className="checkbox-label">United States</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'IND'} value="IND" onChange={this.switchCountry}/>
						<span className="checkbox-label">India</span>
					</label>
				</div>
			</div>
		);
	}
}
StatesField.defaultProps = {
    label: 'State of TSS:',
	searchable: false,
	title: 'Country'
};
StatesField.propTypes = {
    label: PropTypes.string,
	searchable: PropTypes.bool,
	title: PropTypes.string
};

StatesField.PropTypes = {
	label: PropTypes.string,
	searchable: PropTypes.bool,
};
StatesField.defaultProps = {
	label: 'States:',
	searchable: false,
};


// var StatesField = createClass({
// 	displayName: 'StatesField',
// 	propTypes: {
// 		label: PropTypes.string,
// 		searchable: PropTypes.bool,
// 	},
// 	getDefaultProps () {
// 		return {
// 			label: 'States: ',
// 			searchable: true,
// 		};
// 	},
// 	getInitialState () {
// 		return {
// 			country: 'IND',
// 			disabled: false,
// 			searchable: this.props.searchable,
// 			selectValue: 'Ts',
// 			clearable: true,
// 		};
// 	},
// 	switchCountry (e) {
// 		var newCountry = e.target.value;
// 		console.log('Country changed to ' + newCountry);
// 		this.setState({
// 			country: newCountry,
// 			selectValue: null,
// 		});
// 	},
// 	updateValue (newValue) {
// 		console.log('State changed to ' + newValue);
// 		this.setState({
// 			selectValue: newValue,
// 		});
// 	},
// 	focusStateSelect () {
// 		this.refs.stateSelect.focus();
// 	},
// 	toggleCheckbox (e) {
// 		let newState = {};
// 		newState[e.target.name] = e.target.checked;
// 		this.setState(newState);
// 	},
// 	render () {
// 		var options = STATES[this.state.country];
// 		return (
// 			<div className="section">
// 				<h3 className="section-heading">{this.props.label}</h3>
// 				<Select ref="stateSelect" autoFocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

// 				<div style={{ marginTop: 14 }}>
// 					<button type="button" onClick={this.focusStateSelect}>Focus Select</button>
// 					<label className="checkbox" style={{ marginLeft: 10 }}>
// 						<input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
// 						<span className="checkbox-label">Searchable</span>
// 					</label>
// 					<label className="checkbox" style={{ marginLeft: 10 }}>
// 						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
// 						<span className="checkbox-label">Disabled</span>
// 					</label>
// 					<label className="checkbox" style={{ marginLeft: 10 }}>
// 						<input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
// 						<span className="checkbox-label">Clearable</span>
// 					</label>
// 				</div>
// 				<div className="checkbox-list">
// 					<label className="checkbox">
// 						<input type="radio" className="checkbox-control" checked={this.state.country === 'AU'} value="AU" onChange={this.switchCountry}/>
// 						<span className="checkbox-label">Australia</span>
// 					</label>
// 					<label className="checkbox">
// 						<input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry}/>
// 						<span className="checkbox-label">United States</span>
// 					</label>
// 					<label className="checkbox">
// 						<input type="radio" className="checkbox-control" checked={this.state.country === 'IND'} value="IND" onChange={this.switchCountry}/>
// 						<span className="checkbox-label">India</span>
// 					</label>
// 				</div>
// 			</div>
// 		);
// 	}
// });


// module.exports = StatesField;
