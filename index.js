
/**
 * Retina-enable the given `canvas`.
 *
 * @param {Canvas} canvas
 * @return {Canvas}
 * @api public
 */

module.exports = function(canvas){
  var ratio = window.devicePixelRatio || 1;
  canvas.style.width = canvas.width;
  canvas.style.height = canvas.height;
  canvas.width *= ratio;
  canvas.height *= ratio;
  var ctx = canvas.getContext('2d');
  ctx.scale(ratio, ratio);
  return canvas;
};