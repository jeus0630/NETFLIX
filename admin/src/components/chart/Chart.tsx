import * as React from 'react';
import "./chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RootState } from '../../redux/store';
import { useSelector } from "react-redux";
interface IChartProps {
  propData?: {
    name: string;
    Sales: number;
  }[],
  dataKey?: string;
  title?: string;
}

const Chart: React.FunctionComponent<IChartProps> = ({ propData, dataKey, title }) => {

  const data = useSelector((state: RootState) => state.stats);

  return (
    <div className="chart">
      <h3 className="chart-title">{title || "User Analytics"}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
        >
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" activeDot={{ r: 8 }} dataKey={"New User"} stroke="#5550bd" />
          <Line type="monotone" stroke="#82ca9d" />
          <Tooltip>
          </Tooltip>
          {/* <CartesianGrid stroke={"#e0dfdf"} strokeDasharray="5 5"></CartesianGrid> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
