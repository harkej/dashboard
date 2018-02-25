// Component in latest info view for latest values of 4 charts
import React, { Component } from 'react';

import Account from './Account';

import FaSearch from 'react-icons/lib/fa/search';
import MdFilterList from 'react-icons/lib/md/filter-list';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';
import MdChevronRight from 'react-icons/lib/md/chevron-right';

import Slider from 'react-slick';

class Accounts extends Component {
    constructor(props){
        super(props);

        this.getAccounts = this.getAccounts.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getActiveIndex = this.getActiveIndex.bind(this);
        this.getTotalAccounts = this.getTotalAccounts.bind(this);
    }

    getAccounts() {
        let accounts = this.props.accountsList.map((account) => {
                            return <div key={account.type}><Account 
                                        type={account.type} 
                                        name={account.name} 
                                        number={account.number} 
                                        holder={account.holder}
                                        active={this.props.activeIndex === account.index ? true : false} /></div>
                            });
        return accounts;
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    handleChange(index) {
        this.props.updateActiveIndex(index);
    }

    getActiveIndex() {
        let activeIndex = this.props.activeIndex + 1;
        if(activeIndex < 10) {
            return '0'+activeIndex;
        } else {
            return ''+activeIndex;
        }
    }

    getTotalAccounts() {
        if(this.props.accountsList.length < 10) {
            return '0'+this.props.accountsList.length;
        } else {
            return ''+this.props.accountsList.length;
        }
    }

    render() {
        var settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 2.4,
            slidesToScroll: 1,
            focusOnSelect: true,
            arrows: false,
            lazyLoad: true
          };

        return (
            <div className="col-md-6 col-lg-6 accounts-container flex-col">
                <div className="accounts-top flex-row">
                    <div>
                        <span className="title">My Accounts</span>
                        <span className="small-icon"><FaSearch /></span>
                        <span className="small-icon"><MdFilterList /></span>
                    </div>
                    <div>
                        <span className="indicator" onClick={this.previous}><MdChevronLeft /></span>
                        <span className="active-index">{this.getActiveIndex()}</span>
                        <span>-</span>
                        <span className="total-account">{this.getTotalAccounts()}</span>
                        <span className="indicator" onClick={this.next}><MdChevronRight /></span>
                    </div>
                </div>
                <div className="carousel" >
                    <Slider afterChange={this.handleChange} ref={c => this.slider = c } {...settings}>
                        {this.getAccounts()}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Accounts;