export const getCategories = () => {
  return fetch("http://localhost:8000/categories", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("gg_token")}`
    }
  })
    .then(response => response.json())
}

export const getCategoryById = (categoryId) => {
  return fetch(`http://localhost:8000/categories/${categoryId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("gg_token")}`
    }
  })
    .then(response => response.json())
}