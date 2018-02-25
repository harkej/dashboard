// Component in latest info view for latest values of 4 charts
import React, { Component } from 'react'

// Component fromthird party charting library
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class ViewButton extends Component {
    handleClick = () => this.props.handleClick(this.props.view);

    render() {
        let { view, viewGraph, activeView } = this.props;
        let viewClass = ["tab"];
        if(viewGraph[activeView] === view) {
            viewClass.push("active-tab");
        }
        return(
            <span onClick={this.handleClick} className={viewClass.join(' ')}>
                {view}
            </span>
        );
    }
}

class GraphView extends Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.getGraphView = this.getGraphView.bind(this);
    }

    handleClick(view) {
        this.props.updateActiveGraphView(this.props.viewGraph.indexOf(view));
    }

    getGraphView() {
        let index = this.props.activeGraphView;
        return this.props.viewGraph.map((view) => {
            return <ViewButton 
                        key={view}
                        activeView={index} 
                        viewGraph={this.props.viewGraph} 
                        view={view}
                        handleClick={this.handleClick} />           
        });
    }

    render() {
        let { type, name, graphData, viewGaph } = this.props;
        name = name + ' Charts';
 
        return (
            <div className="graph-container">
                <div className="flex-row graph-header">
                    <span className="graph-name">
                        <span>{name}</span>
                        <span className="separator"> o </span>
                        <span className="type">{type}</span>
                    </span>
                    <span className="graph-tab">
                        {this.getGraphView()}
                    </span>
                </div>
                <div className="graph">
                    <ResponsiveContainer width="100%" height={180}>
                        <LineChart width={0} height={0} data={graphData.data} 
                        margin={{ top: 40, right: 15, left: 0, bottom: 0 }}>
                            <CartesianGrid 
                                vertical={false}
                                strokeWidth={0.25} />
                            <XAxis 
                                dataKey="previous" 
                                axisLine={true} 
                                tickLine={false}
                                mirror={true} />
                            <YAxis 
                                allowDataOverflow={true} 
                                axisLine={false} 
                                tickLine={false} 
                                interval="preserveStartEnd"
                                mirror={true}
                                unit="$"
                                minTickGap={9} />
                            <Tooltip />
                            <Line 
                                type="monotone" 
                                dataKey="previousValue" 
                                stroke="#8da3f7" 
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ stroke: 'red', strokeWidth: 2 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        );
    }
}

export default GraphView;