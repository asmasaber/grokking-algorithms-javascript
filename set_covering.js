let states_needed = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {}
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

const final_stations = new Set();

// go through every station and pick the one that covers the most uncovered states.

while (states_needed.size) {
  let best_station = null; // that covers the most uncovered states
  let states_covered = new Set();

  for (let station in stations) {
     const states_for_station = stations[station];
    covered = new Set([...states_needed].filter(x => states_for_station.has(x))); // Intersection
    if (covered.size > states_covered.size){
      best_station = station;
      states_covered = covered;
    }
  }

  states_needed = new Set([...states_needed].filter(x => !states_covered.has(x))); // Difference
  final_stations.add(best_station);
}


console.log(final_stations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }

