fetch('http://134.209.21.147:9091/alpr/plates')
  .then(response => response.json())
  .then(data => console.log(data));

fetch("http://134.209.21.147:9091/alpr/plates").then(function(response) {
return  response.json()
}).then(function(data){
console.log(data);
});

