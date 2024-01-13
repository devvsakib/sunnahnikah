import React from 'react'

const CommonLayout = ({ children }) => {
    return (
        <main className='px-2 sm:px-10 max-w-[1240px] mx-auto'>
            {children}
        </main>
    )
}

export default CommonLayout