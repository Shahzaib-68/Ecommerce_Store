import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
interface dashboardLayoutprops  {
 children : React.ReactNode
}
 const dashboardLayout : React.FC <dashboardLayoutprops> = (props) =>{
  return (
     <>
        <div>
          <Header/>
          {props.children}
          <Footer/>
        </div>
     </>
  )
}

export default dashboardLayout