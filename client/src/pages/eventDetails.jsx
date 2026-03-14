import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import EventsAPI from '../services/EventsAPI'
import '../css/EventDetails.css'

const EventDetails = () => {
    const { eventId } = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await EventsAPI.getEventsById(eventId)
                setEvent(eventData)
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchEvent()
    }, [eventId])

    const rawDate = event.eventDate || event.eventdate
    const formattedDate = rawDate
        ? new Date(rawDate).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
        : ''

    return (
        <div className="event-details-page">

            <Link to={-1} className="back-button">← Back</Link>

            <div className="event-card">

                <img
                    src={event.image}
                    alt={event.title}
                    className="event-card-image"
                />

                <div className="event-card-content">
                    <h2>{event.title}</h2>

                    <p className="event-date">
                        <strong>Date:</strong> {formattedDate}
                    </p>

                    <p className="event-artist">
                        <strong>Artist:</strong> {event.artist}
                    </p>

                    <p className="event-description">
                        {event.description}
                    </p>

                    <a
                        href={event.ticketLink || event.ticketlink}
                        target="_blank"
                        rel="noreferrer"
                        className="ticket-button"
                    >
                        Get Tickets
                    </a>

                </div>
            </div>

        </div>
    )
}

export default EventDetails