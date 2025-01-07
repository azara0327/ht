import React from "react";

const TravelCard = ({ travel }) => (
    <div className="card">
        <h3>{travel.destination}</h3>
        <p><strong>User:</strong> {travel.user}</p>
        <p><strong>Date:</strong> {new Date(travel.date).toLocaleDateString()}</p>
        <p><strong>Status:</strong> {travel.status}</p>
        <p><strong>Expenses:</strong> ${travel.expenses}</p>
    </div>
);

export default TravelCard;
