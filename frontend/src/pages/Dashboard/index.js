import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';
import api from '../../services/api';

import './styles.css';
import { Socket } from 'dgram';
import { request } from 'http';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);
    const [requests, setRequests] = useState([]);

    const user_id = localStorage.getItem('user');
    const socket = socketio('http://localhost:8448', {
        query: {user_id}, 
    });
    
    useEffect(() => {

        socket.on('booking_request', data => {
            setRequests([... requests, data]);
        
        })
    }, [requests]);

    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                 headers: { user_id }
            });

            setSpots(response.data);
        }

        loadSpots();
    }, []);

    return (
        <>
            <ul className="notifications">
                {requests.map(spot => {
                    <li key={request._id}>
                        <p>
                           <strong>{request.user.email}</strong> is requiring a reservation on <strong>{request.spot.company}</strong>
                            during the period <strong>{request.date}</strong>  
                        </p>
                        <button>ACCEPT</button>
                        <button>DECLAIN</button>
                    </li>
                })}

            </ul>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/day` : 'FREE'}</span>
                    </li>
                ))}
            </ul>

            <Link to='/new'>
                <button className="btn"> Create new spot </button>
            </Link>
        </>
    )
}