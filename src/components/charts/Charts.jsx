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
                        borderColor: 'blue',
                        fill: true
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label:'deaths',
                        borderColor: 'red',
                        backgroundColor: 'pink',
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
                                'rgba(15, 97, 173, 0.753)',
                                'rgba(54, 223, 130, 0.753)',
                                'rgba(196, 27, 63, 0.753)'
                            ],
                            data: [ confirmed.value, deaths.value, recovered.value ]
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