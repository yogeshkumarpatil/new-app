import React, { useContext } from 'react'
import { NameContext } from './App'
import { ChannelYogesh } from './App'


function CompC() {
    const myName = useContext(NameContext)
    const myYogesh = useContext(ChannelYogesh)

  return (
    <div>
      <h1>I am Component C</h1>
      <h1>{myName}</h1>
      <h1>{myYogesh}</h1>
    </div>
  )
}

export default CompC
