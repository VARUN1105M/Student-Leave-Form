import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white min-h-screen p-4">
      <h2 className="text-lg font-bold mb-6">Navigation</h2>
      <ul>
        <li className="mb-4 hover:bg-blue-500 p-2 rounded">
          <a href="#leave-status">Leave Status</a>
        </li>
        <li className="mb-4 hover:bg-blue-500 p-2 rounded">
          <a href="#incomplete">Incomplete</a>
        </li>
        <li className="mb-4 hover:bg-blue-500 p-2 rounded">
          <a href="#calendar">Calendar</a>
        </li>
        <li className="mb-4 hover:bg-blue-500 p-2 rounded">
          <a href="#generate-pdf">Generate PDF</a>
        </li>
        <li className="hover:bg-blue-500 p-2 rounded">
          <a href="#logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};

const Test = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-grow">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Leave Request Form</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <select className="w-full p-2 mb-4 border border-gray-300 rounded">
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="vacation">Vacation Leave</option>
            <option value="personal">Personal Leave</option>
          </select>

          <input
            type="date"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <input
            type="date"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <textarea
            placeholder="Reason for Leave"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            rows="4"
          />

          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
