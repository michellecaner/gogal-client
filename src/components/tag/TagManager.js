export const getTags = () => {
  return fetch("http://localhost:8000/tags", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("gg_token")}`
    }
  })
    .then(response => response.json())
}

export const getTagById = (tagId) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("gg_token")}`
    }
  })
    .then(response => response.json())
}