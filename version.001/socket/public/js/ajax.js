function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('alprs');
const url = 'http://134.209.21.147:9091/alpr/plates';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let alprs = data;
  console.log(data);
  return alprs.map(function(alprs) {
    let li = createNode('li');
    let span = createNode('span');
    span.innerHTML = `${alprs.plate}`;
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
