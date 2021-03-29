function gR(Y) {
  h4.call(this, Y, !1, "brushbutton nopadding", 16.6, 10, iD.e8, !0);
  this.lj = new b7([12, 14, 0],1,1e3," px",0,!0);
  this.lj.k(P.E.L, this.nQ, this);
  this.dE.appendChild(this.lj.j);
  this.jR = new b7([12, 17],0,100,"%");
  this.jR.k(P.E.L, this.nQ, this);
  this.dE.appendChild(this.jR.j)
}
gR.prototype = new h4;
gR.prototype.rP = function() {
  var Y = ["pencil", "trees"];
  for (var G = 0; G < Y.length; G++)
      Y[G] = "brushes/" + Y[G] + ".abr";
  return Y
}
;
gR.prototype.L0 = function(Y) {
  var S = this.j.getBoundingClientRect();
  this.c7(S.left, S.top + S.height)
}
;
gR.prototype.c7 = function(Y, S) {
  this.Xr();
  var h = new _(P.E.P,!0);
  h.data = {
      X: P.U.pa,
      FN: this.KM,
      x: Y,
      y: S
  };
  this.B(h)
}
;
gR.prototype.i = function(Y, S, h) {
  this.ll = JSON.parse(JSON.stringify(Y));
  var q = Math.floor(20 * P.M())
    , H = Math.floor(36 * P.M())
    , I = Math.floor(24 * P.M())
    , E = fU.PG(Y, S, h, q, I, H);
  this.nr.setAttribute("src", E);
  P.fs(this.nr, H, I);
  var d = Y.Brsh.v;
  this.lj.i(d.Dmtr.v.val);
  if (d.Hrdn != null) {
      this.jR.tW();
      this.jR.i(d.Hrdn.v.val)
  } else
      this.jR.f4();
  this.BH.ca(-1)
}
;
gR.prototype.wB = function() {
  return {
      list: [{
          t: "Objc",
          v: this.u()
      }],
      r0: [],
      SR: []
  }
}
;
gR.prototype.u = function() {
  return this.ll
}
;
gR.prototype.Xr = function() {
  if (!this.vG)
      return;
  var Y = []
    , S = []
    , h = this.x1
    , q = Math.floor(33 * P.M())
    , H = Math.floor(40 * P.M());
  for (var G = 0; G < h.list.length; G++) {
      var I = h.list[G].v
        , E = fU.PG(I, h.r0, h.SR, q, H);
      Y.push(E);
      S.push(I.Nm.v.split("=").pop())
  }
  this.BH.sc(Y, S, q, H);
  this.vG = !1
}
;
gR.prototype.ug = function(Y) {
  var S = this.x1;
  this.i(S.list[this.BH.u()].v, S.r0, S.SR);
  this.B(new _(P.E.L))
}
;
gR.prototype.f = function() {
  h4.prototype.f.call(this);
  this.lj.f();
  this.jR.f()
}
;
gR.prototype.nQ = function(Y) {
  var S = this.x1
    , h = this.ll;
  h.Brsh.v.Dmtr.v.val = this.lj.u();
  if (h.Brsh.v.Hrdn != null)
      h.Brsh.v.Hrdn.v.val = this.jR.u();
  this.i(h, S.r0, S.SR);
  this.B(new _(P.E.L))
}
;