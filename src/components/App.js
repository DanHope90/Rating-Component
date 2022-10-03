import React, {useState} from 'react'
import '../styles/app.css';
import ThankYouAlert from './thankYouAlert';

function App() {

  const [rating, setRating] = useState("1")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    console.log(event.target.value)
    setRating(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
    {!isSubmitted && (

    
      <div className="App">

      <h1 className='greet'>How did we do?</h1>
      <p className='message'>Please let us know how we did with your suport request.
        All feedback is apprieciated to help us imporive our offering!
      </p>

      <form onSubmit={handleSubmit}>
      <div className='button-group'>
        <div className='label'>
      <input
        type="radio"
        name="rating"
        value='1'
        checked={rating === '1'}
        className='rating-btn'
        onChange={handleChange}
      />
      1
      </div>
      <div className='label'>
      <input
        type="radio"
        name="rating"
        value='2'
        checked={rating === '2'}
        className='rating-btn'
        onChange={handleChange}
     />
     2
      </div>
      <div className='label'>
      <input
        type="radio"
        name="rating"
        value='3'
        checked={rating === '3'}
        className='rating-btn'
        onChange={handleChange}
      />
      3
      </div>
      <div className='label'>
      <input
        type="radio"
        name="rating"
        value='4'
        checked={rating === '4'}
        className='rating-btn'
        onChange={handleChange}
     />
     4
     </div>
     <div className='label'>
      <input
        type="radio"
        name="rating"
        value='5'
        checked={rating === '5'}
        className='rating-btn'
        onChange={handleChange}
      />
      5
      </div>
      </div>
      <p></p>
      <div className="rating-submit">
        <button 
          className="submit-btn" 
          type="submit"
          >
            SUBMIT
            </button>
            
    </div>
    </form>
    </div>
)}
  {isSubmitted && (
    <ThankYouAlert 
      rating={rating} 
      setIsSubmitted={setIsSubmitted}/>
  )}
    </>
  );
}

export default App;
