import React from "react";
import "./Connect.css";

const Itineraries = () => {
    const itinerary = [
        {
            
            title: "Meditab Person of Contact",
            description: "John doy - HR, US ph no-231456",
           
        },
        {
           
            title: "Local Authorities",
            description: "Local Police Department - California ph no-911",
          
        },
        {
           
            title: "Local emergency services",
            description: "Local General Hospital ph no-123456",
            
        },
    ];

    return (
        <div className="itineraries-container">
            <h2 className="itineraries-title">Connect</h2>

            <div className="roadmap">
                {itinerary.map((item, index) => (
                    <div key={index} className="roadmap-step">
                        <div className="icon">{item.icon || "📍"}</div>
                        <div className="details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Itineraries;
