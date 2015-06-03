var wrapper = document.getElementById('wrapper');
var container = document.createElement('div');
var h1 = document.createElement("h1");
container.className = "show-container";
document.body.appendChild(wrapper);
wrapper.appendChild(container);
container.appendChild(h1);
var urlQuery = parseQueryString();
h1.innerHTML = "Reddit " + urlQuery.sub;
var xhr = new XMLHttpRequest();
xhr.open('get','http://www.reddit.com' + urlQuery.sub + ".json")
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);
  for (var i = 0; i < responseData.data.children.length; i++) {
    var a = document.createElement('a');
    a.innerHTML = responseData.data.children[i].data.title;
    a.href = responseData.data.children[i].data.url;
    var div = document.createElement('div');
    div.className = "box-style";
    var img = document.createElement('img');
    if (responseData.data.children[i].data.thumbnail === "self" || responseData.data.children[i].data.thumbnail === "nsfw"){
      img.src = "http://www.siegemedia.com/wp-content/uploads/2014/02/reddit-alien.png";
    } else {
    img.src = responseData.data.children[i].data.thumbnail;
    }
    var p = document.createElement('p');
    p.appendChild(img);
    div.appendChild(p);
    p.appendChild(a);
    container.appendChild(div);
  }
});
xhr.send(null);
