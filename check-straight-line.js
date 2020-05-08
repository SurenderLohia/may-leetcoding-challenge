/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length < 3) {
    return true;
  }

  const m =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);
  const c = coordinates[0][1] - m * coordinates[0][0];

  for (let i = 2; i < coordinates.length; i++) {
    const y = m * coordinates[i][0] + c;
    if (y !== coordinates[i][1]) {
      return false;
    }
  }
  return true;
};

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
checkStraightLine(coordinates);
