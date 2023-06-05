import React from 'react'

function Number({number, status}) {
  return (
    <div className="number">
        <h3>{status && number}</h3>
    </div>
  )
}

export default Number