import React from 'react'

function HomeComponents() {
  return (
     <>
     <div className='container p-2 mt-5  '>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>
     </div>
     
     </>
  )
}

export default HomeComponents