import "./reviewItem.css"

import starIcon from "../../images/icon-star.svg"

const ReviweItem = ({ text }) => {
  return (
    <div className='review-item'>
        <div className="stars-wrapper">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
        </div>
        <span>{text}</span>
    </div>
  )
}


export default ReviweItem