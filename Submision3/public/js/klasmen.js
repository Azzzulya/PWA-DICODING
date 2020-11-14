function getResultStandingsJSON(data) {

  var tableStandingsHtml = "";
  data = data.standings[0]
  data.table.forEach(function (team) {

      var TeamImage = team.team.crestUrl
      TeamImage = TeamImage.replace(/^http:\/\//i, 'https://') 
      tableStandingsHtml += `
                <tr>
                    <td>${team.position}</td>
                    <td center-align>
                      <img src="${TeamImage}" alt="${team.team.name}" class="responsive-img center-align" width="30" >
                    </td>
                    <td>${team.team.name}</td>
                    <td>${team.playedGames}</td>
                    <td>${team.won}</td>
                    <td>${team.draw}</td>
                    <td>${team.lost}</td>
                    <td>${team.goalsFor}</td>
                    <td>${team.goalsAgainst}</td>
                    <td>${team.goalDifference}</td>
                    <td>${team.points}</td>
                </tr>
      `;
  });
  document.getElementById('progress').style.display = 'none'
  document.getElementById("standings").innerHTML = tableStandingsHtml;
}
