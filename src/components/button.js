import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colors from '../styles/colors'

const ButtonEl = styled.button`
	padding: 5px 10px;
	font-size: 20px;
	cursor: pointer;
	border: 0;
	background-color: ${colors.green};

	&:hover {
		background-color: ${colors.red};
		color: ${colors.white};
	}

	&:active {
		position: relative;
		top: 1px;
	}
`

const Button = props => {
	return <ButtonEl>{props.text}</ButtonEl>
}

Button.propTypes = {
	text: PropTypes.string
}

Button.defaultProps = {
	text: 'Press me!'
}

export default Button
