import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-full px-4 mx-auto'>
      {children}
    </div>
  )
}

export default Container