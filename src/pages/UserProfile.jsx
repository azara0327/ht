import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = ({ userName = "John Doe", avatarUrl = "https://via.placeholder.com/50" }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        alert(`You selected: ${option}`);
        setIsDropdownOpen(false);
    };

    return (
        <div className="user-profile-page">
            {/* Header Section */}
            <div className="user-profile-header">
                <h1>Welcome, {userName}!</h1>
            </div>

            {/* User Card */}
            <div className="user-card">
                <div className="user-card-header" onClick={toggleDropdown}>
                    <img src={avatarUrl} alt="User" className="user-avatar" />
                    <div className="user-info">
                        <h2>{userName}</h2>
                        <p>Role: Travel Manager</p>
                    </div>
                </div>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li onClick={() => handleOptionClick("My Profile")}>My Profile</li>
                            <li onClick={() => handleOptionClick("Know Your Colleague")}>
                                Know Your Colleague
                            </li>
                            <li onClick={() => handleOptionClick("Feedback/Contact Us")}>
                                Feedback/Contact Us
                            </li>
                            <li onClick={() => handleOptionClick("Logout")}>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
