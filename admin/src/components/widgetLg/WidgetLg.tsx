import * as React from 'react';
import "./widgetLg.scss";

interface IWidgetLgProps {
}

const WidgetLg: React.FunctionComponent<IWidgetLgProps> = (props) => {

    const Button = ({ type }: { type: string }) => {
        return (
            <button className={"widget-lg-button " + type}>{type}</button>
        )
    }

    return (
        <div className="widget-lg">
            <h3 className="widget-lg-title">
                Latest transactions
            </h3>
            <table className="widget-lg-table">
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">
                        2 Jun 2021
                    </td>
                    <td className="widget-lg-amount">
                        $122.00
                    </td>
                    <td className="widget-lg-status">
                        <Button type={"Approved"}></Button>
                    </td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">
                        2 Jun 2021
                    </td>
                    <td className="widget-lg-amount">
                        $122.00
                    </td>
                    <td className="widget-lg-status">
                        <Button type={"Declined"}></Button>
                    </td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">
                        2 Jun 2021
                    </td>
                    <td className="widget-lg-amount">
                        $122.00
                    </td>
                    <td className="widget-lg-status">
                        <Button type={"Pending"}></Button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetLg;
