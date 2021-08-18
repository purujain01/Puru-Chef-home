import React, { useState, useEffect } from "react";
// import Buttons from "../components/Buttons";
import API from '../utils/API.js'

export default function Home2(props) {
  const [count,setCount] = useState(2)
  // console.log(props.user)
  useEffect(() => {
    API.getuserCount().then((all) => {
      setCount(all.data.count)
    }).catch((e) => {
      console.log(e)
    })
  })
  return (
    <div className="homepage">
      <div className='row justify-content-around'>
      <div className='col-lg-2 col-md-3 p-4 border text-center'>
        <div className='mb-3'>TOTAL CUSTOMERS</div>
        <h2 className>{count}</h2>
      </div>
      <div className='col-lg-2 col-md-3 p-4 border text-center'>
      <div className='mb-3'>TOTAL PRODUCT SOLD</div>
        <h2 className>123</h2>
      </div>
      <div className='col-lg-2 col-md-3 p-4 border text-center'>
      <div className='mb-3'>TOTAL NEWSLETTER SUBSCRIPTION</div>
        <h2 className>123</h2>
      </div>
    </div>
    <div className="mt-5 ms-3">
      <h3>Sales Performance</h3>
    </div>
    </div>
  )
}
