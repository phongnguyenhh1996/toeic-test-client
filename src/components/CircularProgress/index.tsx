import React from 'react'
import { CircularProgressStyle } from './style'

export interface CircularProgressProps {
  percent: number
  text?: HTMLElement
}

const CircularProgress: React.FC<CircularProgressProps> = ({percent, children}) => {
  return (
    <CircularProgressStyle percent={percent}>
			<svg>
				<circle cx="60" cy="60" r="60"></circle>
				<circle cx="60" cy="60" r="60"></circle>
			</svg>
			<div className="number">
				{children}
			</div>
    </CircularProgressStyle>
  )
}

export default CircularProgress
