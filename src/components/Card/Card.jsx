import React from 'react'
import css from './card.module.css'

const Card = ({ title, headerComponent, children }) => {

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
