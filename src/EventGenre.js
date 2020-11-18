import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getDefaultNormalizer } from '@testing-library/react';

const EventGenre = ({ events }) => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

// retrieving data genres 4.9
  const getData = () => {
    const { genre } = this.state;
    const genres = ['React', 'JavaScript','Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter(({summary}) => summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  };
 const COLORS = ['#003f5c', '#ffa600','#ff6361','#58508d', '#bc5090'];

  return (
    <ResponsiveContainer height={400} >
    <PieChart width={400} height={400} >
     <Pie
       data={data}
       cx={200}
       cy={200}
       labelLine={false}
       outerRadius={80}
       fill="#8884d8"
       dataKey="value"
       label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
     >
       {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
       </Pie>
     </PieChart>
    </ResponsiveContainer> 
  );
}

export default EventGenre;