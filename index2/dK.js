function dK(Y) {
  h8.call(this, [[7, 11], [7, 13]][Y], ["redge", "magiccut"][Y]);
  this.yk = Y;
  this.q7 = {};
  this.I$ = null;
  this.Q2 = null;
  this.ti = null;
  this.sz = null;
  this.RI = null;
  this.YN = [];
  this.Ku = -1;
  this.vU = P.w("div", "form hbar");
  this.body.appendChild(this.vU);
  this.zQ = new gR;
  this.zQ.parent = this;
  this.zQ.k(P.E.L, this.XS, this);
  this.vU.appendChild(this.zQ.j);
  if(Y === 1) {
    let icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAeCAYAAAC49JeZAAACBUlEQVRYR92WsUocURSGv8MWRggKm8ZSi+BDxNIga2GjIKJ5gMQghNiK0bQRwUIfQEUE06TQwrR5gJQhoGkCNi5EAmqxXLm7s+5l2Jl77p1hjZlqBs75z3f/OedwhUf4iJL5OTAFTAMjwDnwGfgC/FRqlBamgd4WkdfGmPuiIoLzvQO8KY1IIZQH3Qf8AoYUOhfAMHCriC0ckgd9LCK1HIdJOX4CTBYmUghkQY8Dp4r8dMhL4GtEXlBKV2gROTbG1NpKKUfTDrvfPXE7y+nO1AV50AzWDHe4qpORCx3gcIu2tVUeFjrSjoeBFpEbY4xdea6DWXva7Wm78p5EHladluXKe+CTWqUTuAxsROQFpWRBDwB/Qnu6Wq0O1uv1qyCCiOC8/rP3jKMAzZnkPhKQEhfqG5p5YM/neKVSWWg0GvtxCOFZPmiraG94a8BcF/kDYLXXNz0NtMtqr6VPgb/J9TTcphIyQqFLKFlc4r+GXgHOgPawPUveJxLfvgOzwI/iPvoVNE5b4HVgwYEeBT4Ab4FLf5lyI/Kg+4FN4HdS0nX6BfAKeAdcl4vkV9M4bVXS7dHc3468+xf8VQtGxELbQ9jnI2Bb5RBYBL4V5FGlx0Knxd1DqAoXCSoT2u35Ikze3Bjo9oDuJu1g22MLWPqXVl63QUzv6bFe9bOF0Trt/WW9DHiU0HfPRZEfCiH5vwAAAABJRU5ErkJggg=='
    this.zQ.nr.setAttribute("src", icon)
  }
  var S = Y == 0 ? ["#ffffff", "#888888", "#000000"] : ["#00dd00", "#888888", "#ff0000"];
  S = S.concat(PIMG["tools/hand"], PIMG.zoomIn, PIMG.zoomOut);
  var h = Y == 0 ? [[12, 45], "Unknown", [12, 46]] : [[12, 45], "Erase", [12, 46]];
  this.ZE = new dl(null, S, h, 28);
  this.ZE.k(P.E.L, this.jL, this);
  this.vU.appendChild(this.ZE.j);
  this.Tv = new ed([7, 9], 0, 50, null);
  this.Tv.parent = this;
  this.Tv.k(P.E.L, [this.Zw, this.mP][Y], this);
  this.vU.appendChild(this.Tv.j);
  var q = this.afy = new gP([2, 2], !1, null, !0);
  q.k("click", this.jj, this);
  this.vU.appendChild(q.j);
  var H = this.a5D = new gP([12, 90], !1, null, !0);
  H.k("click", function (B) {
    alert(Y == 0 ? gx.get([15, 7, 1]) : "Mark the object with Green, background with Red. Two colors should never touch.", 5e3)
  }, this);
  this.vU.appendChild(H.j);
  var I = new gP("Tutorial", !1, null, !0);
  I.k("click", this.al5, this);
  this.vU.appendChild(I.j);
  var E = P.w("span", "form");
  this.vU.appendChild(E);
  E.setAttribute("style", "position:absolute;  right:0px");
  this.k_ = new dl([12, 46], ["checker", "#ffffff", "#000000"]);
  this.k_.k(P.E.L, this.tr, this);
  E.appendChild(this.k_.j);
  this.QR = new ey(null, [[6, 13], [6, 2], [17, 2]]);
  E.appendChild(this.QR.j);
  this.HY = new gP("OK", !1, null, !0);
  this.HY.k("click", this.sf, this);
  E.appendChild(this.HY.j);
  var d = P.w("div", "flexrow");
  this.body.appendChild(d);
  this.Dc = new eS(!0);
  this.Jh = new eS;
  this.Dc.fL(this.Jh);
  this.Jh.fL(this.Dc);
  this.Dc.k("mousedown", this.Kf, this);
  this.Dc.k("mousemove", this.fn, this);
  this.Dc.k("mouseup", this.wR, this);
  this.Dc.k("zoom", this.XS, this);
  this.Jh.k("zoom", this.XS, this);
  d.appendChild(this.Dc.j);
  d.appendChild(this.Jh.j)
}
dK.prototype = new h8;
dK.prototype.UO = function (Y, S) {
  var h = Y != null && !Y.t[Y.C[0]].rect.fa();
  if (!h)
    alert("The layer is empty.");
  return h
}
  ;
dK.prototype.OV = function () {
  return new aV(0, 0)
}
  ;
dK.prototype.VD = function () {
  return !0
}
  ;
dK.prototype.hD = function (Y, S) {
  S = S - 26 - 33;
  Y = Math.floor((Y - 28) / 2);
  this.Dc.hD(Y, S);
  this.Jh.hD(Y, S)
}
  ;
dK.prototype.f = function () {
  h8.prototype.f.call(this);
  this.zQ.f();
  this.Tv.f();
  this.HY.f();
  this.k_.f();
  this.QR.f();
  this.afy.f();
  this.a5D.f()
}
  ;
dK.prototype.al5 = function (Y) {
  debugger
  window.open("//www.photopea.com/" + ["learn/refine-edge", "tuts/magic-cut-remove-image-background-online"][this.yk], "_blank")
}
  ;
dK.prototype.rJ = function (Y, S) {
  debugger
  this.Q2 = Y;
  if (S == iD.e8 || S == iD.Ie) {
    this.zQ.dB(Y.Ly);
    this.zQ.i(gk.CG(), Y.Ly.r0, Y.Ly.SR)
  }
}
  ;
dK.prototype.jL = function (Y, S, h, q) {
  var H = this.ZE.u();
  if (q == null) {
    var q = new F;
    if (H >= 3)
      q.oE("Space");
    if (H >= 4) {
      q.oE("ControlLeft");
      if (H == 5)
        q.oE("AltLeft")
    }
    this.Dc.jL(q);
    return
  }
  this.sz = q;
  var I = U.NJ.lL(this.zQ.u(), q);
  if (I != null) {
    this.zQ.i(I);
    this.XS()
  } else if (q.q(F.EO) && q.q(F.E0)) {
    var E = this.YN
      , d = 0;
    if (q.q(F.aY)) {
      if (this.Ku + 1 < E.length)
        d = 1
    } else if (this.Ku > 0)
      d = -1;
    if (d != 0) {
      this.Ku += d;
      var B = this.Ku
        , n = this.q7;
      if (d == 1)
        t.rd(E[B][2], E[B][0], n.mh, n.rect);
      else
        t.rd(E[B + 1][1], E[B + 1][0], n.mh, n.rect);
      n.ak = n.rect;
      this.mP()
    }
  } else if (H < 3)
    this.Dc.jL(q)
}
  ;
dK.prototype.$K = function (Y) {
  var S = this.q7
    , h = this.YN
    , q = t.m(Y.e() * 4);
  t.rd(S.k5, S.rect, q, Y);
  S.k5 = null;
  var H = t.m(Y.e() * 4);
  t.rd(S.mh, S.rect, H, Y);
  this.Ku++;
  h[this.Ku] = [Y.clone(), q, H];
  while (h.length > this.Ku + 1)
    h.pop();
  while (h.length > 50) {
    h = h.slice(1);
    this.Ku--
  }
}
  ;
dK.prototype.XS = function () {
  debugger
  var Y = this.Q2
    , S = fU.by(this.zQ.u(), Y.Ly.r0, this.Dc.SB().S);
  this.Dc.IA(S)
}
  ;
dK.prototype.Kf = function (Y) {
  debugger
  var S = this.Q2
    , h = this.q7
    , q = this.sz
    , H = this.zQ.u()
    , I = this.Dc.ib()
    , E = [16777215, 8421504, 0][this.ZE.u()];
  this.I$ = new fU(H, S.Ly.list[0].r0, S.Ly.list[0].SR, {
    xC: 1,
    vy: !0
  }, E, S.E$, h.rect);
  h.k5 = h.mh.slice(0);
  if (q != null && q.q(F.aY) && this.RI) {
    this.I$.moveTo(this.RI.x, this.RI.y);
    this.I$.lineTo(I.x, I.y)
  } else
    this.I$.moveTo(I.x, I.y);
  this.uH()
}
  ;
dK.prototype.fn = function (Y) {
  var S = this.q7
    , h = this.Dc.ib();
  this.I$.lineTo(h.x, h.y);
  this.uH()
}
  ;
dK.prototype.wR = function (Y) {
  this.RI = this.Dc.ib();
  this.$K(this.I$.HK());
  this.mP()
}
  ;
dK.prototype.uH = function () {
  var Y = this.q7
    , S = this.I$
    , h = S.sB();
  if (h.fa())
    return;
  Y.ak = h;
  t.Q.Bc("norm", S.ce(), S.i6(), Y.mh, Y.rect, h, 1);
  this.HP()
}
  ;
dK.prototype.jj = function (Y) {
  var S = this.q7;
  S.k5 = S.mh.slice(0);
  S.ak = S.rect;
  t.A5(S.mh, [4278190080, 4292730333][this.yk]);
  this.$K(S.rect);
  this.mP()
}
  ;

  dK.prototype.e = function() {
    return 
  }

// dK.prototype.kg = function(Y, S) {
dK.prototype.kg = function (buffer, rect) {
  debugger
  let Y = {
    N: null
  }
  // this.ti = Y;
  // var h = Y.t[Y.C[0]]
  //   , q = h.rect.clone()
  //   , H = q.d
  //   , I = q.v;
  // this.Tv.i(this.yk == 0 ? 3 : H * I < 3e6 ? 3 : 0);
  // this.ZE.i(Y.N == null ? 0 : 1);
  // this.Tv.f4();
  // if (this.yk == 0 && Y.N != null || this.yk == 1)
  //     this.Tv.tW();
  var q = rect.clone()
    , H = q.d
    , I = q.v;
  this.Tv.i(this.yk == 0 ? 3 : H * I < 3e6 ? 3 : 0);
  this.ZE.i(Y.N == null ? 0 : 1);
  this.Tv.f4();
  if (this.yk == 0 && Y.N != null || this.yk == 1)
      this.Tv.tW();
  var E = this.yk
    , d = t.m(q.e())
    , B = new Float32Array(q.e());
  if (E == 0 && Y.N) {
    t.m7(Y.N.channel, Y.N.rect, d, q);
    var n = t.m(q.e());
    for (var g = 0; g < I; g++)
      for (var z = 0; z < H; z++) {
        var G = g * H + z
          , p = d[G];
        if (z > 0 && d[G - 1] != p || z < H - 1 && d[G + 1] != p || g > 0 && d[G - H] != p || g < I - 1 && d[G + H] != p)
          n[G] = 255
      }
    t.style.Xo(n, B, H, I)
  } else
    B.fill(1e9);
  q.x = q.y = 0;
  this.q7 = {
    rect: q,
    nP: buffer,
    ez: d,
    mC: B,
    k$: t.m(q.e() * 4),
    _k: t.m(q.e() * 4),
    mh: t.m(q.e() * 4),
    k5: null,
    W4: null,
    ak: q,
    a9Z: {}
  };
  if (E == 0)
    this.Zw();
  else {
    this.q7.a9Z = U.ww.db({rect: rect, buffer: buffer});
    var C = this.q7.mh;
    t.A5(C, 4287137928);
    var T = t.oL.getSelection(buffer, H, I)
      , A = Math.round(H / 60)
      , i = Math.round(.7 * I);
    for (var g = 0; g < I; g++)
      for (var z = 0; z < H; z++) {
        var e = (g * H + z) * 4
          , a = T[e >>> 2];
        a = a > 128 ? 255 : 128;
        if (g < A || g < i && (z < A || z > H - 1 - A))
          a = 0;
        C[e] = C[e + 1] = C[e + 2] = a
      }
    this.mP()
  }
  this.YN = [1];
  this.Ku = 0;
  // this.Dc.a3a();
  // var Z = this.zQ.u();
  // Z.Brsh.v.Dmtr.v.val = Math.round(q.d / (E == 0 ? 10 : 20));
  // this.zQ.i(Z);
  // this.XS()
}
  ;
dK.prototype.Zw = function () {
  var Y = this.q7
    , S = Y.rect.e()
    , h = this.Tv.u()
    , q = Y.ez.slice(0);
  for (var G = 0; G < S; G++)
    if (Y.mC[G] < h)
      q[G] = 128;
  t.A5(Y.mh, 4294967295);
  t.Vj(q, Y.mh, 0);
  t.Vj(q, Y.mh, 1);
  t.Vj(q, Y.mh, 2);
  Y.ak = Y.rect;
  this.mP()
}
  ;
dK.prototype.mP = function () {
  debugger
  var Y = this.q7, H, d, B = 0, n = 0, g = 0;
  this.HP();
  var S = Y.rect
    , h = S.d
    , q = S.v
    , I = t.m(S.e())
    , E = Y.nP;
  t.Ft(Y.mh, I, 0);
  for (var G = 0; G < I.length; G++) {
    if (E[(G << 2) + 3] != 255)
      continue;
    var z = I[G];
    if (z == 0)
      B++;
    else if (z == 255)
      n++;
    else
      g++
  }
  if (B * n * g != 0) {
    if (this.yk == 0)
      d = t.AR.AR(S, E, I);
    else {
      var p = this.ZE.u();
      for (var C = 1; C < q; C++)
        for (var T = 1; T < h; T++) {
          var G = C * h + T
            , A = I[G]
            , i = I[G - 1];
          if (A == 0 && i == 255 || A == 255 && i == 0) {
            H = "The Red and Green should never touch! Erase it with Grey.";
            break
          }
        }
      var e = Date.now()
        , a = this.q7.a9Z;
      t.vx(I, a.tq);
      U.ww.bt(a, !0);
      var Z = Math.ceil(this.Tv.u() / 2);
      if (Z == 0) {
        d = E.slice(0);
        t.Vj(a.N, d, 3)
      } else {
        var O = a.N.slice(0)
          , c = a.N.slice(0);
        for (var s = 0; s < Z; s++) {
          for (var C = 1; C < q - 1; C++)
            for (var T = 1; T < h - 1; T++) {
              var G = C * S.d + T
                , x = O[G];
              if (O[G - h] != x || O[G - 1] != x || O[G + 1] != x || O[G + h] != x)
                c[G] = 128;
              else
                c[G] = x
            }
          var u = O;
          O = c;
          c = u
        }
        d = t.AR.AR(S, E, O, 20, !1)
      }
    }
  } else {
    d = E.slice(0);
    t.Vj(I, d, 3)
  }
  for (var G = 3; G < d.length; G += 4)
    if (d[G] > E[G])
      d[G] = E[G];
  if (S.ma(Y.rect))
    Y.W4 = d;
  else
    t.rd(d, S, Y.W4, Y.rect);
  this.tr();
  if (H)
    alert(H, 4e3)
}
  ;
dK.prototype.HP = function (Y) {
  var S = this.q7
    , h = S.ak;
  t.rd(S.nP, S.rect, S.k$, S.rect, h, !0);
  var q = S.mh;
  if (this.yk == 1) {
    var H = new Uint32Array(256);
    H[0] = 4278190335;
    H[255] = 4278255360;
    var I = S.rect.e();
    q = q.slice(0);
    var E = new Uint32Array(q.buffer);
    for (var G = 0; G < I; G += 2) {
      E[G] = H[E[G] & 255];
      E[G + 1] = H[E[G + 1] & 255]
    }
  }
  t.Q.Bc("norm", q, S.rect, S.k$, S.rect, h, .3);
  this.Dc.i([{
    jJ: S.rect,
    data: S.k$.buffer
  }])
}
  ;
dK.prototype.tr = function (Y) {
  var S = this.q7;
  t.A5(S._k, [0, 4294967295, 4278190080][this.k_.u()]);
  t.Q.Bc("norm", S.W4, S.rect, S._k, S.rect, S.rect, 1);
  this.Jh.i([{
    jJ: S.rect,
    data: S._k.buffer
  }])
}
  ;
dK.prototype.sf = function (Y) {
  var S = this.ti
    , h = this.q7
    , q = this.QR.u()
    , H = S.t[S.C[0]]
    , I = new _(P.E.A, !0);
  I.NN = !0;
  var E = H.rect.clone();
  if (q == 0 && H.yj() || q != 0 && !H.yj()) {
    I.F = U.GC;
    I.data = {
      X: M.OU,
      $: S.C[0]
    };
    this.B(I)
  }
  if (S.N != null) {
    I.F = U.n5;
    I.data = {
      X: "fromAction",
      gM: U.Q_.zT()
    };
    this.B(I)
  }
  if (q == 0) {
    var d = S.t.slice(0)
      , B = S.rY();
    B.wN(H.getName());
    d.splice(S.C[0] + 1, 0, B);
    B.rect = E;
    B.buffer = h.W4;
    B.s();
    I.F = U.GC;
    I.data = {
      X: M.BO,
      PF: d,
      nI: [S.C[0] + 1],
      vc: [7, 11]
    };
    this.B(I)
  }
  if (q == 1) {
    var n = H.Qn();
    I.F = U.GC;
    I.data = {
      X: M.AI,
      a4c: !0
    };
    this.B(I);
    var g = H.Qn();
    g.channel = t.m(E.e());
    g.rect = E;
    g.color = 0;
    g.Uh = !0;
    t.Ft(h.W4, g.channel, 3);
    if (n) {
      var z = g.K7(n);
      g.rect = z.rect;
      g.channel = z.channel;
      g.color = z.color
    }
    g.Mq();
    H._A()
  }
  if (q == 2) {
    var p = {
      rect: E,
      channel: t.m(E.e())
    };
    t.Ft(h.W4, p.channel, 3);
    I.F = U.n5;
    I.data = {
      X: "setsel",
      N: p,
      vc: this.pC
    };
    this.B(I)
  }
  this.close()
}
  ;