const mongooseconnection = require("mongoose");
mongooseconnection.connect("mongodb://mongo:27017/docker-node-mongo", {
    useNewUrlParser: true
});
const connection = mongooseconnection.connection;
connection.once("open", function() {
    console.log("MongoDB connected successfully");
    connection.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.log(err);
        } else {
            for (i = 0; i < names.length; i++) {
                console.log(names[i].name);
                if ((names[i].name = "processed")) {
                    console.log("Processed Collection Exists in DB");
                    mongooseconnection.connection.db.dropCollection(
                        "processed",
                        function(err, result) {
                            console.log("Processed droped");
                        }
                    );
                    console.log("Processed Collection No Longer Available");
                } else {
                    console.log("Processed doesn't exist");
                }
            }
        }
    });
});

