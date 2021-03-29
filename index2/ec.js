function ec(Y, S, h) {
  e9.call(this);
  if (!S)
      return;
  this.Qo = 0;
  this.j = P.w("span", "fitem bbmenu");
  if (Y) {
      this.lT = Y;
      this.EJ = P.w("label", "flabel");
      this.EJ.textContent = Y + ":";
      this.j.appendChild(this.EJ)
  }
  this.p5 = [];
  this.Dl = null;
  this.Hm(S, h);
  this.i(0)
}
ec.prototype = new e9;
ec.prototype.D2 = function(Y) {
  this.lT = Y;
  this.f()
}
;
ec.prototype.f = function() {
  if (this.lT != null) {
      this.EJ.textContent = gx.get(this.lT) + ": "
  }
  for (var G = 0; G < this.p5.length; G++)
      this.p5[G].f()
}
;
ec.prototype.u = function() {
  return this.Qo
}
;
ec.prototype.Hm = function(Y, S) {
  while (this.p5.length > 0)
      this.j.removeChild(this.p5.pop().j);
  this.Dl = Y;
  for (var G = 0; G < Y.length; G++) {
      var h = new gP(Y[G],!1,S ? S[G] : null);
      // h.k("click", this.u3, this);
      this.j.appendChild(h.j);
      this.p5.push(h)
  }
  this.f()
}
;
ec.prototype.i = function(Y) {
  this.Qo = Y;
  for (var G = 0; G < this.p5.length; G++)
      this.p5[G].cQ();
  this.p5[Y].Fc()
}
;
ec.prototype.u3 = function(Y) {
  var G = this.p5.indexOf(Y.target);
  this.i(G);
  this.B(new _(P.E.L,!1))
}
;