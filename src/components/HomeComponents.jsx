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
     <div className='container p-2'> 
      <h3>Standar Data Statistik Nasional</h3> 
      <h6>Berdasarkan Keputusan Kepala Badan Pusat Statistik Nomor 850 Tahun 2023</h6>
     </div>
     
     </>
  )
}

export default HomeComponents