
function drawTree() {
  for(var i = 1; i<=5 ; i++) {
    var star= '';
      for(var j=0; j<i; j++) {
        star += '*';
        }
        console.log(star);
      }
}
drawTree(5);
