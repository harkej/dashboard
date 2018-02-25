// Component in latest info view for latest values of 4 charts
import React, { Component } from 'react'

// Component fromthird party charting library
import { LineChart, Line, ResponsiveContainer } from 'recharts';

// Custom icons from react-icons library
import MdArrowDownward from 'react-icons/lib/md/arrow-downward';
import MdArrowUpward from 'react-icons/lib/md/arrow-upward';
import GoFileText from 'react-icons/lib/go/file-text';

//Defining data for the increase in revenue over last 7 days
const data = [
    {
        "previous": 1,
        "previousValue": 175
    },
    {
        "previous": 2,
        "previousValue": 179
    },
    {
        "previous": 3,
        "previousValue": 188
    },
    {
        "previous": 4,
        "previousValue": 176
    },
    {
        "previous": 5,
        "previousValue": 181
    },
    {
        "previous": 6,
        "previousValue": 190
    },
    {
        "previous": 7,
        "previousValue": 192
    }
];

class Balance extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let { type, value, dollarValue, dollarIncrease, revenue, revenueIncrease,
        orderVolume, orderVolumeIncrease } = this.props.balance;

        return (
            <div className="col-md-6 col-lg-6 balance-container">
                <h2>Balance</h2>
                <div className="balance-col flex-col">
                    <div className="balance-row-1 flex-row">
                        <div>
                            <div>
                                <span className="currency">{type}</span>
                                <span className="currency-value">{value}</span>
                            </div>
                            <div className="curr-bottom">
                                <span className="dollar">$</span>
                                <span className="conversion">{dollarValue}</span>
                                <span className="rate">{dollarIncrease}</span>
                            </div>
                        </div>
                        <div className="sell-buy-order flex-row">
                            <div className="func-box flex-col">
                                <span id="svg-icon"><MdArrowUpward /></span>
                                <span>Sell</span>
                            </div>
                            <div className="func-box flex-col">
                                <span id="svg-icon"><MdArrowDownward /></span>
                                <span>Buy</span>
                            </div>
                            <div className="func-box flex-col">
                                <span id="svg-icon"><GoFileText /></span>
                                <span>Order</span>
                            </div>
                        </div>
                    </div>
                    <div className="balance-row-2 flex-row">
                        <div className="revenue">
                            <h5>Your today revenue</h5>
                            <div className="flex-col">
                                <div>
                                    <span className="curr-indicator">+</span>
                                    <span className="curr-indicator">$</span>
                                    <span className="curr-value">{revenue}</span>
                                </div>
                                <div className="flex-row">
                                    <span>
                                    <LineChart width={100} height={200} data={data}>
                                        <Line type="monotone" dataKey="previousValue" stroke="#8884d8" dot={false} label={"hi"} />
                                    </LineChart>
                                    </span>
                                    <span className="rate push-down">{revenueIncrease}</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-volume">
                            <h5>Current order volume</h5>
                            <div className="flex-col">
                                <div>
                                    <span className="curr-indicator">$</span>
                                    <span className="curr-value">{orderVolume}</span>
                                </div>
                                <div className="flex-row">
                                    <span>
                                        <LineChart width={100} height={200} data={data}>
                                            <Line type="monotone" dataKey="previousValue" stroke="#8884d8" dot={false} label={"hi"} />
                                        </LineChart>
                                    </span>
                                    <span className="rate push-down">{orderVolumeIncrease}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Balance;