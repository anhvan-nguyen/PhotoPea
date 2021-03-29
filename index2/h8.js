function h8(Y, S) {
  e9.call(this);
  if (Y == null)
      return;
  this.id = S;
  this.pC = Y;
  this.bB = null;
  this.j = P.w("div", "window " + S);
  this.a2S = null;
  this.ni = P.w("div", "whead");
  this.a1J = P.w("span", "wname");
  this.ni.appendChild(this.a1J);
  this.j.appendChild(this.ni);
  this.Cg = this.a8s.bind(this);
  this.z2 = this.ac5.bind(this);
  this.Va = this.a22.bind(this);
  P.qT(this.ni);
  P.aK(this.ni, this.Cg);
  this.Vp = P.w("span", "cross");
  this.ni.appendChild(this.Vp);
  h8.prototype.f.call(this);
  P.cM(this.Vp, this.VL.bind(this));
  this.body = P.w("div", "body");
  this.j.appendChild(this.body)
}
h8.prototype = new e9;
h8.prototype.VD = function() {
  return !1
}
;
h8.prototype.iu = function() {
  return !1
}
;
h8.prototype.f = function() {
  if (this.pC == null)
      return;
  this.a1J.textContent = gx.get(this.pC);
  var Y = PIMG.__cross == null ? "filter:invert(1);" : "";
  this.Vp.setAttribute("style", "background-image:url(" + PIMG.cross + ");" + Y)
}
;
h8.prototype.FF = function(Y, S, h, q, H) {}
;
h8.prototype.II = function(Y, S, h, q, H) {}
;
h8.prototype.vr = function(Y, S, h, q, H) {}
;
h8.prototype.mi = function(Y, S, h, q, H) {}
;
h8.prototype.dP = function(Y, S, h, q, H) {}
;
h8.prototype.jL = function(Y, S, h, q) {
  if (q.q(F.gm) && this.sf)
      this.sf();
  if (q.q(F.EO)) {
      var H = new _(P.E.A);
      H.NN = !0;
      U.Ka.Jl(q, H);
      if (H.data)
          S.B(H)
  }
}
;
h8.prototype.E8 = function(Y) {
  return !1
}
;
h8.prototype.UO = function(Y, S) {
  return !0
}
;
h8.prototype.kg = function(Y, S, h, q) {}
;
h8.prototype.rJ = function(Y, S) {}
;
h8.prototype.OV = function(Y, S) {
  return null
}
;
h8.prototype.aav = function(Y) {
  return this.a2S
}
;
h8.prototype.hD = function() {}
;
h8.prototype.close = function() {
  this.B(new _(P.E.Os))
}
;
h8.prototype.a8s = function(Y) {
  this.bB = P.WW(Y, this.j);
  P.y2(window, this.z2);
  P.cM(window, this.Va)
}
;
h8.prototype.ac5 = function(Y) {
  var S = this.j.parentNode
    , h = P.WW(Y, S)
    , q = Math.round(h.x - this.bB.x)
    , H = S.offsetTop + Math.max(0, Math.min(window.innerHeight - 36, Math.round(h.y - this.bB.y)));
  this.a2S = new aV(q,H);
  this.j.style.left = q + "px";
  this.j.style.top = H + "px"
}
;
h8.prototype.a22 = function(Y) {
  P.r$(window, this.z2);
  P.pp(window, this.Va)
}
;
h8.prototype.VL = function(Y) {
  this.B(new _("closebtn"));
  this.close()
}
;