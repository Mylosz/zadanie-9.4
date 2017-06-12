var tree = '';

function drawTree(tree) {
  for(var i = 1; i<=tree ; i++) {
    var star= '';
      for(var j=0; j<i; j++) {
        star += '*';
        }
        console.log(star);
      }
}
drawTree(5);
