function dl(Y, S, h, q) {
  if (q == null)
      q = 16;
  var H = dl.mX
    , I = H.getContext("2d")
    , E = q >>> 1;
  H.width = H.height = q;
  var d = [];
  for (var G = 0; G < S.length; G++) {
      if (S[G] == "checker") {
          I.fillStyle = "white";
          I.fillRect(0, 0, q, q);
          I.fillStyle = "#bbbbbb";
          I.fillRect(E, 0, E, E);
          I.fillRect(0, E, E, E)
      } else if (S[G].startsWith("#")) {
          I.fillStyle = S[G];
          I.fillRect(0, 0, q, q)
      }
      if (S[G] == "checker" || S[G].startsWith("#"))
          d.push("<img src=\"" + H.toDataURL() + "\" />");
      else
          d.push("<img src=\"" + S[G] + "\" class=\"autoscale gsicon\" />")
  }
  ec.call(this, Y, d, h)
}
dl.prototype = new ec;
dl.mX = P.w("canvas");