import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
    const [options, setOptions] = useState({
        chart: {
            background: 'white',
        },
        xaxis: {
            categories: [
                'Moscow',
                'Frankfurt am Main',
                'Madrid',
                'Manchester',
                'Berlin']
        },
        fill: {
            colors: ['#e672f4']
        },
        markers: {
            colors: ['#f46fce']
        },
        title: {
            text: 'Developers by city - LINE CHART',
            align: 'center',
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: '30px',
                fontWeight: '800'
            }
        }
    });
    const [series, setSeries] = useState([{
        name: "Professional developers",
        data: [160900, 120700, 111800, 110600, 99400]
    }]);

    return (
        <>
            <Chart
                options={options}
                series={series}
                type='line'
                height='500px'
                width="500px"
            />
        </>
    );
};

export default LineChart;
