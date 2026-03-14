const API_BASE = "http://localhost:3000/api"

const getAllLocations = async () => {
  const response = await fetch(`${API_BASE}/locations`)
  const data = await response.json()
  return data
}

const getLocationById = async (id) => {
  const response = await fetch(`${API_BASE}/locations/${id}`)
  const data = await response.json()
  return data
}

const getEventsByLocation = async (id) => {
  const response = await fetch(`${API_BASE}/locations/${id}/events`)
  const data = await response.json()
  return data
}

export default {
  getAllLocations,
  getLocationById,
  getEventsByLocation
}
