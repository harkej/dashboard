// Component in latest info view for latest values of 4 charts
import React, { Component } from 'react';
import FaDashboard from 'react-icons/lib/fa/dashboard';
import FaExchange from 'react-icons/lib/fa/exchange';
import MdAccountBalanceWallet from 'react-icons/lib/md/account-balance-wallet';
import MdSettings from 'react-icons/lib/md/settings';
import GoSignOut from 'react-icons/lib/go/sign-out';
import GoFileText from 'react-icons/lib/go/file-text';
import img from '../../images/me.jpg';

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            change: "positive"
        }
    }

// lifecycle method to call member function for data
    componentWillMount() {
    }

// lifecycle method to refresh charts every few seconds with new data
    componentDidMount() {
    }

// lifecycle method to clear interval upon unmounting of component
    componentWillUnmount() {
    }

    render() {
        return (
            <div className="sidebar flex-col">
                <img src={img} alt="Profile Photo" />
                <div className="icon-space flex-col">
                    <ul>
                        <li><FaDashboard /></li>
                        <li><FaExchange /></li>
                        <li><MdAccountBalanceWallet /></li>
                        <li><GoFileText /></li>
                        <li><MdSettings /></li>
                    </ul>
                    <a><GoSignOut /></a>
                </div>
            </div>
        );
    }
}

export default SideBar;