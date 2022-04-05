import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = ({ charts }) => {
    return (
        <div className='m-4 grid grid-cols-1 md:grid-cols-2 justify-between'>
            <div className='justify-center md:p-5 mx-auto'>
                <h1 className='text-center font-bold text-3xl text-red-600 py-4'>Line Graph of sell</h1>
                <LineChart width={500} height={300} data={charts}>

                    <Line type="monotone" dataKey="sell" stroke="#000000" />
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="revenue" stroke="#ffc658" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="sell" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>

            </div>
            <div className='justify-center p-5 mx-auto'>
                <h1 className='text-center font-bold text-3xl text-sky-800 py-4 mx-auto'>Bar Graph of Investment</h1>
                <BarChart width={500} height={300} data={charts}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="sell" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="investment" fill="#ffc658" />
                </BarChart>

            </div>
            <div className='justify-center p-5 mx-auto'>
                <h1 className='text-center font-bold text-3xl text-cyan-800 py-4'>PieChart of financial income statement</h1>
                <PieChart width={500} height={400}>
                    <Pie
                        data={charts}
                        dataKey="revenue"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#8884d8"
                    />
                    <Pie
                        data={charts}
                        dataKey="investment"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                    />
                    <Pie
                        data={charts}
                        dataKey="sell"
                        cx={200}
                        cy={200}
                        innerRadius={90}
                        outerRadius={100}
                        fill="	#A52A2A"
                        label
                    />
                    <Legend />
                </PieChart>

            </div>
            <div className='justify-center p-5 mx-auto'>
                <h1 className='text-center font-bold text-3xl text-orange-600 py-4'>PercentAreaChart of Monthly finance</h1>
                <AreaChart
                    width={500}
                    height={400}
                    data={charts}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="sell"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="investment"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                    <Legend />
                </AreaChart>

            </div>



        </div >

    );
};

export default Charts;