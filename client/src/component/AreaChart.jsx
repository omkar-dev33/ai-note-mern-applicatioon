'use client';
import { AreaChart,Area,ResponsiveContainer } from "recharts";
const Notes = [
    {
        "note":1,
        "day":1,
    },
    {
        "note":2,
        "day":2,
    },
    {
        "note":3,
        "day":3,
    },
    {
        "note":4,
        "day":4,
    },
    {
        "note":5,
        "day":5,
    },
    {
        "note":6,
        "day":6,
    },
    
];

const AreaChart = () =>{
    return(
        <>
            <ResponsiveContainer>
                <AreaChart height={400} width={500} data={Notes}>
                    <Area dataKey="note"></Area>
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}

export default AreaChart;


