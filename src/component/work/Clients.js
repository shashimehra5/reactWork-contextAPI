import React, { Component } from "react";

class Clients extends Component {
    state = {
        clients: [
            {
                id: 1,
                clientName: 'Nivea',
                url: require('../../images/nivea.png'),
            },{
                id: 2,
                clientName: 'TomTom',
                url: require('../../images/Tomtom.png'),
            },{
                id: 3,
                clientName: 'Transavia',
                url: require('../../images/transavia.png'),
            },{
                id: 4,
                clientName: 'schramm',
                url: require('../../images/schramm.png'),
            },{
                id: 5,
                clientName: 'Panasonic',
                url: require('../../images/panasonic.png'),
            },{
                id: 6,
                clientName: 'MircoSoft',
                url: require('../../images/microsoft.png'),
            }
        ]
    }
    render() {
        return (
            <section className="client-container">
                <div className="container">
                    <div className="titleCont col-sm-12 col-md-6">
                        <h1>Clients</h1>
                        <p>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
                    </div>
                    <div className="col-sm-12 col-md-10">
                        <ul className="logos row">
                        {
                            this.state.clients.map(client => {
                                return(
                                <li key={client.id} className="col-6 col-md-4">
                                    <img src={client.url} alt={client.clientName}/>
                                </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Clients;