var button = document.createElement('button');
var textNode = document.createTextNode('Click Me!');
button.appendChild(textNode);
button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
componentHandler.upgradeElement(button);
document.getElementById('container').appendChild(button);

Array.prototype.forEach.call(document.querySelectorAll('.mdl-card__media'), function (el) {
  var link = el.querySelector('a');
  if (!link) {
    return;
  }
  var target = link.getAttribute('href');
  if (!target) {
    return;
  }
  el.addEventListener('click', function () {
    location.href = target;
  });
});
