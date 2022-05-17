graph = {}
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy", "th!!!1m"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = ["thddsgom"]
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

function person_is_seller(name) {
  return name[name.length - 1] === 'm';
}

function search(startPoint) {
  let search_queue = [];
  search_queue = search_queue.concat(graph[startPoint]);
  let searchedItems = [];

  while(search_queue.length) {
    let current = search_queue.shift();
    if(searchedItems.indexOf(current) === -1) {
      if(person_is_seller(current)) {
        console.log(`${current} is a mango seller!`)
        return true;
      } else {
        search_queue = search_queue.concat(graph[current])
         searchedItems = searchedItems.concat(current)
      }
    }
  }
  return false;
}

console.log(search('you'));