import { useState } from 'react';
import './App.css'
import StarRating from './star-rating.jsx'

export default function App() {
const [productRating, setProductRating] = useState(0);
  
  return (
    <main>
      Current Product Rating: {productRating}
      <StarRating maxRating={10}
        onChange={setProductRating}/>
    </main>
  )
}
// Verify the requirements 
// Are the number of stars fixed or flexible?
// Is there a hover state? If so, what should it do?
// Hover state will take over selected state
// Can you reset the star rating?
