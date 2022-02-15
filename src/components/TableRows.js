import React from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios'
import { TBData } from './TableCols'

export class TableRows extends React.Component {

    //ticket_rows_api = process.env.REACT_APP_API_TEST_TICKET_ROWS_KEY
    ticket_rows_api = process.env.REACT_APP_API_LIVE_TICKET_ROWS_KEY

    state = {
        data: [],
        redirect: false,
        id: 0
    }

    componentDidMount() {

        axios.get(this.ticket_rows_api)
            .then(res => {
                const rows = res.data;
                //console.log(rows);
                this.setState({ data: rows })
                //console.log(this.state.data);
            }).catch(error => console.log(error.response));
    }

    componentDidUpdate() {

    }

    fetchTicketDetails = (event) => {
        this.setState({ redirect: true })
        this.setState({ id: event.target.parentElement.attributes[0].nodeValue })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/ticketdetail?id=${this.state.id}`} />
        }
    }

    render() {
        return (
            <>
                <TBData data={this.state.data} />
                {this.renderRedirect()}
            </>
        )
    }
}

