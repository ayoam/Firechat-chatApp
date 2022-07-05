import React from 'react'

const PageNotFound = () => {
  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center ">
      <span className="block text-6xl font-semibold mb-3">404</span>
      <p className="font-semibold mb-4 text-2xl">Ooops,page not found</p>
      <p>Sorry,but the requested page is not found.</p>
    </div>
  )
}

export default PageNotFound