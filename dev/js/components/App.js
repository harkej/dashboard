// entry point for app containers and components for different views
import React, { Component } from 'react'

// Main View containers 
import GraphView from './GraphView'
import Balance from './Balance'
import Header from './Header'
import Accounts from './Accounts'
import SideBar from './SideBar'
import Exchange from './Exchange';

import '../../scss/App.scss'

import DummyData from "../data/DummyData";

const { accountsList, balanceList, graphData, viewGraph } = DummyData;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeAccount: accountsList[0],
      activeBalance: balanceList[0],
      graphData: graphData[0],
      activeIndex: 0,
      activeGraphView: 0
    };
  }

  updateActiveIndex = (index) => {
    this.setState({
      activeIndex: index,
      activeAccount: accountsList[index],
      activeBalance: balanceList[index]
    });
  }

  updateActiveGraphView = (index) => {
    this.setState({
      activeGraphView: index,
      graphData: graphData[index]
    });
  }

  render() {
    return (
      <section className="flex-row">
        <SideBar />
        <div className="main-content flex-col">
          <Header />
          <div className="content-row row flex-col">
            <Balance balance={this.state.activeBalance} />
            <Accounts 
                accountsList={accountsList} 
                activeIndex={this.state.activeIndex}
                updateActiveIndex={this.updateActiveIndex} />
          </div>
          <GraphView
              viewGraph={viewGraph}
              graphData={this.state.graphData}
              activeGraphView={this.state.activeGraphView}
              type={this.state.activeAccount.type}
              name={this.state.activeBalance.name}
              updateActiveGraphView={this.updateActiveGraphView} />
          <Exchange />
        </div>
      </section>
    );
  }
}