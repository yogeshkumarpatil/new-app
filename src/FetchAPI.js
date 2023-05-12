import React from 'react'

function FetchAPI() {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response);
    })
  return (
    <div>Fetch API</div>
  )
}

export default FetchAPI
