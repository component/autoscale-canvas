
/**
 * Retina-enable the given `canvas`.
 *
 * @param {Canvas} canvas
 * @return {Canvas}
 * @api public
 */

module.exports = function(canvas){
  canvas.style.width = canvas.width;
  canvas.style.height = canvas.height;
  canvas.width *= devicePixelRatio;
  canvas.height *= devicePixelRatio;
  var ctx = canvas.getContext('2d');
  ctx.scale(2, 2);
  return canvas;
};