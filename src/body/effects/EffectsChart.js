import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

export default function EffectsChart(props) {

	const filterPlottingData = (newData) => {
		return newData == null ? data : newData;
	}

	return (
		<div>
			<BarChart width={730} height={250} data={filterPlottingData(props.chartData)}>
			  <CartesianGrid strokeDasharray="3 3" />
			  <XAxis dataKey="symptom" />
			  <YAxis />
			  <Tooltip />
			  <Legend />
			  <Bar dataKey="frequency" fill="#8884d8" />
			</BarChart>
		</div>
	)
}