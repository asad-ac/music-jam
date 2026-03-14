import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EventsAPI from '../services/EventsAPI'
import '../css/Event.css'

const Event = ({ id, detailPath }) => {
    const [event, setEvent] = useState({})
    const [remaining, setRemaining] = useState('')

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await EventsAPI.getEventsById(id)
                setEvent(eventData)
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchEvent()
    }, [id])

    const rawDate = event.eventDate || event.eventdate
    const formattedDate = rawDate
        ? new Date(rawDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
        : ''

    useEffect(() => {
        if (!rawDate) return

        const eventDateObj = new Date(rawDate)
        const now = new Date()
        const diff = eventDateObj - now
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24))

        if (days > 0) {
            setRemaining(`${days} day(s) remaining`)
        } else if (days === 0) {
            setRemaining('Happening today!')
        } else {
            setRemaining(`Event passed ${Math.abs(days)} day(s) ago`)
        }
    }, [rawDate])

    return (
        <Link to={detailPath} className='event-link'>
            <article className='event-information'>
                <img src={event.image} alt={event.title} />

                <div className='event-information-overlay'>
                    <div className='text'>
                        <h3>{event.title}</h3>
                        <p>
                            <i className="fa-regular fa-calendar fa-bounce"></i>
                            {formattedDate}
                        </p>
                        <p id={`remaining-${event.id}`}>{remaining}</p>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default Event