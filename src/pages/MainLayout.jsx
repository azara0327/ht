import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
    return (
        <div className="main-layout">
            {/* Sidebar Navigation */}
            <nav className="navbar">
                <h1 className="navbar-title">Travel Desk</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/MainDashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/Bookings">Bookings</Link>
                    </li>
                    <li>
                        <Link to="/Itineraries">Commute</Link>
                    </li>
                    <li>
                        <Link to="/expense-tracker">Expense Tracker</Link>
                    </li>
                    <li>
                        <Link to="/schedule-tracker">Schedule Tracker</Link>
                    </li>
                    <li>
                        <Link to="/user-profile">User Profile</Link>
                    </li>
                    <li>
                        <Link to="/chat-page">Chat Box</Link>
                    </li>
                    <li>
                        <Link to="/connect">Connect</Link>
                    </li>
                </ul>
            </nav>

            {/* Content Section */}
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
