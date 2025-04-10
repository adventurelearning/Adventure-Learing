import React from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

const batchesData = [
  {
    type: "WeekEnd",
    days: "Sat-Sun",
    startDate: "12 Apr 2025",
    startDay: "Sat",
    sessions: ["Session 1: 9:00 AM - 1:00 PM", "Session 2: 2:00 PM - 6:00 PM"],
    timeSlots: ["9:00 AM - 1:00 PM", "2:00 PM - 6:00 PM"],
    classHours: "4 Hours",
  },
  {
    type: "WeekDay",
    days: "Mon-Fri",
    startDate: "14 Apr 2025",
    startDay: "Mon",
    sessions: [
      "Session 1: 9:00 AM - 11:00 AM",
      "Session 2: 11:00 AM - 1:00 PM",
      "Session 3: 3:00 PM - 5:00 PM",
      "Session 4: 5:00 PM - 7:00 PM",
      "Session 5: 7:00 PM - 9:00 PM",
    ],
    timeSlots: [
      "9:00 AM - 11:00 AM",
      "11:00 AM - 1:00 PM",
      "3:00 PM - 5:00 PM",
      "5:00 PM - 7:00 PM",
      "7:00 PM - 9:00 PM",
    ],
    classHours: "2 Hours",
  },
];

const BatchComponent = ({ batches }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
        {/* UPCOMING BATCHES */}
      </h2>

      <div className="overflow-x-auto sm:overflow-visible">
        <table className="min-w-full border-2 border-blue-200 rounded-lg border-collapse shadow-md" >
          <thead className="bg-blue-300">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider sm:px-6">
                Batch Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider sm:px-6">
                Days
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider sm:px-6">
                Start Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider sm:px-6">
                Sessions
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider sm:px-6">
                Class Hours/Session
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider sm:px-6">
                Enroll
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-blue-200">
            {batches.map((batch, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 sm:px-6 border border-blue-200">
                  {batch.type}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 sm:px-6 border border-blue-200">
                  {batch.days}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 sm:px-6 border border-blue-200">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 text-blue-500 mr-1" />
                    {batch.startDate}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 sm:px-6 border border-blue-200">
                  <ul className="list-disc list-inside">
                    {batch.sessions.map((session, sessionIndex) => (
                      <li
                        key={sessionIndex}
                        className="text-gray-700 flex justify-between items-center mb-6"
                      >
                        {session}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-800 sm:px-6 border border-blue-200">
                  {batch.classHours}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 sm:px-6 border-b border-blue-200">
                  {batch.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="mb-2">
                      <button className="bg-white border border-[#0057D3] hover:bg-blue-600 text-[#0057D3] hover:text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
                        Enroll Now
                      </button>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center flex-wrap mt-6 sm:mt-8">
        <CalendarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2" />
        <p className="text-gray-700 mr-0 sm:mr-2 text-sm sm:text-base mb-2 sm:mb-0">
          Can't Find the Batch You Are Looking For?
        </p>
        <button className="bg-[#0057D3] ml-3 hover:bg-white hover:text-[#0057D3] border hover:border-[#0057D3] text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300">
          Request Batch
        </button>
      </div>
    </div>
  );
};

const Batch = () => {
  return (
    <div>
      <BatchComponent batches={batchesData} />
    </div>
  );
};

export default Batch;
