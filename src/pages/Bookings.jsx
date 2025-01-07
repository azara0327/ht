// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import BookingForm from "../components/BookingForm";
// import Sidebar from "../components/Sidebar";

// const Bookings = () => {
//     const [activeForm, setActiveForm] = useState("Flights");

//     return (
//         <div>
            
//             {/* <Navbar setActiveForm={setActiveForm} /> */}
//             <div className="content">
//                 {activeForm === "Flights" && <BookingForm type="Flight" />}
//                 {activeForm === "Buses" && <BookingForm type="Bus" />}
//                 {activeForm === "Trains" && <BookingForm type="Train" />}
//             </div>

//         </div>
//     );
// };

// export default Bookings;

import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import "./Bookings.css";

const BookingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            id: "Flights",
            name: "Flights",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="svg-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9.75l7.5 1.5L14.25 3l6 6-6 6 1.5 7.5-1.5 1.5-9-4.5L3.75 9.75z"
                    />
                </svg>
            ),
        },
        {
            id: "Buses",
            name: "Buses",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="svg-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.75 5.25h14.5M4.75 10h14.5m-14.5 4.75h14.5M4.75 18v2.5h14.5V18m-11.5-8.25h8.25"
                    />
                </svg>
            ),
        },
        {
            id: "Trains",
            name: "Trains",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="svg-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.75 18h12.5M7.25 14.25h9.5m-9.5-6.5h9.5M12 5v9.5"
                    />
                </svg>
            ),
        },
        {
            id: "Hotels",
            name: "Hotels",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="svg-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18.75V9.75m12 0v9m-12-9h12m-12 0L4.5 6m12 0H6"
                    />
                </svg>
            ),
        },
    ];

    const handleCardClick = (category) => {
        setSelectedCategory(category);
    };

    const handleBack = () => {
        setSelectedCategory(null);
    };

    return (
        <div className="booking-page">
            {!selectedCategory ? (
                <div className="category-cards">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="card"
                            onClick={() => handleCardClick(category.id)}
                        >
                            <div className="svg-container">{category.svg}</div>
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="form-container">
                    <button className="back-button" onClick={handleBack}>
                        Back
                    </button>
                    <BookingForm type={selectedCategory} />
                </div>
            )}
        </div>
    );
};

export default BookingPage;

