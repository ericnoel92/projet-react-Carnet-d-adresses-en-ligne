import React from "react";
import { Link } from "react-router-dom";
import '../css/components/cards.css'

function Cards({locations}) {
    return(
        <div className="card-container">
            {locations.map((location) => {
                return(
                    <div key={location.id} className="card">
                        <Link to={`/Logement/${location.id}`}>
                           <img src={location.cover} alt={location.title} />
                            <div className="card-title">{location.title}</div> 
                        </Link>
                    </div>
                )}              
            )}
        </div>
    )
}

export default Cards