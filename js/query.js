var parseQueryString = function(queryString) {
var query = document.location.search;
var objNew = {};
query = query.replace("?", "");
query = query.split("&");
for(var i = 0; i < query.length; i++) {
    var splitArray = query[i].split("=");
    objNew[splitArray[0]] = splitArray[1];
}
return objNew;
};
