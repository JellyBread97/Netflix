async function onFormSubmit(event) {
  event.preventDefault();

  const newMovie = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#genre").value,
    imageUrl: document.querySelector("#imageUrl").value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGFmZGQ0YmUzZDAwMTU4NDYwYjMiLCJpYXQiOjE2NjgxNzAwOTksImV4cCI6MTY2OTM3OTY5OX0.08FdlJbQUIGK31EzdcHvCwcvGvfOH9AfkKqNLIIYU7w",
      "Content-Type": "application/json",
    },
  };

  try {
    const endpoint = "https://striveschool-api.herokuapp.com/api/movies/";
    const response = await fetch(endpoint, options);
    if (response.ok) {
      alert("New movie has been succesfully added!");
    } else {
      throw new Error("Oops, something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
}
