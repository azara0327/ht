import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActivePage }) => {
    return (
        <div className="sidebar">
            <h2>Travel Desk</h2>
            <ul>
                <li onClick={() => setActivePage("Bookings")}>Bookings</li>
                <li onClick={() => setActivePage("Itineraries")}>Itineraries</li>
                <li onClick={() => setActivePage("Profile")}>User Profile</li>
                <li onClick={() => setActivePage("Expenses")}>Expenses</li>
                <li onClick={() => setActivePage("Schedule Tracker")}>Schedule Tracker</li>
            </ul>
        </div>
    );
};

export default Sidebar;
