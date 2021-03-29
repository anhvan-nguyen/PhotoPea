function ex() {
  this.V_ = {};
  this.m4 = {}
}
ex.wf = [];
ex.$u = function (Y) {
  var S = ex.wf;
  if (S.length != 0) {
    var h = new _(P.E.Tx);
    for (var G = 0; G < S.length; G++)
      S[G].B(h)
  }
  window.requestAnimationFrame(ex.$u)
}
  ;
window.requestAnimationFrame(ex.$u);
ex.prototype.dY = function (Y) {
  var S = this.V_[Y];
  if (S == null)
    return !1;
  return S.length > 0
}
  ;
ex.prototype.addEventListener = function (Y, S) {
  this.k(Y, S, null)
}
  ;
ex.prototype.k = function (Y, S, h) {
  if (this.V_[Y] == null) {
    this.V_[Y] = [];
    this.m4[Y] = []
  }
  this.V_[Y].push(S);
  this.m4[Y].push(h);
  if (Y == P.E.Tx) {
    var q = ex.wf;
    if (q.indexOf(this) == -1)
      q.push(this)
  }
}
  ;
ex.prototype.removeEventListener = function (Y, S) {
  var h = this.V_[Y];
  if (h == null)
    return;
  var q = h.indexOf(S);
  if (q < 0)
    return;
  var H = this.m4[Y];
  h.splice(q, 1);
  H.splice(q, 1);
  if (Y == P.E.Tx && h.length == 0) {
    var I = ex.wf;
    I.splice(I.indexOf(this), 1)
  }
}
  ;
ex.prototype.B = function (Y) {
  Y.currentTarget = this;
  if (Y.target == null)
    Y.target = this;
  var S = this.V_[Y.type];
  if (S == null)
    return;
  var h = this.m4[Y.type];
  for (var G = 0; G < S.length; G++) {
    if (h[G] == null)
      S[G](Y);
    else
      S[G].call(h[G], Y)
  }
}
  ;