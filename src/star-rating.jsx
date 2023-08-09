import { useState, useCallback, useEffect } from 'react';
import './star-rating.css';
import tachyons from 'tachyons';


const StarRating = ({maxRating = 5, onChange = () => {}}) => {
//Set State
  const [currentRating, setCurrentRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  // Re-renders when currentRating is updated
  const setCurrentRatingClickHandler = useCallback((ratingValue) => { 
    currentRating === ratingValue
    ? setCurrentRating(0)
    : setCurrentRating(ratingValue)
    }, [currentRating])

  useEffect(() => {
    onChange(currentRating)
  }, [currentRating, onChange])
  
  return (
    <div className='star-rating-container'>
      {
        //Mapping over stars
        [...Array(maxRating)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <div 
              key={i}
              className={`star ${ratingValue <= (hoveredRating ||
        currentRating) ? 'active' : ''}`}
              // Select number of stars
              onClick={() => setCurrentRatingClickHandler(ratingValue)}
              // Hover over stars
              onMouseEnter={() => setHoveredRating(ratingValue)}
              // Stop hovering
              onMouseLeave={() => setHoveredRating(0)}
              >
              {/* Star Code */}
              <article class="mw5 hidden ba mv4 b--blue br4-m">
              <div class="pa3">
                <p class="f3 f3-ns measure mv0">
                  &#9733;
                </p>
              </div>
            </article>
            </div>
          )
        })
      }
    </div>
 )
}

export default StarRating;