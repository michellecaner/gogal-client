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