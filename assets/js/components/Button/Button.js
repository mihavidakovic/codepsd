import React from 'react';

export default class Button extends React.Component {
	render() {

		return(
			<div>
				<div className={"button " + this.props.type }>
					{this.props.text}
				</div>
			</div>
		);
	}
}