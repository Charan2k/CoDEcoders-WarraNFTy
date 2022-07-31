import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Success() {
  const uid = useParams();
  console.log(uid);
  return (
    <div>Successfully Bought</div>
  )
}

export default Success