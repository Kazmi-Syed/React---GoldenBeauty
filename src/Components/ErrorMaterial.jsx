import React from 'react'

function ErrorMaterial() {

    const styles = {
        p : {
            margin : "32px 0px",
        }
    }
  return (
  <>
      <div class="error-message">

        <p style={styles.p}> 404 Error | Sorry, the page you are looking for cannot be found </p>
        <br/>
        <p style={styles.p}>Please navigate back to the main website using the navigation menu</p>
</div>

  </>
  )
}

export default ErrorMaterial