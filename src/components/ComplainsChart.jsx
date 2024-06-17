import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
Chart.register(ArcElement, Tooltip, Legend);

const ComplaintsChart = () => {
    const summary = {
        cleaning: 10,
        food: 5,
        maintenance: 15,
        noise: 8,
        other: 2,
    };

    const propertySummary = [
        {
            property: 1,
            name: 'Property A',
            cleaning: 4,
            food: 2,
            maintenance: 5,
            noise: 3,
            other: 1,
        },
        {
            property: 2,
            name: 'Property B',
            cleaning: 6,
            food: 3,
            maintenance: 10,
            noise: 5,
            other: 1,
        },
        {
            property: 3,
            name: 'Property B',
            cleaning: 6,
            food: 3,
            maintenance: 10,
            noise: 5,
            other: 1,
        },
        {
            property: 4,
            name: 'Property B',
            cleaning: 6,
            food: 3,
            maintenance: 10,
            noise: 5,
            other: 1,
        },
        {
            property: 4,
            name: 'Property B',
            cleaning: 6,
            food: 3,
            maintenance: 10,
            noise: 5,
            other: 1,
        },
        {
            property: 4,
            name: 'Property B',
            cleaning: 6,
            food: 3,
            maintenance: 10,
            noise: 5,
            other: 1,
        },
    ];

    const pieData = {
        labels: ['Cleaning', 'Food', 'Maintenance', 'Noise', 'Other'],
        datasets: [
            {
                data: [
                    summary.cleaning,
                    summary.food,
                    summary.maintenance,
                    summary.noise,
                    summary.other,
                ],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'],
            },
        ],
    };

return (
    <div  className='flex  w-full'>
        <h2 className='my-1'>Complaints by Category</h2>
        <div className='flex h-[300px] w-[30%]'>
            <Pie data={pieData} />
        </div>
        <h2 className='my-1'>Complaints by Property</h2>
        <div className='grid grid-cols-3 gap-1'>
            {propertySummary.map((property) => (
                <div key={property.property}>
                    <h3>{property.name}</h3>
                    <Pie 
                        data={{
                            labels: ['Cleaning', 'Food', 'Maintenance', 'Noise', 'Other'],
                            datasets: [
                                {
                                    data: [
                                        property.cleaning,
                                        property.food,
                                        property.maintenance,
                                        property.noise,
                                        property.other,
                                    ],
                                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'],
                                },
                            ],
                        }}
                    />
                </div>
            ))}
        </div>
    </div>
);
};

export default ComplaintsChart;
