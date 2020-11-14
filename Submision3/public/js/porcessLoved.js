document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var teamID = Number(urlParams.get("id"));
  console.log(teamID)
  var isFromSaved = urlParams.get("saved");

  var btnFav = document.getElementById("fabFavorite");
  
  if (isFromSaved) {
      btnFav.style.display = "none";
      getFavoriteById(teamID, "team");
  } else {
      var item = getTeamsDetail(teamID);
  }

  btnFav.onclick = function() {
      item.then(function(team) {
        loveTeam(team, "loved_team");
      });
  };
});