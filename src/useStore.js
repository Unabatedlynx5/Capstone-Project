import React from 'react'
import { useStore } from 'react-redux'

function Store() {
  const store = useStore();

    return (
        <div>
        {/* <div>{store}</div> */}
        </div>
  )
}

export default Store