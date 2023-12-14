import "./detailedReviewCard.css"

const DetailedReviewCard = ( { data }) => {
  const { name,verified,text,img } = data

  return (
    <div className="det-rev-card">
      <header className="card-header">
        <img src={require(`../../images/image-${img}.jpg`)} alt="person" />
        <div className="person-details">
          <span className="person-name">{name}</span>
          {verified && <span className="verification-span">Verified Buyer</span>}
        </div>
      </header>
      <p>
        "{text}"
      </p>
    </div>
  )
}


export default DetailedReviewCard