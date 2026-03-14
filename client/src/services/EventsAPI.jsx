const API_BASE = 'http://localhost:3000/api'

const getAllEvents = async () => {
    const response = await fetch(`${API_BASE}/events`)
    const data = await response.json()
    return data
}

const getEventsById = async (id) => {
    const response = await fetch(`${API_BASE}/events/${id}`)
    const data = await response.json()
    return data
}

export default {
    getAllEvents,
    getEventsById
}

