function gw(Y) {
  this.n3 = Y;
  this.S = 0;
  this.rE = 1;
  this.T = new aV(0,0);
  this.m8 = new aV(0,0);
  this.UZ = 0;
  this.L5 = [1, 1, 1];
  this.Eq = new W(0,0,1,1);
  this.a4T = new W(0,0,Y.d,Y.v);
  this.Tz = null;
  this.dK = null;
  this.pq = new Uint32Array(0);
  this.HW = null;
  this.Le = null;
  this.zd = t.m(0);
  this.bF = null;
  this.Ja = null
}

gw.prototype.x5 = function (Y) {
  var S = new d5
      , h = this.Eq
      , q = this.n3
      , H = Y ? this.rE : this.S
      , I = Y ? this.m8 : this.T
      , E = Math.round((h.d - q.d * H) / 2 + I.x)
      , d = Math.round((h.v - q.v * H) / 2 + I.y);
  S.translate(-E, -d);
  S.scale(1 / H, 1 / H);
  var B = q.d / 2
      , n = q.v / 2;
  S.translate(-B, -n);
  S.rotate(this.UZ);
  S.translate(B, n);
  return S
}
  ;
gw.prototype.Oi = function (Y) {
  var S = this.Eq
      , h = this.n3
      , q = Math.atan2(-Y.O, Y.R)
      , H = h.d / 2
      , I = h.v / 2;
  Y.translate(-H, -I);
  Y.rotate(-q);
  Y.translate(H, I);
  var E = 1 / Y.Fu();
  Y.scale(E, E);
  var d = -Y.TR
      , B = -Y.Un
      , n = Math.round(d - (S.d - h.d * E) / 2)
      , g = Math.round(B - (S.v - h.v * E) / 2);
  if (Math.abs(E - Math.round(E)) < 1e-6)
      E = Math.round(E);
  this.UZ = q;
  this.S = E;
  this.T = new aV(n, g)
}
  ;
gw.prototype.vl = function (Y, S) {
  var h = this.x5();
  return h.I_(new aV(Y, S))
}
  ;
gw.prototype.XV = function (Y, S) {
  var h = this.x5();
  h.fb();
  return h.I_(new aV(Y, S))
}