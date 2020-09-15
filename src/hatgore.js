export default function(part) {
  let {
    options,
    Point,
    Path,
    points,
    paths,
    Snippet,
    snippets,
    complete,
    sa,
    paperless,
    macro
  } = part.shorthand()

  //let w = 500 * options.size
  let w=95, h=148, m=10
  /*
  
    points.topLeft = new Point(0, 0)
  points.topRight = new Point(w, 0)
  points.bottomLeft = new Point(0, w / 2)
  points.bottomRight = new Point(w, w / 2)
    */ 

    //here we have the orig size of our drawing box 95x148 plus 10mm margins
  points.topLeft = new Point(0-m, 0-m)
  points.topRight = new Point(m+w, 0-m)
  points.bottomLeft = new Point(0-m, m+h)
  points.bottomRight = new Point(m+w, m+h)

//let's get points of our gore starting with bottom right
points.goreBR = new Point(95,148)
points.goreBL = new Point(0,148)
points.goreTC = new Point(47.5,0)  //47.5 is half of width

//here I'm defining a height above
points.goreLeftLine = new Point(0,-55.5)
//don't think I need this
// had to move the cp closer in
//points.goreLeftCP = new Point(95,-55.5)

points.goreLwrLeftCP = new Point(m+(w*.025),(47.5))   //try X= the y= 47.5 is width 
//doesn't seem flipable


//points.goreLwrRightCP = new Point(points.goreLwrLeftCP.flipX());
//points.goreLwrRightCP = new Point((m+(w*.075),(47.5)))

//let's try to pick up this cp thing from a lower left control point... at 0,55.5
//lessee baout that curve  //this high thing didn't really work
/* paths.highXline = new Path()
.move(points.goreLeftLine)
.line(points.goreLeftCP)
 */
//the original triangle
/* paths.hatgore = new Path()
  .move(points.goreBR)
  .line(points.goreBL)
  .line(points.goreTC)
  .close()
 */
/*

  /* // example!!!
    paths.line = new Path()
    .move(points.from)
    .curve_(points.cp1, points.to)
    .attr("data-text", "Path.curve_()")
    .attr("data-text-class", "text-sm center fill-note");
  
  */
 
  /*
paths.line = new Path()
  .move(points.goreBL)
  .curve_(points.goreLwrLeftCP,points.goreTC) // with the underscore after, it makes first point and anchor of CP the same

/*
paths.line = new Path()
  .move(points.goreBL)
  ._curve(points.goreLwrLeftCP,points.goreTC) //AHA!!!  with the underscore first, it makes the last point (second param) the anchor point
*/
//

paths.lineL = new Path()
.move(points.goreBR)  
.line(points.goreBL)
  ._curve(points.goreLwrLeftCP,points.goreTC)
  //.line(points.goreBR)

  //points.goreLwrLeftCP = new Point(m+(w*.025),(47.5))
  points.goreLwrRightCP = new Point(82.62,47.5)

 paths.lineR = new Path()
.move(points.goreTC)
.curve_(points.goreLwrRightCP,points.goreBR) 



  //.move(points.goreBR)
 //  ._curve(points.goreLwrRightCP,points.goreTC)
    //.line(points.goreLwrRightCP)
///   .line(points.goreTC)


  paths.seam = new Path()
    .move(points.topLeft)
    .line(points.bottomLeft)
    .line(points.bottomRight)
    .line(points.topRight)
    .line(points.topLeft)
    .close()
    .attr('class', 'fabric')

  // Complete?
  if (complete) {
  //  points.logo = points.topLeft.shiftFractionTowards(points.bottomRight, 0.5)
   // snippets.logo = new Snippet('logo', points.logo)
    //points.text = points.logo
     // .shift(-90, w / 8)
     // .attr('data-text', 'hello')
     // .attr('data-text-class', 'center')

    if (sa) {
      paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }
  }

  // Paperless?
  if (paperless) {
    macro('hd', {
      from: points.bottomLeft,
      to: points.bottomRight,
      y: points.bottomLeft.y + sa + 15
    })
    macro('vd', {
      from: points.bottomRight,
      to: points.topRight,
      x: points.topRight.x + sa + 15
    })
  }

  return part
}
