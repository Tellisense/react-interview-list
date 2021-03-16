import React from 'react'
import css from './card.module.css'

const Card = (props) => {
  const { title, headerComponent, children } = props
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div>{title}</div>
        <div>{headerComponent}</div>
      </div>
      <div className={css.cardContent}>
        {children}
      </div>

    </div>
  )
}

export default Card
