// import React from "react";
// import "./Navbar.css"; // Add relevant styles

// const Navbar = ({ setActiveForm }) => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <h1>Travel Desk</h1>
//             </div>
//             <ul className="navbar-links">
//                 <li><button onClick={() => setActiveForm("Flights")}>Flights</button></li>
//                 <li><button onClick={() => setActiveForm("Buses")}>Buses</button></li>
//                 <li><button onClick={() => setActiveForm("Trains")}>Trains</button></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Travel Desk</h1>
            <ul className="nav-links">
                <li onClick={() => setCurrentPage("MainDashboard")}>MainDashboard</li>
                <li onClick={() => setCurrentPage("Bookings")}>Bookings</li>
                <li onClick={() => setCurrentPage("Dashboard")}>Network</li>
                <li onClick={() => setCurrentPage("Itineraries")}>Itineraries</li>
                <li onClick={() => setCurrentPage("ExpenseTracker")}>Expense Tracker</li>
                <li onClick={() => setCurrentPage("ScheduleTracker")}>Schedule Tracker</li>
                <li onClick={() => setCurrentPage("UserProfile")}>User</li>
                <li onClick={() => setCurrentPage("connect")}>Connect</li>
            </ul>
        </nav>
    );
};

export default Navbar;
