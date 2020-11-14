const base_url = "https://api.football-data.org/v2";
const api_token = "5b901ffb303f4ae78a3c64e253a5a278";
const leagueID = 2015;

const endpoint_standings = `${base_url}/competitions/${leagueID}/standings`;
const endpoint_teams = `${base_url}/competitions/${leagueID}/teams`;
const endpoint_detail_team = `${base_url}/teams/`;
const typeTeam = "team";
const storeNameTeam = "loved_team";


function status(response) {
  if (response.status !== 200) {
      console.log(" Error : " + response.status);
      return Promise.reject(new Error(response.statusText));
  } else {
      return Promise.resolve(response);
  }
}

function json(response) {
  return response.json();
}

function error(error) {
  console.log(" Error : " + error);
}

function fetchAPI(endpoint) {
  return fetch(endpoint, {
      headers: {
          "X-Auth-Token": api_token
      }
  });
}

function getStandings() {
  return new Promise(function(resolve, reject) {
    //   if ("caches" in window) {
    //       caches.match(endpoint_standings).then(function(response) {
    //           if (response) {
    //               response.json().then(function(data) {
    //                   getResultStandingsJSON(data);
    //                   resolve(data);
    //               });
    //           }
    //       });
    //   }
  
      fetchAPI(endpoint_standings)
          .then(status)
          .then(json)
          .then(function(data) {
              getResultStandingsJSON(data);
              resolve(data);
          })
  
      .catch(error);
  });
}


function getTeams() {
    return new Promise(function(resolve, reject) {
        // if ("caches" in window) {
        //     caches.match(endpoint_teams).then(function(response) {
        //         if (response) {
        //             response.json().then(function(data) {
        //                 getResultTeamsJSON(data);
        //                 resolve(data);
        //             });
        //         }
        //     });
        // }
    
        fetchAPI(endpoint_teams)
        .then(status)
        .then(json)
        .then(function(data) {
            getResultTeamsJSON(data);
            resolve(data);
        })

        .catch(error);
    });
}


// dipanggil saat see more di click
function getTeamsDetail(teamID) {
  return new Promise(function(resolve, reject) {
    //   if ("caches" in window) {
    //       caches.match(endpoint_detail_team + teamID).then(function(response) {
    //           if (response) {
    //               response.json().then(function(data) {
    //                   getResultTeamInfoJSON(data);
    //                   resolve(data);
    //               });
    //           }
    //       });
    //   }

      fetchAPI(endpoint_detail_team + teamID)
          .then(status)
          .then(json)
          .then(function(data) {
              getResultTeamInfoJSON(data);
              resolve(data);
          })
      .catch(error);
  });  
}


function getLove() {
  getFavorites(storeNameTeam).then(function(data) {
    getResultTeamFavoritesJSON(data);
  });
}

function getFavoriteById(ID, type) {
  getById(ID, storeNameTeam).then(function(data) {
    getResultTeamInfoJSON(data);
  });
}
