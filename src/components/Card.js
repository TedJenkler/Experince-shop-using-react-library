import React from "react";

const Card = (props) => {
// Dosent work Online badge
    let badgeText
    if (props.openSpots === 0){
        badgeText = "Sold Out"
    }
    else if (props.location === "Online"){
        badgeText = "Online"
    }

    return (
        <div className="Card">
          {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} className="card--img" />
                <div className="card--stats">
                    <img src="https://th.bing.com/th/id/OIP.PataxjiGLpBaFpvW8gg8IAHaHa?pid=ImgDet&rs=1" className="star"/>
                    <span className="rating">{props.rating}</span>
                    <span className="review">({props.reviewCount})</span>
                    <span className="country">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From a ${props.price}</span> / person</p>
        </div>
    )
}

export default Card