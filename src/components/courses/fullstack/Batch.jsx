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
    <div className="container mx-auto p-4">
      <div className="hidden md:block">
        {/* Desktop View */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-2 border-blue-200 rounded-lg border-collapse shadow-md">
            <thead className="bg-blue-300">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider md:px-6">
                  Batch Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider md:px-6">
                  Days
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider md:px-6">
                  Start Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider md:px-6">
                  Sessions
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider md:px-6">
                  Class Hours
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium border border-blue-200 text-gray-700 uppercase tracking-wider md:px-6">
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
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 md:px-6 border border-blue-200">
                    {batch.type}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 md:px-6 border border-blue-200">
                    {batch.days}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 md:px-6 border border-blue-200">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 text-blue-500 mr-1" />
                      {batch.startDate}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800 md:px-6 border border-blue-200">
                    <ul className="list-disc list-inside">
                      {batch.sessions.map((session, sessionIndex) => (
                        <li
                          key={sessionIndex}
                          className="text-gray-700 mb-1"
                        >
                          {session}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-800 md:px-6 border border-blue-200">
                    {batch.classHours}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 md:px-6 border border-blue-200">
                    {batch.sessions.map((session, sessionIndex) => (
                      <div key={sessionIndex} className="mb-2">
                        <button className="w-full bg-white border border-[#0057D3] hover:bg-blue-600 text-[#0057D3] hover:text-white font-semibold py-2 px-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 text-xs md:text-sm md:px-4">
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
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {batches.map((batch, index) => (
          <div key={index} className="border-2 border-blue-200 rounded-lg shadow-md p-4 bg-white">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-blue-100 p-2 rounded">
                <p className="text-xs font-semibold text-gray-600">Batch Type</p>
                <p className="text-sm font-medium">{batch.type}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded">
                <p className="text-xs font-semibold text-gray-600">Days</p>
                <p className="text-sm font-medium">{batch.days}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded">
                <p className="text-xs font-semibold text-gray-600">Start Date</p>
                <div className="flex items-center">
                  <CalendarIcon className="h-3 w-3 text-blue-500 mr-1" />
                  <p className="text-sm font-medium">{batch.startDate}</p>
                </div>
              </div>
              <div className="bg-blue-100 p-2 rounded">
                <p className="text-xs font-semibold text-gray-600">Class Hours</p>
                <p className="text-sm font-medium">{batch.classHours}</p>
              </div>
            </div>
            
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-600 mb-1">Sessions</p>
              <ul className="space-y-2">
                {batch.sessions.map((session, sessionIndex) => (
                  <li key={sessionIndex} className="text-sm bg-blue-50 p-2 rounded">
                    <div className="flex justify-between items-center">
                      <span>{session}</span>
                      <button className="bg-white border border-[#0057D3] hover:bg-blue-600 text-[#0057D3] hover:text-white font-semibold py-1 px-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 text-xs">
                        Enroll
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap mt-6 gap-2">
        <div className="flex items-center">
          <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
          <p className="text-gray-700 text-sm sm:text-base">
            Can't Find the Batch You Are Looking For?
          </p>
        </div>
        <button className="bg-[#0057D3] hover:bg-white hover:text-[#0057D3] border hover:border-[#0057D3] text-white font-semibold py-1.5 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 text-sm sm:text-base">
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