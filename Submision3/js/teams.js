function getResultTeamsJSON(data){
  var tableTeamsHtml = " ";
  data = data.teams;
  data.forEach(function(team){
    // team = JSON.parse(JSON.stringify(teams).replace(/^http:\/\//i, 'https://'));  
    var TeamImage = team.crestUrl
    TeamImage = TeamImage.replace(/^http:\/\//i, 'https://')
   
    tableTeamsHtml += 
    `
    <div class="col s12 m6 l4">
     <div class="card" style="max-height: max-height: 600px;">
       <div class="card-content row valign-wrapper" style=" min-height: 140px;">
          <div class="col s4" class="logo-team">
              <img src="${TeamImage}" alt="${team.name}" class="responsive-img center-align" width="100%" >
                </div>
                <div class="col s8 information-team">
                    <span class="badge-blue"><strong>${team.name}</strong></span>
                    <br>
                    <span>${team.venue}</span>
                    </div>
        </div>
        <div class="card-action right-align">
          <a href="./detailTeam.html?id=${team.id}" class="waves-effect waves-light btn indigo darken-4  float-right">See More</a>
        </div>
      </div>
    </div>
    
    `;
  });
  document.getElementById('progress').style.display = 'none'
  document.getElementById('teams').innerHTML = tableTeamsHtml
}

function getResultTeamInfoJSON(data){
  // data = JSON.parse(JSON.stringify(data).replace(/^http:\/\//i, 'https://'));
  var TeamImage = data.crestUrl
    TeamImage = TeamImage.replace(/^http:\/\//i, 'https://')

    var tableOverviewHtml = "";

    tableOverviewHtml += `
        <tr>
            <td style="font-weight: bold;">Name</td>
            <td>${data.name}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Short Name</td>
            <td>${data.shortName}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Founded</td>
            <td>${data.founded}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Three Letter Abbreviation</td>
            <td>${data.tla}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Address</td>
            <td>${data.address}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Phone</td>
            <td>${data.phone}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Website</td>
            <td><a href="${data.website}" target="_blank">${data.website}</a></td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Email</td>
            <td><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Club Colors</td>
            <td>${data.clubColors}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Venue</td>
            <td>${data.venue}</td>
        </tr>
    `;

    document.getElementById("crestUrl").src = TeamImage;
    document.getElementById("nameHeader").innerHTML = data.name;
    document.getElementById("preloader").innerHTML = "";
    document.getElementById("tableOverview").innerHTML = tableOverviewHtml;
}


function getResultTeamFavoritesJSON(data) {
  // data = JSON.parse(JSON.stringify(data).replace(/^http:\/\//i, 'https://'));
  // console.log("loved", data)
  var tableTeamFavoriteHtml = "";

  data.forEach(function(team) {
    var TeamImage = team.crestUrl
    TeamImage = TeamImage.replace(/^http:\/\//i, 'https://')

      tableTeamFavoriteHtml += 
      `
      <div class="col s12">
      <div class="card">
      <div class="card-content row valign-wrapper">
          <div class="col s4" class="logo-team">
              <img src="${TeamImage}" alt="${team.name}" class="responsive-img center-align" width="80%" >
          </div>
          <div class="col s8 information-team">
          <h3 class="badge-blue"><strong>${team.name}</strong></h3>
          <h3>${team.venue}</h3>
          </div>
      </div>
      <div class="card-action right-align">
          <a class="waves-effect waves-light btn-small red" onclick="removeLovedTeam(${team.id}, 'loved_team')">
              Remove
          </a>
      </div>
      </div>
    </div>
    `;
  });

  document.getElementById('progress').style.display = 'none'
  document.getElementById("lovedTeams").innerHTML = tableTeamFavoriteHtml;
}