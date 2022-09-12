
function get_achievement(points) {
  let sum = points[0];
  sum = sum + points[1];
  sum = sum + points[2];
  sum = sum + points[3];
  sum = sum + points[4];

  $("#sum_indicate").text(sum);

  if (sum >= 400) {
    return "A"
  }
  else if (sum >= 300) {
    return "B";
  } else if (sum >= 200) {
    return "C";
  } else if (sum >= 100) {
    return "D";
  } else {
    return "E"
  }
}

let points = [0, 0, 0, 0, 0]

console.log(get_achievement(points));

$('#btn-evaluation').click(function () {
  $("#evaluation").text(get_achievement(points));
});
