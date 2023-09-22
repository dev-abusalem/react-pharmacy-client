import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  {
    name: 'Napa',
    sell: 412,
    
  },
  {
    name: 'Zinc',
    sell: 359,
    
  },
  {
    name: 'Antiva',
    sell: 284,
   
  },
  {
    name: 'Dexxoo',
    sell: 278,
    
  },
  {
    name: 'Curam E',
    sell: 189,
    
  },
  {
    name: 'Robic',
    sell: 112,
    
  },
  {
    name: 'Virux',
    sell: 34,
  },
];

export default class BestSales extends PureComponent {

  render() {
    return (
      <section className='col-md-6' id="expense_chat">
      
      <div className="expense_chat_header">
        <h5>Best Sales Of The Month</h5>
      </div>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        barSize={35}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 15, right: 15 }} />
        <YAxis />
        <Tooltip />
        <Legend  />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="sell" fill="#065f46" background={{ fill: '#dcfce7' }} />
      </BarChart>
</section>
);
  }
}



