import * as React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import "./home.scss";
import { useState, useEffect } from "react";

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

    const MONTHS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {

        return () => {
            
        }
    }, [])

    return (
        <div className="home">
            <FeaturedInfo></FeaturedInfo>
            <Chart></Chart>
            <div className="home-widgets">
                <WidgetSm></WidgetSm>
                <WidgetLg></WidgetLg>
            </div>
        </div>
    );
};

export default Home;
