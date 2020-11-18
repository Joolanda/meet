import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
//import { getDefaultNormalizer } from '@testing-library/react';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => { setData(() => getData()); }, [events]);


// retrieving data genres 4.9
  const getData = () => {
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
          	data.map((entry, index) => (<Cell key={`cell-$(index}`} fill={COLORS[index % COLORS.length]} name={entry.name}/>
           ))
          }
       </Pie>
     </PieChart>
    </ResponsiveContainer> 
  );
}

export default EventGenre;