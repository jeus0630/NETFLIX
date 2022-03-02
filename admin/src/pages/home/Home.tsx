import * as React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import "./home.scss";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../redux/store';
import { getStats } from '../../redux/statSlice';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        dispatch(getStats());

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
