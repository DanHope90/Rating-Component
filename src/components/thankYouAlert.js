import React from "react";
import "../styles/thankYouAlert.css"

function ThankYouAlert ({rating, setIsSubmitted}) {

    return (
        <>
        <div className="thankyou">
          <div className="rating">
          <p>You selected {rating} out of 5</p>
          </div>
            <h2>Thank You!</h2>
            <p className="rating-message">We appreciate you taking the time to give a rating.
              If you ever need more support, don't hesitate to get in touch!
            </p>
          <button className="rate-again"
            onClick={() => setIsSubmitted(false)}>Rate Again? </button>
        </div>
        </>
    )
}

export default ThankYouAlert;