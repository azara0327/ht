// import React, { useState } from "react";
// import "./MainDashboard.css";

// const Dashboard = () => {
//     const [activePage, setActivePage] = useState("bookings");

//     const renderContent = () => {
//         switch (activePage) {
//             case "bookings":
//                 return <h2>Bookings Content</h2>;
//             case "itineraries":
//                 return <h2>Itineraries Content</h2>;
//             case "profile":
//                 return <h2>User Profile Content</h2>;
//             case "expenses":
//                 return <h2>Expenses Content</h2>;
//             case "schedule":
//                 return <h2>Schedule Tracker Content</h2>;
//             default:
//                 return <h2>Welcome to Travel Desk</h2>;
//         }
//     };

//     return (
//         <div className="dashboard">
//             <header className="dashboard-header">
//                 <h1>Travel Desk</h1>
//             </header>

//             <div className="dashboard-container">

//                 <main className="dashboard-content">

//                     <div className="dashboard-cards">
//                         <div className="card">
//                             <h3>Total Bookings</h3>
//                             <p>120</p>
//                         </div>
//                         <div className="card">
//                             <h3>Total Expenses</h3>
//                             <p>$5,200</p>
//                         </div>
//                     </div>

//                     <div className="dynamic-content">
//                         {renderContent()}
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import React from "react";
import "./MainDashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Travel Desk</h1>
            </header>

            <div className="dashboard-container">
                <main className="dashboard-content">
                    <div className="dashboard-cards">
                        <div className="card">
                            <h3>Total Bookings</h3>
                            <p>120</p>
                        </div>
                        <div className="card">
                            <h3>Total Expenses</h3>
                            <p>$5,200</p>
                        </div>
                        <div className="card">
                            <h3>Upcoming Trips</h3>
                            <p>3</p>
                        </div>
                        <div className="card">
                            <h3>Completed Trips</h3>
                            <p>15</p>
                        </div>
                        <div className="card">
                            <h3>Feedback Received</h3>
                            <p>45</p>
                        </div>
                        <div className="card">
                            <h3>Active Users</h3>
                            <p>250</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
