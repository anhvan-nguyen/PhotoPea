function eS(Y) {
  e9.call(this);
  this.j = P.w("div");
  this.pI = Y;
  this.Uk = null;
  this.kW = new aV(0,0);
  this.yx = "position:relative;overflow:hidden;";
  this.A9 = null;
  this.WH = new P.IN(this.j);
  this.IA("grab");
  this.Eh = P.w("canvas", "canv");
  this.j.appendChild(this.Eh);
  this.b6 = this.Eh.getContext("2d");
  this.a7t = null;
  this.zG = null;
  this.Qw = null;
  this.Ck = 0;
  this.Mf = 0;
  this.r9 = 0;
  this.ad_ = this.S7.bind(this);
  this.a2V = null;
  this.z = new gw({
      d: 1,
      v: 1
  });
  this.Jr = null;
  this.de = null;
  this.adW = this.Kf.bind(this);
  this.a8A = this.fn.bind(this);
  this.ahM = this.wR.bind(this);
  this.ajv = this.Sh.bind(this);
  this.amn = 0;
  this.VM = null;
  this.uC(this.Eh);
  this.fL(this)
}
eS.prototype = new e9;
eS.prototype.jL = function(Y) {
  var S = this.A9
    , h = null;
  if (Y.q(F.N9)) {
      h = "grab";
      if (Y.q(F.EO)) {
          h = "zoom-in";
          if (Y.q(F.Gs))
              h = "zoom-out"
      }
  }
  this.Uk = h;
  if (h)
      S = h;
  this.WH.kg(S, this.yx);
  if (Y.q(F.EO)) {
      var q = 0;
      if (Y.q(F.lR))
          q = 1;
      if (Y.q(F.yJ))
          q = -1;
      if (q != 0) {
          this.hA(new aV(this.Eh.width / 2,this.Eh.height / 2), q == 1)
      }
  }
}
;
eS.prototype.IA = function(Y) {
  this.A9 = Y;
  if (this.Uk)
      return;
  this.WH.kg(Y, this.yx)
}
;
eS.prototype.uC = function(Y) {
  P.aK(Y, this.adW);
  P.qT(Y);
  Y.addEventListener("wheel", this.ajv, !1)
}
;
eS.prototype.fL = function(Y) {
  Y.k("viewchange", this.a5J, this)
}
;
eS.prototype.a5J = function(Y) {
  var S = this.z.S
    , h = Y.currentTarget.SB();
  this.z.S = h.S;
  this.z.T = h.T.clone();
  if (S != h.S)
      this.Ih();
  this.mP()
}
;
eS.prototype.SB = function() {
  return {
      S: this.z.S,
      T: this.z.T
  }
}
;
eS.prototype.i = function(Y, S) {
  var h = Y[0].jJ;
  if (this.zG != null && this.zG[0].jJ.ma(h)) {} else {
      this.z.n3 = {
          d: h.d,
          v: h.v
      };
      this.z.T = new aV(0,0);
      this.z.S = 1
  }
  this.zG = Y;
  this.Ih();
  this.e4();
  this.Ck = 0;
  this.Mf = 0;
  this.r9 = S == null ? 0 : S;
  this.S7()
}
;
eS.prototype.Sh = function(Y) {
  Y.preventDefault();
  if (Y.deltaY == 0 || Date.now() - this.amn < 100)
      return;
  var S = P.WW(Y);
  S.x = P.M() * S.x;
  S.y = P.M() * S.y;
  this.amn = Date.now();
  this.hA(S, Y.deltaY < 0)
}
;
eS.prototype.hA = function(Y, S) {
  U.Ka.Bs(this.z, Y, S);
  this.k0()
}
;
eS.prototype.a3a = function() {
  debugger
  var Y = this.z
    , S = Y.n3;
  this.z.S = U.Ka.Gg(S.d, S.v, Y.Eq.d, Y.Eq.v);
  this.k0()
}
;
eS.prototype.k0 = function() {
  this.Ih();
  this.B(new _("viewchange"));
  this.B(new _("zoom"))
}
;
eS.prototype.Ih = function() {
  this.Qw = [];
  var Y = this.z.S;
  for (var G = 0; G < this.zG.length; G++) {
      var S = this.zG[G], h = new Uint8Array(S.data), q;
      if (Y >= 1)
          q = {
              nP: h,
              rect: S.jJ
          };
      else
          q = t.a3Y(h, S.jJ, Y);
      this.Qw.push(q)
  }
}
;
eS.prototype.e4 = function() {
  clearTimeout(this.a2V)
}
;
eS.prototype.mP = function() {
  if (this.zG == null || !P.Ap(this.Eh))
      return;
  var Y = this.a7t, S = this.Eh.width, h = this.Eh.height, T, A;
  if (Y == null || Y.width != S || Y.height != h) {
      Y = this.a7t = this.b6.createImageData(S, h);
      console.log("creating image data")
  }
  var q = this.zG[this.Ck]
    , H = this.Qw[this.Ck]
    , I = this.z
    , E = I.n3
    , d = I.Eq
    , B = d.d
    , n = d.v
    , g = E.d * I.S
    , z = E.v * I.S
    , p = Math.round((B - g) / 2 + I.T.x)
    , C = Math.round((n - z) / 2 + I.T.y);
  if (I.S <= 1) {
      A = H.rect.clone();
      A.x = p;
      A.y = C;
      g = A.d;
      z = A.v;
      T = H.nP
  } else {
      var i = 1 / I.S
        , e = new W(Math.floor((d.x - p) * i),Math.floor((d.y - C) * i),Math.ceil(d.d * i) + 1,Math.ceil(d.v * i) + 1)
        , a = new W(0,0,e.d * I.S,e.v * I.S);
      a.x = e.x * I.S + p;
      a.y = e.y * I.S + C;
      if (I.pq == null || I.pq.length != e.e() * 4) {
          I.pq = t.m(e.e() * 4)
      }
      if (I.dK == null || I.dK.length != a.e() * 4) {
          I.dK = t.m(a.e() * 4)
      }
      t.A5(I.pq, 0);
      t.rd(H.nP, H.rect, I.pq, e);
      t.scale.GY(I.pq, e.d, e.v, I.dK, a.d, a.v, I.S);
      T = I.dK;
      A = a
  }
  var Z = new Uint8Array(Y.data.buffer);
  t.M0(Z, B, n, 8, -p, -C);
  t.Q.Bc("norm", T, A, Z, d, d, 1);
  this.b6.setTransform(1, 0, 0, 1, 0, 0);
  this.b6.putImageData(Y, 0, 0);
  this.b6.clearRect(p - 1e3, C, 1e3, z);
  this.b6.clearRect(p + g, C, 1e3, z);
  this.b6.clearRect(p - 1e3, C - 1e3, g + 2e3, 1e3);
  this.b6.clearRect(p - 1e3, C + z, g + 2e3, 1e3);
  var O = eS.uI(I.S, "#ffffff");
  this.b6.putImageData(O, 0, I.Eq.v - O.height)
}
;
eS.ye = {};
eS.uI = function(Y, S) {
  var h = "z" + Y + "," + S
    , q = eS.ye[h];
  if (q)
      return q;
  var H = Math.round(50 * P.M())
    , I = Math.round(18 * P.M())
    , E = P.w("canvas")
    , d = E.getContext("2d");
  E.width = H;
  E.height = I;
  d.fillStyle = "rgba(1,1,1,1)";
  d.fillRect(0, 0, H, I);
  d.font = Math.round(11 * P.M()) + "px monospace";
  d.fillStyle = S;
  var B = Y * 100;
  if (B < 100)
      B = B.toFixed(2);
  else
      B = Math.round(B);
  B = B + "%";
  var n = d.measureText(B).width;
  d.fillText(B, (H - n) / 2, Math.round(I * .7));
  q = eS.ye[h] = d.getImageData(0, 0, H, I);
  return q
}
;
eS.prototype.S7 = function() {
  var Y = this.zG
    , S = Y.length
    , h = this.Ck
    , q = this.zG[h]
    , H = (h + 1) % S;
  this.mP();
  if (S != 1 && Y[H].jJ.ma(q.jJ)) {
      var I = q.Sd ? parseInt(q.Sd.split(",").pop()) : 30;
      if (I == 0)
          I = 16;
      if (H == 0)
          this.Mf++;
      if (this.r9 == 0 || this.Mf < this.r9)
          this.a2V = setTimeout(this.ad_, I)
  }
  this.Ck = H
}
;
eS.prototype.hD = function(Y, S) {
  if (Y <= 0 || S <= 0)
      return;
  var h = Math.floor(Y * P.M())
    , q = Math.floor(S * P.M());
  this.z.Eq = new W(0,0,h,q);
  this.Eh.width = h;
  this.Eh.height = q;
  this.Eh.setAttribute("style", "width:" + h / P.M() + "px; height:" + q / P.M() + "px; display:block;");
  this.mP()
}
;
eS.prototype.Kf = function(Y) {
  this.VM = Y.target;
  P.y2(window, this.a8A);
  P.cM(window, this.ahM);
  this.Jr = P.WW(Y, this.Eh);
  this.Jr.x *= P.M();
  this.Jr.y *= P.M();
  this.kW = this.Jr;
  this.de = this.z.T.clone();
  if (this.pI && this.VM == this.Eh && !this.Uk)
      this.B(new _("mousedown"))
}
;
eS.prototype.fn = function(Y) {
  var S = this.z
    , h = this.Uk
    , q = this.zG[this.Ck].jJ.clone();
  q.d *= S.S;
  q.v *= S.S;
  var H = P.WW(Y, this.Eh);
  H.x *= P.M();
  H.y *= P.M();
  this.kW = H;
  if (this.pI && this.VM == this.Eh && !h)
      this.B(new _("mousemove"));
  else if ((h == "grab" || h == null) && !S.Eq.HS(q)) {
      var I = H.x - this.Jr.x
        , E = H.y - this.Jr.y;
      S.T.x = this.de.x + Math.round(I);
      S.T.y = this.de.y + Math.round(E);
      this.B(new _("viewchange"))
  }
}
;
eS.prototype.wR = function(Y) {
  P.r$(window, this.a8A);
  P.pp(window, this.ahM);
  var S = this.Uk;
  if (Y.detail > 1) {
      this.z.S = 1;
      this.z.T.bm(0, 0);
      this.mP()
  }
  if (this.pI && this.VM == this.Eh && !this.Uk)
      this.B(new _("mouseup"));
  else {
      if (S == "zoom-in" || S == "zoom-out")
          this.hA(this.kW, S == "zoom-in")
  }
}
;
eS.prototype.ib = function() {
  return this.z.vl(this.kW.x, this.kW.y)
}
;