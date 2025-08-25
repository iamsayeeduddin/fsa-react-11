import React from 'react'

const Hoc = (props) => {
    const { children } = props;
  return (
    <div className='text-8xl text-fuchsia-950'>
      {children}
    </div>
  )
}

export default Hoc
