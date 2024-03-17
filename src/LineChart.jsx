import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import "./LineChartWithShadow.css"; // Import the CSS file

const data = [
  { name: 'Mon', uv: 10 },
  { name: 'Tue', uv: 20 },
  { name: 'Wed', uv: 15 },
  { name: 'Thu', uv: 13 },
  { name: 'Fri', uv: 30 },
  { name: 'Sat', uv: 17 },
  { name: 'Sun', uv: 25 },
];

const LineChartComponent = () => {
  return (
    <div className="card">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#28C76F" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;