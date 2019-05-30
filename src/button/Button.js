import React from 'react'

const Button = ({ type = 'button', url = '', children }) => {

	const isAnchorElement = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

	const renderButton = () =>
		<button type={type} className="btn">{children}</button>

	const renderAnchor = () =>
		<a href={url} className="btn">{children}</a>

	return (
		isAnchorElement ? renderAnchor() : renderButton()
	)
}

export default Button