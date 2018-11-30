const DB_URL = "https://xprfmsf0pb.execute-api.eu-west-1.amazonaws.com/dev";

export const createUserProfile = username => {
  return fetch(`${DB_URL}/createUser`, {
    method: `POST`,
    body: JSON.stringify({ username: username })
  })
    .then(data => data.json())
    .then(data => JSON.parse(data))
    .catch(error => console.log(error));
};

export const getUserProfile = username => {
  return fetch(`${DB_URL}/getUser?username=${username}`)
    .then(data => data.json())
    .then(data => JSON.parse(data))
    .catch(error => console.log(error));
};

export const updateUserPreferences = (username, preferences) => {
  return fetch(`${DB_URL}/updateUserProfile`, {
    method: `UPDATE`,
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

// export const getDirections = async (startLoc, destinationLoc) => {
//   console.log(startLoc);
//   return (
//     fetch(
//       `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&mode=walking&key=${
//         GOOGLEAPI.GOOGLEDIR
//       }`
//     )
//       .then(response => response.json())
//       //decodes the response
//       .then(responseJson => {
//         let points = Polyline.decode(
//           responseJson.routes[0].overview_polyline.points
//         );
//         let coords = points.map((point, index) => {
//           return {
//             latitude: point[0],
//             longitude: point[1]
//           };
//         });

//         const newCoordsArray = [...this.state.coordsArray, coords];
//         this.setState({
//           coordsArray: newCoordsArray
//         });

//         return newCoordsArray;
//       })
//       .catch(error => {
//         console.error(error);
//       })
//   );
// };
