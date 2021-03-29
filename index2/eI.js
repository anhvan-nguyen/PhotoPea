function eI(Y, S) {
  e9.call(this);
  this.aa = [];
  this.Qo = -1;
  this.am3 = Y;
  this.qq = S;
  this.tT = 0;
  this.q7 = null;
  this.kW = new aV(0,0);
  if (S != null) {
      this.BW = new gV([{
          name: [6, 37]
      }, {
          name: [5, 4]
      }]);
      this.BW.parent = this;
      // this.BW.k("select", this.mG, this)
  }
  this.j = P.w("div", "imageset scrollable");
  this.j.addEventListener("contextmenu", P.sS, !1)
}
eI.prototype = new e9;
eI.prototype.f = function() {
  if (this.BW)
      this.BW.f()
}
;
eI.prototype.mG = function(Y) {
  var G = this.BW.Iv()[0]
    , S = new _(P.E.P,!0)
    , h = {
      X: P.U.PD,
      go: this.qq,
      hs: [this.Qo]
  };
  if (G == 0) {
      var q = this.q7[1][this.Qo];
      h.UI = "rnm";
      S.data = {
          X: P.U.V5,
          Fh: "namewindow",
          IJ: q,
          Yz: {
              c: P.E.P,
              g: h
          }
      }
  } else {
      S.data = h;
      h.UI = "del"
  }
  this.B(S)
}
;
eI.prototype.a5o = function() {
  return this.tT
}
;
eI.prototype.Gx = function(Y) {
  this.tT = Y;
  if (this.q7)
      this.o3()
}
;
eI.prototype.sc = function(Y, S, h, q) {
  this.q7 = [Y, S, h, q];
  this.o3()
}
;
eI.prototype.o3 = function() {
  var Y = this.q7
    , S = Y[0]
    , h = Y[1]
    , q = Y[2]
    , H = Y[3];
  this.aa = [];
  this.j.innerHTML = "";
  var I = this.EM.bind(this)
    , E = this.tT;
  if (E == 0)
      P.xv(this.j, "imageset");
  else
      P.zM(this.j, "imageset");
  for (var G = 0; G < S.length; G++) {
      var d = S[G];
      if (d == null) {
          this.aa.push(null);
          continue
      }
      var B = P.w("img", "image");
      if (q)
          P.fs(B, q, H);
      if (this.am3)
          P.xv(B, "gsicon");
      B.setAttribute("src", d);
      if (E == 0) {} else {
          var n = P.w("div", "listitem");
          n.appendChild(B);
          var g = P.w("span");
          g.textContent = h ? h[G] : "Item " + (G + 1);
          g.setAttribute("style", "margin-left:4px;");
          n.appendChild(g);
          B = n
      }
      if (h)
          B.setAttribute("title", h[G]);
      B.addEventListener("mousedown", I, !1);
      this.aa.push(B);
      this.j.appendChild(B)
  }
}
;
eI.prototype.EM = function(Y) {
  Y.preventDefault();
  this.Qo = this.aa.indexOf(Y.currentTarget);
  this.kW = P.WW(Y, Y.currentTarget);
  if (Y.button == 0)
      this.B(new _(P.E.L));
  if (Y.button == 2 && this.BW) {
      var S = this.BW;
      S.update(null);
      var h = P.WW(Y, document.body)
        , q = new _(P.E.P,!0);
      q.data = {
          X: P.U.pa,
          FN: S,
          x: h.x,
          y: h.y + 2
      };
      this.B(q)
  }
}
;
eI.prototype.u = function() {
  return this.Qo
}
;
eI.prototype.i = function(Y) {
  this.Qo = Y
}
;
eI.prototype.aje = function() {
  var Y = this.kW;
  return new aV(Y.x,Y.y)
}
;
eI.prototype.ca = function(Y) {
  for (var G = 0; G < this.aa.length; G++) {
      var S = this.aa[G];
      if (S == null)
          continue;
      if (G == Y)
          P.xv(S, "active");
      else
          P.zM(S, "active")
  }
}
;