// Generated by CoffeeScript 1.4.0
var handler, label, parent, resolver, services;

services = {
  "facebook object": function(id) {
    return "https://graph.facebook.com/" + id;
  },
  "sheldon node": function(id) {
    return "http://primus.sheldon.moviepilot.com/nodes/" + id;
  },
  "mp.de movie": function(id) {
    return "http://moviepilot.de/movies/" + id;
  },
  "mp.com movie": function(id) {
    return "http://moviepilot.com/movies/" + id;
  }
};

handler = function(e, service) {
  var fn;
  fn = services[e.menuItemId];
  return chrome.tabs.create({
    url: fn(e.selectionText)
  });
};

parent = chrome.contextMenus.create({
  contexts: ['selection'],
  title: "Open as",
  id: "oaparent"
});

for (label in services) {
  resolver = services[label];
  chrome.contextMenus.create({
    contexts: ['selection'],
    title: label,
    id: label,
    onclick: handler,
    parentId: 'oaparent'
  });
}
