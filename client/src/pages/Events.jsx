import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchEvents()
    }, [])

    return (
        <div className='location-events'>
            <header>
                <h2>All Events</h2>
                <p>Explore every event happening across all venues.</p>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                        />
                    ) : <h2>No events available</h2>
                }
            </main>
        </div>
    )
}

export default Events
