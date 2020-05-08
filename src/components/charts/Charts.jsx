import React, {useState, useEffect} from 'react'
import { Line, Bar } from 'react-chartjs-2'

import { fetchDailyData } from '../../api'

import styles from './charts.module.css'


const Charts = ({ data : { confirmed, deaths, recovered }, country }) => {
    const [dailyData, setDailyData] = useState([])

    const fetchData = async () => {
        const data = await fetchDailyData()

        if(data.error) { 
           return console.log(data.error)
        } 
        setDailyData(data)
    }   

    useEffect(() => {
        fetchData()
    }, [])

    const linChart = (
        dailyData.length
        ? (
            <Line
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label:'Infected',
                        borderColor: '#56CCF2',
                        fill: true
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label:'deaths',
                        borderColor: '#f85032',
                        fill: true
                    }]
                }}
            >
            </Line>
        ) : null
    )   

    const barChart = (
        confirmed
        ? (
            <Bar
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            labels: 'People',
                            backgroundColor: [
                                'rgb(77, 142, 228)',
                                'rgb(59, 219, 185)',
                                '#f85032'
                            ],
                            data: [ confirmed.value, recovered.value, deaths.value, ]
                        }
                    ]
                }}
                options = {{
                    legend: { display: false },
                    title: { display: true, text:`Current state in ${country}` }
                }}
            >

            </Bar>    
        ) : null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : linChart}
        </div>
    )
}

export default Charts