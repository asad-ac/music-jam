import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events.jsx'
import EventDetails from './pages/EventDetails.jsx'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/madisonsquaregarden',
      element: <LocationEvents index={1} />
    },
    {
      path: '/madisonsquaregarden/events/:eventId',
      element: <EventDetails />
    },
    {
      path: '/cryptocomarena',
      element: <LocationEvents index={2} />
    },
    {
      path: '/cryptocomarena/events/:eventId',
      element: <EventDetails />
    },
    {
      path: '/unitedcenter',
      element: <LocationEvents index={3} />
    },
    {
      path: '/unitedcenter/events/:eventId',
      element: <EventDetails />
    },
    {
      path: '/kaseyacenter',
      element: <LocationEvents index={4} />
    },
    {
      path: '/kaseyacenter/events/:eventId',
      element: <EventDetails />
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>
      <header className='main-header'>
        <h1>Event-Jam</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App