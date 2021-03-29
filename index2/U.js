var U = {};
U.Il = function (Y, S, h) {
  this.name = Y;
  this.id = S;
  this.Su = null;
  if (h != null)
      this.tp = h
}
  ;

U.ww = function() {
  U.NJ.call(this, [10, 37], U.UT, "tools/qselect");
  this.rv = "qselect"
}
;

U.ww.db = function(Y) {
  // var S = Y.C[0]
  //   , h = Y.t[S]
  var h = Y
    , q = h.rect
    , H = q.d
    , I = q.v
    , E = H * I
    , d = h.buffer
    , B = Date.now()
    , n = t.m(E);
  n.fill(128);
  var g = t.mv.DE(d, H, I);
  console.log(Date.now() - B);
  var z = {
      key: U.ww.TK(Y),
      dC: d,
      rect: q.clone(),
      rz: H,
      UR: I,
      kb: 12,
      a1e: !1,
      tq: n,
      v4: g,
      N: t.m(E),
      uD: null,
      NW: null,
      ID: null
  };
  U.ww.bt(z);
  return z
}
;
U.ww.bt = function(Y, S) {
  var h = Y.rz
    , q = Y.UR
    , H = 0
    , I = 0
    , E = Date.now()
    , d = Y.uD != null && t.mv.agb(Y.v4.hs, Y.uD.hs, Y.uD.qR, Y.tq);
  H = Date.now() - E;
  E = Date.now();
  if (!d && !Y.a1e) {
      Y.uD = t.mv.ym(Y.v4, h, q, Y.tq, Y.kb);
      if (!t.mv.agb(Y.v4.hs, Y.uD.hs, Y.uD.qR, Y.tq)) {
          Y.a1e = !0;
          console.log("conflict")
      }
      Y.NW = t.mv.adh(Y.dC, h, q, Y.uD.hs, Y.uD.qR);
      Y.ID = [Y.NW[0].slice(0), []];
      I = Date.now() - E;
      E = Date.now()
  }
  var E = Date.now();
  if (S) {
      Y.ID[0].set(Y.NW[0]);
      var B = Y.NW[1]
        , n = Y.ID[1];
      for (var g = 0; g < B.length; g++)
          n[g] = B[g].slice(0);
      t.mv.aam(Y.uD.hs, h, q, Y.uD.qR, Y.tq, Y.N, Y.ID)
  }
}
;

U.ww.TK = function(Y) {
  // var S = Y.C[0]
    // , h = Y.t[S]
    var S = 0
    var h = Y
    , q = h.rect
    , H = q.d
    , I = q.v
    , E = H * I
    , d = h.buffer;
  return [S, q.x, q.y, H, I, d[0], d[1], d[2], d[3]].join(",")
}
;

U.Ka = function () {
  U.Il.call(this, [10, 17], U.nf, "tools/zoom");
  this.fb = !1;
  this.IZ = !0;
  this.qz = 0;
  this._P = null;
  this.Zd = null;
  this.a2 = 0;
  this.de = null;
  this.Nl = 0;
  this.iO = new gV([{
      name: [8, 0],
      fQ: "Ctrl + +"
  }, {
      name: [8, 1],
      fQ: "Ctrl + -",
      Sp: !0
  }, {
      name: [20, 3],
      fQ: "Ctrl + 0"
  }, {
      name: ["VAR0: 100%", [20, 2]],
      fQ: "Ctrl + 1"
  }], [{
      c: P.E.A,
      F: U.nf,
      g: {
          X: "zoom",
          IZ: !0
      }
  }, {
      c: P.E.A,
      F: U.nf,
      g: {
          X: "zoom",
          IZ: !1
      }
  }, {
      c: P.E.A,
      F: U.nf,
      g: {
          X: "adapt",
          G: "fitscr"
      }
  }, {
      c: P.E.A,
      F: U.nf,
      g: {
          X: "adapt",
          G: "pixel"
      }
  }])
}
  ;
U.Ka.prototype = new U.Il;

U.Ka.Gg = function (Y, S, h, q) {
  var H = 1;
  while (Y * H * 1 / 2 > h || S * H * 1 / 2 > q)
      H *= 1 / 2;
  if (Y * H * 2 / 3 > h || S * H * 2 / 3 > q)
      H *= 1 / 2;
  else if (Y * H > h || S * H > q)
      H *= 2 / 3;
  return H
}