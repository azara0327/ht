import React, { useState } from "react";

const BookingForm = ({ type }) => {
    const [formData, setFormData] = useState({
        source: "",
        destination: "",
        date: "",
        passengers: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${type} booking details:`, formData);
        alert(`${type} booked successfully!`);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book {type}</h2>
            <input
                type="text"
                name="source"
                placeholder="Source"
                value={formData.source}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="passengers"
                placeholder="Passengers"
                value={formData.passengers}
                min="1"
                onChange={handleChange}
                required
            />
            <button type="submit">Book {type}</button>
        </form>
    );
};

export default BookingForm;
