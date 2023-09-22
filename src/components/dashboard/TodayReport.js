import React from 'react'

const TodayReport = () => {
  return (
    <section className='col-md-3' id="expense_chat">
      
    <div className="expense_chat_header">
      <h5>Today's Report</h5>
    </div>
    <div className="today_report_table">
      <table className='table table-hover table-bordered '>
        <thead>
          <tr>
          <th style={{textAlign:"left"}}>Today's Report</th>
          <th style={{textAlign:"right"}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{fontWeight:'bold', textAlign:"left"}}>Total Sales</td>
            <td style={{textAlign:"right"}}>440</td>
          </tr>

          <tr>
            <td style={{fontWeight:'bold', textAlign:"left"}}>Total Purchase</td>
            <td style={{textAlign:"right"}}>0</td>
          </tr>

          <tr>
            <td style={{fontWeight:'bold', textAlign:"left"}}>Cash Received	</td>
            <td style={{textAlign:"right"}}>0</td>
          </tr>

          <tr>
            <td style={{fontWeight:'bold', textAlign:"left"}}>Bank Receive</td>
            <td style={{textAlign:"right"}}>0</td>
          </tr>
          <tr>
            <td style={{fontWeight:'bold', textAlign:"left"}}>Total Service	</td>
            <td style={{textAlign:"right"}}>0</td>
          </tr>
        </tbody>
      </table>
    </div>
    </section>
  )
}

export default TodayReport