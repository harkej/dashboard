import React, { Component } from 'react';

export default class Account extends Component {

    render() {
        let {type, name, holder, number, active} = this.props;
        number = number.substr(0,4);
        let accountClass = ["flex-col","account-card"];
        if(active === true) {
            accountClass.push("active-account");
        }

        return(
            <div className={accountClass.join(' ')} id={type}>
                <div>
                    <div className="card-name">
                        {name}
                    </div>
                    <div className="card-number">
                        <span className="first-four">{number}</span>
                        <span className="secret-code">.... .... ....</span>
                    </div>
                    <div className="card-type flex-row">
                        <span>{type}</span>
                        <span>{holder}</span>
                    </div>
                </div>
            </div>
        );
    }
}