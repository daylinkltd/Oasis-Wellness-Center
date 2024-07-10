import React from "react"
import Navbar from "app/ui/website/navbar/navbar.js"
import Styles from "app/page.module.css"

const Homepage = () => {
    return (
      <div className={Styles.pagecontainer}>
        <Navbar/>
        <h1>oasiss wellness center</h1>
        </div>
    )
  }
  
  export default Homepage