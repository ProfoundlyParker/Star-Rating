import { useState } from 'react';
import './App.css';
import StarRating from './star-rating.jsx';
import tachyons from 'tachyons';


export default function App() {
const [productRating, setProductRating] = useState(0);
  
  return (
    <main>
      <h1 className="tc bg-blue white mv0 pv2 ph3 ma4">
          Current Product Rating: {productRating}    
      </h1>
      <img src="https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80"></img>
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
