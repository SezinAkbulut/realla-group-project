import React from 'react';
import '../../css/app.css';

// Sample timeline data
const timelineData = [
  { id: 1, text: 'Problem report sent', date: '28.03.24', time: '8:00 AM' },
  { id: 2, text: 'The landlord contacted a repairman', date: '01.04.24', time: '9:15 AM' },
  { id: 3, text: 'The repairman made an appointment', date: '03.04.24', time: '1:00 PM' },
  { id: 4, text: 'The repairman is on the way', date: '04.04.24', time: '2:30 PM', current: true },
];

const FollowUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: '#292f36' }}>
      <div className="w-full max-w-5xl rounded-lg p-24" style={{ backgroundColor: '#444D57', minHeight: '500px' }}>
        <h2 className="text-2xl font-bold text-center text-white mb-32">Follow up of the reported problem:</h2>
        <div className="relative">
          <div className="absolute w-full h-1" style={{ top: '50%', backgroundColor: '#292f36' }} />
          <div className="flex justify-between items-center">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full shadow-md ${item.current ? 'bg-yellow-500' : 'bg-white border-4 border-#292f36'}`} />
                <div className="absolute mt-16 text-center bg-white p-2 rounded shadow-lg z-10" style={{ minWidth: '200px' }}>
                  <p className="font-semibold text-gray-700">{item.text}</p>
                  <time className="text-xs">{item.date}</time>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
                {index < timelineData.length - 1 && (
                  <div className="absolute top-1/2 -right-1/2 w-1/2 h-1" style={{ backgroundColor: '#292f36' }} />
                )}
              </div>  
            ))}
          </div>
        </div>
        
        {/* Button container */}
        <div className="flex justify-end mt-40 space-x-8">
          {/* Back button */}
          <button 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-14 rounded-lg" 
            style={{ backgroundColor: '#fdb514' }}
            onClick={() => window.history.back()}
          >
            Back
          </button>
          {/* See Details button */}
          <button 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded-lg" 
            style={{ backgroundColor: '#fdb514' }}
            onClick={() => { /* Handle see details action here */ }}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
