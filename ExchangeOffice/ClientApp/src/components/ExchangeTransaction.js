import React, {Component} from 'react';
import {AuthHeader, HandleResponse} from "../helpers";
import moment from 'moment';

export class ExchangeRates extends Component {

    constructor(props) {
        super(props);
        this.state = {exchangeRates: [], loading: true};
    }

    componentDidMount() {
        this.populateExchangeRate().then(result => {
            this.setState({exchangeRates: result, loading: false});
        });

    }

    static renderExchangeRatesTable(exchangeRates) {
        return (
            <table className='table table-striped' aria-labelledby="tableLabel">
                <thead>
                <tr>
                    <th>Query date</th>
                    <th>Publishing date</th>
                    <th>Provider</th>
                    <th>Rate</th>
                    <th>Reference</th>
                </tr>
                </thead>
                <tbody>
                {exchangeRates.map(exchangeRates =>
                    <tr key={exchangeRates.id}>

                        <td>
                            {moment(exchangeRates.queryTime).format("dddd, MMM DD at HH:mm a")}
                        </td>
                        <td>
                            {moment(exchangeRates.publishingDate).format("dddd, MMM DD at HH:mm a")}
                        </td>
                        <td>{exchangeRates.provider}</td>
                        <td>
                            {new Intl.NumberFormat("en-GB", {
                                style: "currency",
                                currency: exchangeRates.to
                            }).format(exchangeRates.rate)}
                        </td>
                        <td>{exchangeRates.reference}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ExchangeRates.renderExchangeRatesTable(this.state.exchangeRates);

        return (
            <div>
                <h1 id="tableLabel">Exchange rates</h1>
                {contents}
            </div>
        );
    }

    populateExchangeRate() {
        const requestOptions = {method: 'GET', headers: AuthHeader()};
        return fetch('api/ExchangeRate', requestOptions).then(HandleResponse);
    }
}
