import React from 'react'
import BestSales from '../components/dashboard/BestSales'
import IncomeExpense from '../components/dashboard/IncomeExpense'
import MainSummary from '../components/dashboard/MainSummary'
import MonthlyProgress from '../components/dashboard/MonthlyProgress'
import TodayReport from '../components/dashboard/TodayReport'
import "./scss/dashboard.scss"

const Dashboard = () => {

  return (
   <>
    <MainSummary />

    <div className="chart_wrapper">
    <div className="row chart_wrapper_card">
    <IncomeExpense />
    <BestSales />
    </div>
    <div className="row chart_wrapper_card">
    <MonthlyProgress />
    <TodayReport />
    </div>

    </div>
    
   </>
  )
}

export default Dashboard