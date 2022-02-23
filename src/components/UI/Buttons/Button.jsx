import React from 'react'

export const Button = ({textButton , styleButton}) => {
    return (
        <button className={styleButton} >{textButton}</button>
    )
}