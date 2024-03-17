import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import "./BarChartWithShadow.css"; // Import the CSS file

const data = [
  { name: 'Mon', uv: 10 },
  { name: 'Tue', uv: 20 },
  { name: 'Wed', uv: 15 },
  { name: 'Thu', uv: 13 },
  { name: 'Fri', uv: 30 },
  { name: 'Sat', uv: 17 },
  { name: 'Sun', uv: 25 },
];

const BarChartComponent = () => {
  return (
    <div className="card"> {/* Add className="card" */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="#887ef2" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
