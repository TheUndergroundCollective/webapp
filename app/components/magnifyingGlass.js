import React, { Component } from 'react';

class MagnifyingGlass extends Component {
	render () {
		return(
			<div className = {this.props.classProp}>
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
    				<path fill="#2E2E2E" fill-rule="nonzero" stroke="#2E2E2E" stroke-width=".3" d="M9.971 1c5.088 0 9.23 4.143 9.23 9.23a9.16 9.16 0 0 1-2.076 5.828l7.356 7.355-1.327 1.327-7.356-7.355a9.16 9.16 0 0 1-5.827 2.077c-5.088 0-9.23-4.143-9.23-9.231S4.882 1 9.97 1zm0 1.846a7.371 7.371 0 0 0-7.384 7.385 7.371 7.371 0 0 0 7.384 7.384 7.371 7.371 0 0 0 7.385-7.384A7.371 7.371 0 0 0 9.97 2.846z"/>
				</svg>
			</div>
		);
	}
}

export default MagnifyingGlass;