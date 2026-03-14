const events = [
    {
      id: 1,
      title: "Taylor Swift Live at the Garden",
      artist: "Taylor Swift",
      eventDate: "2026-07-12",
      locationId: 1,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
      description: "A major pop concert experience at Madison Square Garden."
    },
    {
      id: 2,
      title: "The Weeknd After Hours Show",
      artist: "The Weeknd",
      eventDate: "2026-08-05",
      locationId: 1,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
      description: "A high-energy arena performance in New York City."
    },
    {
      id: 3,
      title: "Coldplay World Tour",
      artist: "Coldplay",
      eventDate: "2026-06-20",
      locationId: 2,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      description: "Coldplay brings a large-scale live concert to Los Angeles."
    },
    {
      id: 4,
      title: "Drake Live in LA",
      artist: "Drake",
      eventDate: "2026-09-14",
      locationId: 2,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
      description: "A major live hip-hop performance at Crypto.com Arena."
    },
    {
      id: 5,
      title: "Beyonce Chicago Tour Stop",
      artist: "Beyonce",
      eventDate: "2026-07-30",
      locationId: 3,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
      description: "A headline concert stop in Chicago."
    },
    {
      id: 6,
      title: "SZA Live at United Center",
      artist: "SZA",
      eventDate: "2026-08-18",
      locationId: 3,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80",
      description: "SZA performs live at one of Chicago's biggest venues."
    },
    {
      id: 7,
      title: "Lana Del Rey Miami Nights",
      artist: "Lana Del Rey",
      eventDate: "2026-06-25",
      locationId: 4,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      description: "A cinematic live show in Miami."
    },
    {
      id: 8,
      title: "Justin Bieber Live in Miami",
      artist: "Justin Bieber",
      eventDate: "2026-09-02",
      locationId: 4,
      ticketLink: "https://www.ticketmaster.com/",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80",
      description: "A major arena concert at Kaseya Center."
    },
    {
        id: 9,
        title: "Harry Styles Love On Tour",
        artist: "Harry Styles",
        eventDate: "2026-10-05",
        locationId: 1,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
        description: "Harry Styles brings his global Love On Tour concert to Madison Square Garden."
      },
      {
        id: 10,
        title: "Billie Eilish Live",
        artist: "Billie Eilish",
        eventDate: "2026-11-12",
        locationId: 1,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
        description: "A powerful live performance from Billie Eilish in New York City."
      },
      
      {
        id: 11,
        title: "Kendrick Lamar Grand National Tour",
        artist: "Kendrick Lamar",
        eventDate: "2026-10-22",
        locationId: 2,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
        description: "Kendrick Lamar headlines a major hip-hop show in Los Angeles."
      },
      {
        id: 12,
        title: "Travis Scott Utopia Tour",
        artist: "Travis Scott",
        eventDate: "2026-11-03",
        locationId: 2,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
        description: "A massive Travis Scott arena performance with immersive visuals."
      },
      
      {
        id: 13,
        title: "Ed Sheeran Mathematics Tour",
        artist: "Ed Sheeran",
        eventDate: "2026-10-10",
        locationId: 3,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
        description: "Ed Sheeran performs live in Chicago at the United Center."
      },
      {
        id: 14,
        title: "Post Malone Live",
        artist: "Post Malone",
        eventDate: "2026-11-19",
        locationId: 3,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80",
        description: "Post Malone performs his biggest hits in a Chicago arena show."
      },
      
      {
        id: 15,
        title: "Bad Bunny World Tour",
        artist: "Bad Bunny",
        eventDate: "2026-10-15",
        locationId: 4,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
        description: "Bad Bunny headlines a Latin music mega-show in Miami."
      },
      {
        id: 16,
        title: "Dua Lipa Future Nostalgia Live",
        artist: "Dua Lipa",
        eventDate: "2026-12-02",
        locationId: 4,
        ticketLink: "https://www.ticketmaster.com/",
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80",
        description: "Dua Lipa performs a high-energy pop show at Kaseya Center."
      }
  ]
  
  export default events
  