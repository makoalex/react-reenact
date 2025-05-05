import React from 'react'

export default function Button({children, onSelect , ...props }) {
  return (
   <>
    <button onClick= {onSelect} {...props}>{children}</button>

   </>
  )
}
