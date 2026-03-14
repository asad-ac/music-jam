const API_BASE = "http://localhost:3000/api"

export const getEvents = async () => {
  const response = await fetch(`${API_BASE}/events`)
  return response.json()
}

export const getEventById = async (id) => {
  const response = await fetch(`${API_BASE}/events/${id}`)
  return response.json()
}
