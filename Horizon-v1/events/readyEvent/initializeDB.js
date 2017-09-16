function initializeDB(rethinkdb){
    rethinkdb.connect({host: 'localhost'}, (error, conn) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log('Connection Successful.');
        global.connection = conn;
      });
}

module.exports = initializeDB;