import React from 'react'
import classNames from 'classnames'

const Button = (props) => {
  const {
    type = 'button',
    url = '',
    className = '',
    theme = '',
    isFullWidth = false,
    children
  } = props

  const buttonClass = classNames('btn', className, {
    'btn--primary': theme === 'primary',
    'btn--secondary': theme === 'secondary',
    'btn--full-width': isFullWidth
  })

  const isAnchorElement = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

  const renderButton = () =>
    <button {...{ type }} className={buttonClass}>{children}</button>

  const renderAnchor = () =>
    <a href={url} className={buttonClass}>{children}</a>

  return (
    isAnchorElement ? renderAnchor() : renderButton()
  )
}

export default Button
