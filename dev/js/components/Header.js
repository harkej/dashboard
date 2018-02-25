// Component in latest info view for latest values of 4 charts
import React, { Component } from 'react';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';
import MdViewModule from 'react-icons/lib/md/view-module';
import MdViewWeek from 'react-icons/lib/md/view-week';

class Header extends Component {
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
            <div className="header-container flex-row">
                <div className="header-left flex-row">
                    <div className="chev-left">
                        <MdChevronLeft />
                    </div>
                    <h4>Accounts overview</h4>
                </div>
                <div className="header-right flex-row">
                    <h6>Page style</h6>
                    <span className="header-top"><MdViewModule /></span>
                    <span className="header-top"><MdViewWeek /></span>
                </div>
            </div>
        );
    }
}

export default Header;