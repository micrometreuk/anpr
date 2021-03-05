const $events = document.getElementById('events');
const newItem = (content) => {
const item = document.createElement('li');
item.innerText = content;
return item;
};
  
$.ajax({
    type:"GET",
    url:"http://134.209.21.147:9091/alpr/plates",
    contentType: "application/json",
    dataType: 'json',
    success: function(data) {
      console.log(data)  
      $events.appendChild(newItem(data));
    },
  });
