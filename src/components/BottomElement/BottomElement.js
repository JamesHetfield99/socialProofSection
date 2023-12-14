import "./bottomElement.css"

import DetailedReviewCard from "../DetailedReviewCard/DetailedReviewCard"

const personsArray = [
    {name:"Colton Smith",verified:true,img:"colton",text:"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"},
    {name:"Irene Roberts",verified:true,img:"irene",text:"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."},
    {name:"Anne Wallace",verified:true,img:"anne",text:"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"},
]
const BottomElement = () => {
  return (
    <div className="bottom-element">
        {personsArray.map((item,id) => <DetailedReviewCard key={`review-${id}`} data={item}  />)}
    </div>
  )
}

export default BottomElement
