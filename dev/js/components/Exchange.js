import React, { Component } from 'react';

import MdTimeline from 'react-icons/lib/md/timeline';

export default class Exchange extends Component {

    constructor() {
        super();
        
        this.openExchange = this.openExchange.bind(this);
    }

    openExchange() {
        console.log('yo');
        
    }

    render() {
        return(
            <div className="flex-row exchange">
                <div className="exchange-icon" onClick={this.openExchange}>
                    <MdTimeline />
                </div>
            </div>
        );
    }
}