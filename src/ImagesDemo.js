import React from 'react'
import Blue from './images/Blue.jpg'

function ImagesDemo() {
  return (
    <>
        <div>ImagesDemo</div>
        <img src={Blue} height='200' width='200' />

        <img src={require('./images/Orange.jpg')} height='200' width='200'  />

        <img src='images/Yellow.jpg' height='200' width='200'/>
    </>
  )
}

export default ImagesDemo
