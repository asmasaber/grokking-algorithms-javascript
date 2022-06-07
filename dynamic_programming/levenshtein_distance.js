function edit_distance(target, source) {
  if (!source.length && !target.length) {
    return 0;
  }
  if (!source.length) {
    return target.length
  }
  if (!target.length) {
    return source.length
  }
  const rows = source.split('');
  const cols = target.split('');
  const grid = Array.from({ length: rows.length + 1 }, e => Array(cols.length + 1).fill(0));

  for (let i = 0; i <= cols.length; i++) {
    grid[0][i] = i;
  }

  for (let i = 0; i <= rows.length; i++) {
    grid[i][0] = i;
  }

  for (let i = 1; i <= rows.length; i++) {
    for (let j = 1; j <= cols.length; j++) {
      const addCost = grid[i - 1][j] + 1;
      const deleteCost = grid[i][j - 1] + 1;
      const replaceCost = rows[i - 1] === cols[j - 1] ? grid[i - 1][j - 1] : grid[i - 1][j - 1] + 1;
      grid[i][j] = Math.min(
        addCost,
        deleteCost,
        replaceCost
      );
    }
  }

  console.log('grid', grid);
  return grid[rows.length][cols.length];
}

console.log(edit_distance('zoologicoarchaeologist', 'zoogeologist'));