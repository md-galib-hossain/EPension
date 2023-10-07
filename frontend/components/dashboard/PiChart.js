import React, { useEffect, useState } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts';

const COLORS = [ '#00C49F', '#0088FE', '#0E364A'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PiChart({ applicationCountByMonth }) {
  const [selectedMonth, setSelectedMonth] = useState("");

  const months = applicationCountByMonth.map((application) => application.month);

  useEffect(() => {
    // Set the initial selected month
    if (months.length > 0 && selectedMonth === "") {
      setSelectedMonth(months[0]);
    }
  }, [months, selectedMonth]);

  const filteredData = applicationCountByMonth.find((item) => item.month === selectedMonth);

  const pieData = filteredData
    ? [
        { name: 'Approved', value: filteredData.approved },
        { name: 'Pending', value: filteredData.pending },
        { name: 'Count Expired', value: filteredData.countExpired },
      ]
    : [];

  return (
    <div className="w-full h-96 my-10">
      <h2 className="text-2xl font-bold mb-4">Total Applications</h2>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
