function findLongestCommonSubsequence(word1, word2) {
  const rows = word1.split('');
  const cols = word2.split('');
  const grid = Array.from({ length: rows.length }, e => Array(cols.length).fill(0));
  let result = 0;

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (rows[i] == cols[j]) {
        if (i && j) {
          grid[i][j] = grid[i - 1][j - 1] + 1;
        } else {
          grid[i][j] = 1;
        }
      }
      else {
        grid[i][j] = 0;
      }
      if(grid[i][j] > result) {
        result = grid[i][j] ;
      }
    }
  }
  return result;
}

console.log(findLongestCommonSubsequence('blue', 'clues'));