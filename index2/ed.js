function ed(Y, S, h, q, H, I, E, d, B) {
  cI.call(this, Y, S, h, q, H, !0, I, B);
  P.xv(this.j, "rangedropinput");
  this.j.appendChild(this.EJ);
  this.yl.setAttribute("style", "width:" + (d ? d : 3.3) + "em");
  this.j.appendChild(this.yl);
  this.akF = P.w("span", "rangecont");
  this.akF.appendChild(this.LV);
  this.$G = P.w("button");
  this.$G.innerHTML = "\u25BC";
  P.aK(this.$G, this.a2D.bind(this));
  if (E != !0)
      this.j.appendChild(this.$G);
  this.ES = new e9;
  this.ES.j = this.akF
}
ed.prototype = new cI;
ed.prototype.a2D = function(Y) {
  if (P.Ap(this.ES.j))
      return;
  Y.stopPropagation();
  var S = this.j.getBoundingClientRect();
  this.LV.setAttribute("style", "width:" + S.width + "px;");
  var h = new _(P.E.P,!0);
  h.data = {
      X: P.U.pa,
      FN: this.ES,
      x: S.left,
      y: S.top + S.height
  };
  this.B(h)
}
;