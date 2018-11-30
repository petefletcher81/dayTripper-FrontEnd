const DB_URL = "https://xprfmsf0pb.execute-api.eu-west-1.amazonaws.com/dev";

export const createUserProfile = username => {
  console.log(username);
  return fetch(`${DB_URL}/createUser`, {
    method: `POST`,
    headers: {
      Accept: `application/json`,
      "Content-Type": `application/json`
    },
    body: JSON.stringify({ username: username })
  })
    .then(data => data)
    .catch(error => console.log(error));
};

export const getUserProfile = username => {
  return fetch(`${DB_URL}/getUser?username=${username}`)
    .then(data => data.json())
    .then(data => JSON.parse(data).Item)
    .catch(error => console.log(error));
};

export const updateUserPreferences = (username, preferences) => {
  return fetch(`${DB_URL}/updateUserProfile`, {
    method: `PATCH`,
    headers: {
      Accept: `application/json`,
      "Content-Type": `application/json`
    },
    body: JSON.stringify({ username: username, preferences: preferences })
  })
    .then(data => data.json())
    .then(data => JSON.parse(data))
    .catch(error => console.log(error));
};

export const getAttractions = (username, city) => {
  return fetch(`${DB_URL}/apiCall?username=${username}&city=${city}`)
    .then(data => data.json())
    .then(data => JSON.parse(data))
    .catch(error => console.log(error));
};

export const deleteUser = username => {};
