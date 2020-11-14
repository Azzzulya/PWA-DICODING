function cekDatabase(idb) {
  var dbPromised = idb.open("League-One", 1, function(upgradeDb){
    if(!upgradeDb.objectStoreNames.contains(storeNameTeam)){
      var teamsObjectStore = upgradeDb.createObjectStore(storeNameTeam, {
        keypath: "id"
      });

      teamsObjectStore.createIndex("team_name", "name", {
        unique: false
      });

    };
  });

  return dbPromised;
}


function loveTeam(data, storeNameTeam){
  var dataPrimaryKey;
  dataPrimaryKey = data.id

  cekDatabase(idb).then(function(db){
    var tx = db.transaction(storeNameTeam, "readwrite");
    var store = tx.objectStore(storeNameTeam);
    store.put(data, dataPrimaryKey);

    return tx.complete;
  }).then(function(){
    M.toast({
      html: "Berhasil ditambahkan ke favorite",
    })
  })

}

function removeLovedTeam(ID, storeNameTeam) {
  console.log(ID + " " + storeNameTeam);
  let imSure = confirm(`Are you sure, you want remove this data from loved club ?`)
  if(imSure){
    cekDatabase(idb)
        .then(function(db) {
            var tx = db.transaction(storeNameTeam, "readwrite");
            var store = tx.objectStore(storeNameTeam);

            store.delete(ID);

            return tx.complete;
        })
        .then(function() {
            M.toast({
                html: "Berhasil dihapus dari favorite",
            });
        });

    setTimeout(() => {
      location.reload();
    }, 1000);
  
  }
}

function getById(ID, storeNameTeam) {
  return new Promise(function(resolve, reject) {
      cekDatabase(idb)
          .then(function(db) {
              var tx = db.transaction(storeNameTeam, "readonly");
              var store = tx.objectStore(storeNameTeam);

              return store.get(ID);
          })
          .then(function(data) {
              resolve(data);
          });
  });
}

function getFavorites(storeNameTeam) {
  return new Promise(function(resolve, reject) {
      cekDatabase(idb)
          .then(function(db) {
              var tx = db.transaction(storeNameTeam, "readonly");
              var store = tx.objectStore(storeNameTeam);
              
              return store.getAll();
          })
          .then(function(data) {
              resolve(data);
          });
  });
}
