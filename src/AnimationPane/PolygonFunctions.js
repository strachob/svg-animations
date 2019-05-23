function generatePolygonPoints(cx,cy,r,n,sDeg) {
    var res='';
    cx=parseInt(cx,10); cy=parseInt(cy,10); r=parseInt(r,10); n=parseInt(n,10); sDeg=parseInt(sDeg,10);
    if(!isNaN(cx) && !isNaN(cy) && !isNaN(r) && !isNaN(n) && !isNaN(sDeg) && n>2 && r>0) {
      var centerAng = 2*Math.PI / n;
      var startAng = toRadians(sDeg);
      var vertex = [];
      var ang,vx,vy;
      for(var i=0 ; i<n ; i++) {
        ang = startAng + (i*centerAng);
        vx = (cx + r*Math.cos(ang)).toFixed(2);
        vy = (cy - r*Math.sin(ang)).toFixed(2);
        vertex.push( vx+','+vy );
      }
      res=vertex.join(' ');
    }

    return res;
}

function generateMovedPolygonPoints(cx,cy,r,n,sDeg) {
    var res='';
    cx=parseInt(cx,10); cy=parseInt(cy,10); r=parseInt(r,10); n=parseInt(n,10); sDeg=parseInt(sDeg,10);
    if(!isNaN(cx) && !isNaN(cy) && !isNaN(r) && !isNaN(n) && !isNaN(sDeg) && n>2 && r>0) {
    var centerAng = 2*Math.PI / n;
    var startAng = toRadians(sDeg);
    var maxVx = 0.0;
    var ang,vx,vy;
    for(var i=0 ; i<n ; i++) {
        ang = startAng + (i*centerAng);
        vx = (cx + r*Math.cos(ang)).toFixed(2);
        if (vx > maxVx) {
            maxVx = vx;
        }
    }

    var vertex = [];
    for(i=0 ; i<n ; i++) {
        ang = startAng + (i*centerAng);
        vx = (cx + r*Math.cos(ang)).toFixed(2);
        var move = 100-(maxVx-vx);
        vx = move;
        vy = (cy - r*Math.sin(ang)).toFixed(2);
        vertex.push( vx+','+vy );
    }
    res=vertex.join(' ');
    }

    return res;
}

export {generatePolygonPoints, generateMovedPolygonPoints}

function toRadians(degs) {
    return Math.PI*degs/180;
}
