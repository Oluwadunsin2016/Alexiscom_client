import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
if (localStorage.myToken) {
      return children
}else{
return <Navigate to='/'/>
}
}

export default ProtectedRoute