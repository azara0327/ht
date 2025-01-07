// import React, { useState } from "react";
// import "./ScheduleTracker.css";

// const ScheduleTracker = () => {
//     const [trips, setTrips] = useState([
//         { id: 1, name: "Paris Trip", date: "2025-01-10", tasks: [] },
//         { id: 2, name: "London Trip", date: "2025-02-15", tasks: [] },
//     ]);

//     const [selectedTrip, setSelectedTrip] = useState(null);
//     const [task, setTask] = useState({ label: "", duration: "" });
//     const [isExpanded, setIsExpanded] = useState(false);

//     // Handle dropdown selection
//     const handleTripChange = (e) => {
//         const tripId = parseInt(e.target.value);
//         const trip = trips.find((trip) => trip.id === tripId);
//         setSelectedTrip(trip);
//         setIsExpanded(false); // Collapse task list when trip changes
//     };

//     // Update task form input
//     const handleTaskChange = (e) => {
//         const { name, value } = e.target;
//         setTask({ ...task, [name]: value });
//     };

//     // Add a new task
//     const handleAddTask = (e) => {
//         e.preventDefault();
//         if (!selectedTrip) {
//             alert("Please select a trip first!");
//             return;
//         }
//         if (!task.label || !task.duration) {
//             alert("Please fill in both task label and duration!");
//             return;
//         }
//         const updatedTrips = trips.map((trip) =>
//             trip.id === selectedTrip.id
//                 ? {
//                       ...trip,
//                       tasks: [
//                           ...trip.tasks,
//                           { id: trip.tasks.length + 1, label: task.label, duration: task.duration },
//                       ],
//                   }
//                 : trip
//         );
//         setTrips(updatedTrips);
//         setTask({ label: "", duration: "" }); // Clear the input form
//     };

//     // Delete a task
//     const handleDeleteTask = (taskId) => {
//         const updatedTrips = trips.map((trip) =>
//             trip.id === selectedTrip.id
//                 ? { ...trip, tasks: trip.tasks.filter((task) => task.id !== taskId) }
//                 : trip
//         );
//         setTrips(updatedTrips);
//     };

//     return (
//         <div className="schedule-tracker">
//             <h2>Schedule Tracker</h2>

//             {/* Dropdown to select a trip */}
//             <div className="trip-dropdown">
//                 <label htmlFor="trip">Select Trip:</label>
//                 <select id="trip" onChange={handleTripChange} defaultValue="">
//                     <option value="" disabled>
//                         Choose a trip
//                     </option>
//                     {trips.map((trip) => (
//                         <option key={trip.id} value={trip.id}>
//                             {trip.name} - {trip.date}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             {selectedTrip && (
//                 <div>
//                     <h3>
//                         {selectedTrip.name} ({selectedTrip.date})
//                     </h3>

//                     {/* Task addition form */}
//                     <form className="task-form" onSubmit={handleAddTask}>
//                         <h4>Add Task</h4>
//                         <input
//                             type="text"
//                             name="label"
//                             placeholder="Task Label"
//                             value={task.label}
//                             onChange={handleTaskChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="duration"
//                             placeholder="Task Duration (e.g., 2 hours)"
//                             value={task.duration}
//                             onChange={handleTaskChange}
//                             required
//                         />
//                         <button type="submit">Add Task</button>
//                     </form>

//                     {/* Task list */}
//                     <div className="task-list">
//                         <h4>Tasks</h4>
//                         <ul>
//                             {selectedTrip.tasks.map((task) => (
//                                 <li key={task.id}>
//                                     <span>
//                                         Task {task.id}: {task.label}
//                                     </span>
//                                     <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//                                 </li>
//                             ))}
//                         </ul>
//                         {selectedTrip.tasks.length > 0 && (
//                             <button
//                                 className="expand-button"
//                                 onClick={() => setIsExpanded(!isExpanded)}
//                             >
//                                 {isExpanded ? "Collapse" : "Expand"}
//                             </button>
//                         )}
//                     </div>

//                     {/* Expanded task details */}
//                     {isExpanded && (
//                         <div className="expanded-tasks">
//                             <h4>Task Details</h4>
//                             <ul>
//                                 {selectedTrip.tasks.map((task) => (
//                                     <li key={task.id}>
//                                         <span>
//                                             <strong>Task {task.id}:</strong> {task.label}
//                                         </span>
//                                         <span>
//                                             <strong>Duration:</strong> {task.duration}
//                                         </span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ScheduleTracker;

import React, { useState } from "react";
import "./ScheduleTracker.css";

const ScheduleTracker = () => {
    const [trips, setTrips] = useState([
        { id: 1, name: "Paris Trip", date: "2025-01-10", tasks: [] },
        { id: 2, name: "London Trip", date: "2025-02-15", tasks: [] },
    ]);

    const [selectedTripId, setSelectedTripId] = useState(null);
    const [task, setTask] = useState({ label: "", duration: "" });
    const [isExpanded, setIsExpanded] = useState(false);

    const selectedTrip = trips.find((trip) => trip.id === selectedTripId);

    // Handle dropdown selection
    const handleTripChange = (e) => {
        setSelectedTripId(parseInt(e.target.value));
        setIsExpanded(false); // Collapse expanded tasks when trip changes
    };

    // Update task form input
    const handleTaskChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    // Add a new task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!selectedTripId) {
            alert("Please select a trip first!");
            return;
        }
        if (!task.label || !task.duration) {
            alert("Please fill in both task label and duration!");
            return;
        }

        setTrips((prevTrips) =>
            prevTrips.map((trip) =>
                trip.id === selectedTripId
                    ? {
                          ...trip,
                          tasks: [
                              ...trip.tasks,
                              { id: trip.tasks.length + 1, label: task.label, duration: task.duration },
                          ],
                      }
                    : trip
            )
        );
        setTask({ label: "", duration: "" }); // Clear the input form
    };

    // Delete a task
    const handleDeleteTask = (taskId) => {
        setTrips((prevTrips) =>
            prevTrips.map((trip) =>
                trip.id === selectedTripId
                    ? {
                          ...trip,
                          tasks: trip.tasks.filter((task) => task.id !== taskId),
                      }
                    : trip
            )
        );
    };

    return (
        <div className="schedule-tracker">
            <h2>Schedule Tracker</h2>

            {/* Dropdown to select a trip */}
            <div className="trip-dropdown">
                <label htmlFor="trip">Select Trip:</label>
                <select id="trip" onChange={handleTripChange} value={selectedTripId || ""}>
                    <option value="" disabled>
                        Choose a trip
                    </option>
                    {trips.map((trip) => (
                        <option key={trip.id} value={trip.id}>
                            {trip.name} - {trip.date}
                        </option>
                    ))}
                </select>
            </div>

            {selectedTrip && (
                <div>
                    <h3>
                        {selectedTrip.name} ({selectedTrip.date})
                    </h3>

                    {/* Task addition form */}
                    <form className="task-form" onSubmit={handleAddTask}>
                        <h4>Add Task</h4>
                        <input
                            type="text"
                            name="label"
                            placeholder="Task Label"
                            value={task.label}
                            onChange={handleTaskChange}
                            required
                        />
                        <input
                            type="text"
                            name="duration"
                            placeholder="Task Duration (e.g., 2 hours)"
                            value={task.duration}
                            onChange={handleTaskChange}
                            required
                        />
                        <button type="submit">Add Task</button>
                    </form>

                    {/* Task list */}
                    <div className="task-list">
                        <h4>Tasks</h4>
                        <ul>
                            {selectedTrip.tasks.map((task) => (
                                <li key={task.id}>
                                    <span>
                                        Task {task.id}: {task.label} ({task.duration})
                                    </span>
                                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                        {selectedTrip.tasks.length > 0 && (
                            <button
                                className="expand-button"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? "Collapse" : "Expand"}
                            </button>
                        )}
                    </div>

                    {/* Expanded task details */}
                    {isExpanded && (
                        <div className="expanded-tasks">
                            <h4>Task Details</h4>
                            <ul>
                                {selectedTrip.tasks.map((task) => (
                                    <li key={task.id}>
                                        <span>
                                            <strong>Task {task.id}:</strong> {task.label}
                                        </span>
                                        <span>
                                            <strong>Duration:</strong> {task.duration}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ScheduleTracker;
