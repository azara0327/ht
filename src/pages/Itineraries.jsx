import React, { useState } from "react";
import "./Itineraries.css";

const Itineraries = () => {
    const [itinerary, setItinerary] = useState([
        {
            step: "Step 1",
            title: "Flight from New York to London",
            description: "Departure: JFK Airport - 10:00 AM\nArrival: Heathrow Airport - 8:00 PM",
            icon: "✈️",
        },
        {
            step: "Step 2",
            title: "Bus from London to Oxford",
            description: "Departure: London Bus Station - 10:00 PM\nArrival: Oxford Central - 11:30 PM",
            icon: "🚌",
        },
        {
            step: "Step 3",
            title: "Hotel Check-in",
            description: "Stay at Oxford Grand Hotel - Check-in at 12:00 AM",
            icon: "🏨",
        },
    ]);

    const [newPlace, setNewPlace] = useState({
        title: "",
        description: "",
        icon: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPlace({ ...newPlace, [name]: value });
    };

    const handleAddPlace = (e) => {
        e.preventDefault();
        const stepNumber = `Step ${itinerary.length + 1}`;
        setItinerary([...itinerary, { ...newPlace, step: stepNumber }]);
        setNewPlace({ title: "", description: "", icon: "" }); // Clear form
    };

    return (
        <div className="itineraries-container">
            <h2 className="itineraries-title">Travel Itinerary</h2>

            <div className="roadmap">
                {itinerary.map((item, index) => (
                    <div key={index} className="roadmap-step">
                        <div className="icon">{item.icon || "📍"}</div>
                        <div className="details">
                            <h3>{item.step}: {item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <form className="add-place-form" onSubmit={handleAddPlace}>
                <h3>Add a New Place</h3>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={newPlace.title}
                        onChange={handleInputChange}
                        placeholder="Enter title (e.g., Flight to Paris)"
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={newPlace.description}
                        onChange={handleInputChange}
                        placeholder="Enter description (e.g., Departure: 10:00 AM)"
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Icon (Emoji):</label>
                    <input
                        type="text"
                        name="icon"
                        value={newPlace.icon}
                        onChange={handleInputChange}
                        placeholder="Enter emoji (e.g., ✈️)"
                    />
                </div>
                <button type="submit">Add Place</button>
            </form>
        </div>
    );
};

export default Itineraries;
