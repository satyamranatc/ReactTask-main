import React from 'react'
import BarChartComponent from './BarChartComponent'
import LineChartComponent from './LineChart'
export default function Home() {
  return (
    <div>
        <center>
            <h1 style={{fontSize:"200px"}}>Home</h1>
            <BarChartComponent />
            <LineChartComponent />
        </center>
    </div>
  )
}
