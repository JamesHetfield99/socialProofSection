import "./topElement.css"

import ReviweItem from "../ReviewItem/ReviweItem"

const reviewArray =["Rated 5 Stars in Reviews","Rated 5 Stars in Report Guru","Rated 5 Stars in BestTech"]
const TopElement = () => {
  return (
    <div className='top-container'>
        <div className='top-description'>
            <h1>10,000+ of our users love our products.</h1>
            <p>
            We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
            </p>
        </div>
        <div className='reviews-container'>
            {reviewArray.map((item,id) => <ReviweItem key={`item-${id}`} text={item} />)}
        </div>
    </div>
  )
}


export default TopElement