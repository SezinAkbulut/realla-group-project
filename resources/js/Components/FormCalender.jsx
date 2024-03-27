import React, { useRef, useState } from "react";
import '../../css/app.css';

export default function FormCalendar({ onAddAppointment, onEditAppointments }) {
    const inputRef = useRef();
    const [todoText, setTodoText] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [editMode, setEditMode] = useState(false); // New state to track edit mode

    function clickHandler() {
        const newAppointment = { title: todoText, start: new Date(fromDate), end: new Date(toDate) };
        onAddAppointment(newAppointment);

        inputRef.current.value = "";
        setTodoText("");
        setFromDate("");
        setToDate("");
    }

    function handleEditClick() {
        setEditMode(!editMode); // Toggle edit mode
        onEditAppointments(editMode); // Pass the current edit mode state to parent
    }

    return (
        <div className="flex space-x-6 mb-7 mt-7 justify-center">
            <input
                type="text"
                ref={inputRef}
                placeholder="Appointment details"
                onChange={(e) => setTodoText(e.target.value)}
                className="border border-gray-400 rounded px-3 py-2 text-gray-800"
            />
            <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                placeholder="From"
                className="border border-gray-400 rounded px-3 py-2 text-gray-800"
            />
            <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="To"
                className="border border-gray-400 rounded px-3 py-2 text-gray-800"
            />
            <button
                onClick={clickHandler}
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-800"
            >
                Add
            </button>
            <button
                onClick={handleEditClick}
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-800"
            >
                <i className='bx bxs-edit-alt'></i>
            </button>
        </div>
    );
}
