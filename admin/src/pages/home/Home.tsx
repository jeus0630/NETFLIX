import * as React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import "./home.scss";

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
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
