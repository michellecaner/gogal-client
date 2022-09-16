export const getAllTips = () => {
  return fetch("http://localhost:8000/traveltips", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("gg_token")}`
      }
  })
      .then(response => response.json())
}

export const getTipById = (tipId) => {
    return fetch(`http://localhost:8000/traveltips/${tipId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gg_token")}`
        }
    })
    .then(res => res.json())
  }