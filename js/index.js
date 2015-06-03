var wrapper = document.getElementById('wrapper');
var container = document.createElement('div');
var h1 = document.createElement("h1");
container.className = "container";
document.body.appendChild(wrapper);
wrapper.appendChild(container);
container.appendChild(h1);
h1.innerHTML = "Subreddits of Reddit";
var urlShow = '/show.html?sub=';
var xhr = new XMLHttpRequest();
xhr.open('get','http://www.reddit.com/subreddits.json')
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);
  for (var i = 0; i < responseData.data.children.length; i++) {
    var a = document.createElement('a');
    a.innerHTML = responseData.data.children[i].data.title;
    a.href = urlShow + responseData.data.children[i].data.url;
    var h2 = document.createElement('h2');
    h2.appendChild(a);
    container.appendChild(h2);
    var p = document.createElement("p")
    p.innerHTML = responseData.data.children[i].data.header_title
    h2.appendChild(p);
  }
});
xhr.send(null);
