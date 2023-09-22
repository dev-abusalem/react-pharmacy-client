import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: '01/01/2023',
    sales: 3490,
    purchase: 1120,
  },
  {
    date: '02/01/2023',
    sales: 4200,
    purchase: 1450,
  },
  {
    date: '03/01/2023',
    sales: 6784,
    purchase: 1500,
  },
  {
    date: '04/01/2023',
    sales: 4415,
    purchase: 1300,
  },
  {
    date: '05/01/2023',
    sales: 4125,
    purchase: 1420,
  },
  {
    date: '06/01/2023',
    sales: 3409,
    purchase: 1003,
  },
  {
    date: '07/01/2023',
    sales: 3440,
    purchase: 1710,
  },
  {
    date: '08/01/2023',
    sales: 3890,
    purchase: 4700,
  },
  {
    date: '09/01/2023',
    sales: 3790,
    purchase: 1630,
  },
  {
    date: '10/01/2023',
    sales: 4590,
    purchase: 2530,
  },
  
];

export default class MonthlyProgress extends PureComponent {

  render() {
    return (
      <section className="col-md-9 " id="expense_chat">
        <div className="expense_chat_header">
        <h5>Monthly Progress Report</h5>
      </div>
        <BarChart
          width={750}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#065f46" />
          <Bar dataKey="purchase" fill="#d1d1d1" />
        </BarChart>

        </section>
    );
  }
}


