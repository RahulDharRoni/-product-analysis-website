import React, { useEffect, useState } from 'react';
import Charts from '../Charts/Charts';


const Dashboard = () => {
    const [charts, setCharts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json?fbclid=IwAR0c699hgxQFpWiEe74LiGI8eckk24KnHdnSzyjO099YslhwpiqCtl2r-L0')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, [])
    return (
        <div>
            <Charts charts={charts}></Charts>
        </div>

    );
};

export default Dashboard;