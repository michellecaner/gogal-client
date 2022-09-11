export const getAllTrips = () => {
  return fetch("http://localhost:8000/trips", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("gg_token")}`
      }
  })
      .then(response => response.json())
}

export const getTripById = (tripId) => {
  return fetch(`http://localhost:8000/trips/${tripId}`, {
      headers:{
          "Authorization": `Token ${localStorage.getItem("gg_token")}`
      }
  })
  .then(res => res.json())
}

export const createTrip = (newTrip) => {
  return fetch("http://localhost:8000/trips", {
      method: "POST",
      headers:{
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("gg_token")}`
      },
      body: JSON.stringify(newTrip)
  })
      .then(response => response.json())
}

export const updateTrip = trip => {
  return fetch(`http://localhost:8000/trips/${trip.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("gg_token")}`
    },
    body: JSON.stringify(trip)
  })
    .then(getAllTrips)
}

export const deleteTrip = (tripId) => {
  return fetch(`http://localhost:8000/trips/${tripId}`, {
      method: "DELETE",
      headers:{
          "Authorization": `Token ${localStorage.getItem("gg_token")}`
      }
      
  })
  .then(res => res.json())
}