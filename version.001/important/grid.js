        $ (function () {

	    $("#jsGrid").jsGrid({
                    width: "100%",
                    inserting: true,
                    fields: [
                        {title: "Name", name: "name", type: "text", width: 50},
                        {type: "control"}
                    ],
                    controller: {
                        insertItem: function (plate) {
                            return $ .ajax ({
                                type: "GET",
                                url: "/alpr/api",
                                data: plate
                            });
                        },
                        deleteItem: function (item) {
                            return $ .ajax ({
                                type: "DELETE",
                                url: "/ delete",
                                data: item
                            });
                        }
                    }   
                });
                });
    
