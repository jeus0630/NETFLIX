import * as React from 'react';
import WidgetLg from '../widgetLg/WidgetLg';
import "./widgetSm.scss";
import { Visibility } from '@mui/icons-material';

interface IWidgetSmProps {
}

const WidgetSm: React.FunctionComponent<IWidgetSmProps> = (props) => {
  return (
    <div className="widget-sm">
      <h3 className="widget-sm-title">
        New Join Members
      </h3>
      <ul className="widget-sm-list">
        <li className="widget-sm-list-item">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-user-name">Anna Keller</span>
            <span className="widget-sm-user-title">Software Engineer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon"></Visibility>
            Display
          </button>
        </li>
        <li className="widget-sm-list-item">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-user-name">Anna Keller</span>
            <span className="widget-sm-user-title">Software Engineer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon"></Visibility>
            Display
          </button>
        </li>
        <li className="widget-sm-list-item">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-user-name">Anna Keller</span>
            <span className="widget-sm-user-title">Software Engineer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon"></Visibility>
            Display
          </button>
        </li>
        <li className="widget-sm-list-item">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-user-name">Anna Keller</span>
            <span className="widget-sm-user-title">Software Engineer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon"></Visibility>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
