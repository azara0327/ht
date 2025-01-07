import React from "react";
import  Bookings from "./pages/Bookings";
import MainDashboard from "./pages/MainDashboard";
import Itineraries from "./pages/Itineraries";
import ExpenseTracker from "./pages/ExpenseTracker";
import ScheduleTracker from "./pages/ScheduleTracker";
import UserProfile from "./pages/UserProfile";
import MainLayout from "./pages/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Connect from "./pages/Connect";



// const App = () => {
//     return (
//         <div>
//             < MainDashboard />
//         </div>
//     );
// };

// export default App;





const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainDashboard />} />
                    <Route path="MainDashboard" element={<MainDashboard />} />
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="itineraries" element={<Itineraries />} />
                    <Route path="expense-tracker" element={<ExpenseTracker />} />
                    <Route path="schedule-tracker" element={<ScheduleTracker />} />
                    <Route path="user-profile" element={<UserProfile />} />
                    <Route path="chat-page" element={<ChatPage />} />
                    <Route path="connect" element={<Connect />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
