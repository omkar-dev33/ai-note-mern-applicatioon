'use client';

import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Notes = [
    { note: 1, day: 1 },
    { note: 2, day: 2 },
    { note: 3, day: 3 },
    { note: 4, day: 4 },
    { note: 5, day: 5 },
    { note: 6, day: 6 },
];

const Areachart = () => {
    return (
        <div className="max-w-[500px] h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={Notes}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Area
                        type="monotone"
                        dataKey="note"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Areachart;