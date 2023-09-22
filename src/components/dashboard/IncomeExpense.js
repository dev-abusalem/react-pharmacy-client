import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import "./scss/allchart.scss"
const data = [
  { name: 'Total Sale', value: 380 },
  { name: 'Total Purchase', value: 350 },
  { name: 'Total Salary', value: 150 },
];



export default class IncomeExpense extends PureComponent {

  
  render() {
    return (
      <section className='col-md-6' id="expense_chat">
      
        <div className="expense_chat_header">
          <h5>Income Expense Statement</h5>
        </div>

        <div className="expense_chat_circle">
        <PieChart width={300} height={300} margin={{top:10,bottom:10}}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label="name"
          >
          <Cell fill="#00C49F" />
          <Cell fill="#FFBB28" />
          <Cell fill="#FF8042" />
          </Pie>
          <Tooltip />
        </PieChart>
        </div>
      </section>

    );
  }
}
