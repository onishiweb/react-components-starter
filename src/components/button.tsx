import * as React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

type ButtonProps = {
	text?: string
}

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

const Button = ({ text }: ButtonProps) => {
	return <ButtonEl>{text}</ButtonEl>
}

export default Button
