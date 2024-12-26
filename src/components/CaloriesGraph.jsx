import React from 'react';
import { Chart as ChartJS,LineElement,PointElement,LinearScale,CategoryScale,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const CaloriesGraph = ({ data }) => {
    const dates = data.map((entry) => entry.date);
    const calories = data.map((entry) => entry.calories);

    const chartData = {
        labels: dates.slice(-6),      // Show last 6 days
        datasets: [
            {
                label: 'Calories Consumed',
                data: calories.slice(-6),
                borderColor: '#0077cc',
                backgroundColor: 'rgba(0, 119, 204, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: '#0077cc',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="graph-container">
            <h3>Calorie Intake (Last 6 Days)</h3>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default CaloriesGraph;
