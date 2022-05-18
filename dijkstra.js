const graph = {};
graph['start'] = {
  a: 6,
  b: 2,
};
graph['a'] = {
  fin: 1,
};
graph['b'] = {
  a: 3,
  fin: 5,
};
graph['fin'] = {};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents = {
  a: 'start',
  b: 'start',
  fin: null,
};

let processeds = [];

//Find the lowest-cost node that you haven’t processed yet.
function find_lowest_cost_node() {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;

  for (let node in costs) {
    let cost = costs[node];
    if ((cost < lowest_cost) && (processeds.indexOf(node) === -1)) {
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  }
  return lowest_cost_node;
}

function calculate_final_path() {
   
    let path = ['fin'];
    let nextParent = parents['fin'];
    while (nextParent !== 'start') {
        path.unshift(nextParent);
        nextParent = parents[nextParent];
    }
    path.unshift('start');
    return path.join(' => ');
}

// step 1: Find the “cheapest” node.
let node = find_lowest_cost_node();
while (node) {
  // step 2: Update the costs of the neighbors of this node.
  const cost = costs[node];
  const neighbors = graph[node]; // gives another graph

  Object.keys(neighbors).forEach((n) => {
    const newCost = cost + neighbors[n];
    if (costs[n] > newCost) {
      costs[n] = newCost; // update the cost for this node.
      parents[n] = node; // update the parent for this node.
    }
  });

  // Mark the node as processed.
  processeds.push(node);
  // step 3: Repeat until you’ve done this for every node in the graph
  node = find_lowest_cost_node();
}

console.log('costs: ', costs);

console.log('parents:', parents);

console.log('lowest code to go to finish will be: ', costs['fin']);

// step 4: Calculate the final path.

console.log('final path:', calculate_final_path());