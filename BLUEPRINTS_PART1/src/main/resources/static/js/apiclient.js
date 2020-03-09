
apiclient = (function() {

    return {
        getBlueprintsByAuthor: function(author, callback) {
            jQuery.get({
                dataType: "json",
                url: "http://localhost:8080/blueprints/"+author,
                success: function (data) {
                    callback(data)
                }
            });
        },
        getBlueprintsByNameAndAuthor: function( name, author, callback) {

            jQuery.get({
                dataType: "json",
                url: "http://localhost:8080/blueprints/"+author+"/"+name,
                success: function (data) {
                    callback(data)
                }
            });

        }
    };
})();