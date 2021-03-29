function t() { }
t.af$ = function (Y, S, h) {
  var q = S.d
      , H = S.v
      , I = 2 * Math.floor(q / 3)
      , E = 2 * Math.floor(H / 3)
      , d = new W(S.x, S.y, I, E)
      , B = h && h.length == I * E * 4 ? h : t.m(I * E * 4)
      , n = new Uint32Array(Y.buffer)
      , g = new Uint32Array(B.buffer);
  for (var z = 0; z < E; z += 2)
      for (var p = 0; p < I; p += 2) {
          var C = z * I + p
              , T = (z * 3 >>> 1) * q + (p * 3 >>> 1)
              , A = n[T]
              , i = n[T + 1]
              , e = n[T + 2]
              , a = n[T + q]
              , Z = n[T + 1 + q]
              , O = n[T + 2 + q]
              , c = n[T + q + q]
              , s = n[T + 1 + q + q]
              , x = n[T + 2 + q + q]
              , u = A >>> 24 << 2
              , y = (A >>> 16 & 255) * u
              , j = (A >>> 8 & 255) * u
              , v = (A & 255) * u
              , X = i >>> 24 << 1
              , N = (i >>> 16 & 255) * X
              , V = (i >>> 8 & 255) * X
              , $ = (i & 255) * X
              , w = e >>> 24 << 2
              , m = (e >>> 16 & 255) * w
              , l = (e >>> 8 & 255) * w
              , b = (e & 255) * w
              , K = a >>> 24 << 1
              , J = (a >>> 16 & 255) * K
              , R = (a >>> 8 & 255) * K
              , r = (a & 255) * K
              , f = Z >>> 24
              , gf = (Z >>> 16 & 255) * f
              , aa = (Z >>> 8 & 255) * f
              , aA = (Z & 255) * f
              , e5 = O >>> 24 << 1
              , fk = (O >>> 16 & 255) * e5
              , o = (O >>> 8 & 255) * e5
              , eY = (O & 255) * e5
              , du = c >>> 24 << 2
              , dV = (c >>> 16 & 255) * du
              , hy = (c >>> 8 & 255) * du
              , bq = (c & 255) * du
              , i5 = s >>> 24 << 1
              , hX = (s >>> 16 & 255) * i5
              , bY = (s >>> 8 & 255) * i5
              , ds = (s & 255) * i5
              , hV = x >>> 24 << 2
              , gF = (x >>> 16 & 255) * hV
              , co = (x >>> 8 & 255) * hV
              , c_ = (x & 255) * hV
              , a5 = u + X + K + f
              , gb = w + X + e5 + f
              , iC = du + i5 + K + f
              , cC = hV + i5 + e5 + f
              , aB = a5 == 0 ? 0 : 1 / a5
              , cd = gb == 0 ? 0 : 1 / gb
              , dZ = iC == 0 ? 0 : 1 / iC
              , en = cC == 0 ? 0 : 1 / cC
              , cD = 0
              , hP = 0
              , ea = 0
              , fp = 0;
          cD = ~~(.5 + (v + $ + r + aA) * aB);
          hP = ~~(.5 + (j + V + R + aa) * aB);
          ea = ~~(.5 + (y + N + J + gf) * aB);
          fp = ~~(.5 + a5 * (1 / 9));
          g[C] = fp << 24 | ea << 16 | hP << 8 | cD;
          cD = ~~(.5 + (b + $ + eY + aA) * cd);
          hP = ~~(.5 + (l + V + o + aa) * cd);
          ea = ~~(.5 + (m + N + fk + gf) * cd);
          fp = ~~(.5 + gb * (1 / 9));
          g[C + 1] = fp << 24 | ea << 16 | hP << 8 | cD;
          cD = ~~(.5 + (bq + ds + r + aA) * dZ);
          hP = ~~(.5 + (hy + bY + R + aa) * dZ);
          ea = ~~(.5 + (dV + hX + J + gf) * dZ);
          fp = ~~(.5 + iC * (1 / 9));
          g[C + I] = fp << 24 | ea << 16 | hP << 8 | cD;
          cD = ~~(.5 + (c_ + ds + eY + aA) * en);
          hP = ~~(.5 + (co + bY + o + aa) * en);
          ea = ~~(.5 + (gF + hX + fk + gf) * en);
          fp = ~~(.5 + cC * (1 / 9));
          g[C + I + 1] = fp << 24 | ea << 16 | hP << 8 | cD
      }
  return {
      rect: d,
      nP: B
  }
}
  ;
t.eM = function (Y) {
  var S = 255
      , h = Y.length;
  h -= h & 31;
  for (var G = 3; G < h; G += 32)
      S = S & Y[G] & Y[G + 4] & Y[G + 8] & Y[G + 12] & Y[G + 16] & Y[G + 20] & Y[G + 24] & Y[G + 28];
  return S != 255
}
t.a3Y = function (Y, S, h, q) {
  var H = t.ga
      , I = t.af$
      , d = 0;
  if (!t.eM(Y)) {
      H = t.b8;
      I = t.abL
  }
  var E = {
      nP: Y,
      rect: S
  }
      , B = h;
  while (B < .499) {
      d++;
      B *= 2
  }
  for (var G = 0; G < d; G++)
      E = H(E.nP, E.rect, q);
  if (B < .5001)
      E = H(E.nP, E.rect, q);
  else
      E = I(E.nP, E.rect, q);
  return E
}
  ;
t.vK = function(Y, S) {
  var h = S.R
    , q = S.h
    , H = S.l
    , I = S.O
    , E = Math.min(S.R.length, Y.buffer.byteLength >>> 2)
    , d = 4 * Math.floor(E / 4)
    , B = new Uint32Array(Y.buffer)
    , n = new Uint32Array(h.buffer)
    , g = new Uint32Array(q.buffer)
    , z = new Uint32Array(H.buffer)
    , p = new Uint32Array(I.buffer);
  for (var G = 0; G < d; G += 4) {
      var C = B[G]
        , T = B[G + 1]
        , A = B[G + 2]
        , i = B[G + 3];
      g[G >> 2] = C & 255 | (T & 255) << 8 | (A & 255) << 16 | i << 24;
      z[G >> 2] = (C & 65280) >> 8 | T & 65280 | (A & 65280) << 8 | (i & 65280) << 16;
      p[G >> 2] = (C & 16711680) >> 16 | (T & 16711680) >> 8 | A & 16711680 | (i & 16711680) << 8;
      n[G >> 2] = C >>> 24 | T >>> 24 << 8 | A >>> 24 << 16 | i & 4278190080
  }
  for (var G = d; G < E; G++) {
      var e = B[G];
      q[G] = e >> 0 & 255;
      H[G] = e >> 8 & 255;
      I[G] = e >> 16 & 255;
      h[G] = e >> 24 & 255
  }
}
;
t.ho = function(Y) {
  this.R = t.m(Y);
  this.h = t.m(Y);
  this.l = t.m(Y);
  this.O = t.m(Y)
}
;
t.ho.prototype.clone = function() {
  var Y = this.R.length
    , S = new t.ho(1);
  S.R = this.R.slice(0);
  S.h = this.h.slice(0);
  S.l = this.l.slice(0);
  S.O = this.O.slice(0);
  return S
}
;
t.M0 = function (Y, S, h, q, H, I) {
  if (H == null)
    H = I = 0;
  q = Math.log(q) / Math.log(2);
  q = Math.round(q);
  for (var G = 0; G < h; G++)
    for (var E = 0; E < S; E++) {
      var d = G * S + E << 2
        , B = t.iw(G + I, E + H, q);
      Y[d] = Y[d + 1] = Y[d + 2] = B;
      Y[d + 3] = 255
    }
}
  ;
t.iw = function (G, Y, S) {
  return 255 - ((G >>> S) + (Y >>> S) & 1) * 51
}
  ;
t.A5 = function (Y, S, h) {
  if (h == null)
    h = 0;
  var q = new Uint32Array(Y.buffer)
    , H = q.length;
  for (var G = 0; G < H; G++)
    q[G] = q[G] & h | S
}
  ;
t.Vj = function (Y, S, h) {
  var q = new Uint8Array(S.buffer)
    , H = new Uint32Array(Y.buffer)
    , I = Math.min(q.length / 4, Y.length)
    , G = 0;
  while (G + 4 < I) {
    var E = H[G >>> 2];
    q[(G << 2) + h] = E & 255;
    q[(G << 2) + h + 4] = E >>> 8 & 255;
    q[(G << 2) + h + 8] = E >>> 16 & 255;
    q[(G << 2) + h + 12] = E >>> 24;
    G += 4
  }
  while (G < I) {
    q[(G << 2) + h] = Y[G];
    G++
  }
}
  ;
t.Fi = function (Y) {
  return Y + 1 + (Y >>> 8) >>> 8
}
  ;
t.Ft = function (Y, S, h) {
  var q = new Uint8Array(Y.buffer)
    , H = Math.min(q.length / 4, S.length);
  for (var G = 0; G < H; G++) {
    S[G] = q[(G << 2) + h]
  }
}
t.aiy = function (Y) {
  return Y + (Y % 4 == 0 ? 0 : 4 - Y % 4)
}
t.m = function (Y, S) {
  if (S == null)
    S = !1;
  if (!S)
    Y = t.aiy(Y);
  try {
    var h = new Uint8Array(Y)
  } catch (gx) {
    alert("Not enough RAM! (need " + Math.round(Y / (1 << 20)) + " MB)", 7e3);
    throw "low_ram"
  }
  return h
}
t.A5 = function (Y, S, h) {
  if (h == null)
    h = 0;
  var q = new Uint32Array(Y.buffer)
    , H = q.length;
  for (var G = 0; G < H; G++)
    q[G] = q[G] & h | S
}
  ;

t.mv = {};
t.mv.DE = function () {
  function Y(e, a, Z, O, c, s) {
    var x = []
      , u = s
      , y = s
      , j = s >>> 2;
    for (var v = 0; v < c; v++)
      for (var X = 0; X < O; X++) {
        var N = ~~((X + .5) * u)
          , V = ~~((v + .5) * y)
          , $ = 1e9
          , w = Math.max(0, N - j)
          , m = Math.min(a, N + j + 1)
          , l = Math.max(0, V - j)
          , b = Math.min(Z, V + j + 1);
        for (var K = l; K < b; K++)
          for (var J = w; J < m; J++) {
            var R = S(e, a, J, K);
            if (R < $) {
              N = J;
              V = K;
              $ = R
            }
          }
        var r = (V * a + N) * 4;
        x.push(N, V)
      }
    return x
  }
  function S(e, a, Z, O) {
    var c = (O * a + Z) * 4
      , s = a * 4
      , x = h(e, c - 4, c) + h(e, c, c + 4)
      , u = h(e, c - s, c) + h(e, c, c + s);
    return x + u
  }
  function h(e, a, Z) {
    var O = e[a] - e[Z]
      , c = e[a + 1] - e[Z + 1]
      , s = e[a + 2] - e[Z + 2];
    return O * O + c * c + s * s
  }
  var q = 0
    , H = 0;
  function I(e, a, Z, O) {
    H++;
    if (O < q)
      q = O;
    e[O].push(a, Z)
  }
  function E(e) {
    H--;
    while (e[q].length == 0)
      q++
  }
  function d(e, a, Z) {
    q = 0;
    H = 0;
    var O = a * Z
      , c = Math.round(Math.min(a, Z) / 50)
      , V = 0
      , $ = 16;
    if (c == 0)
      c = 1;
    var s = 30 / c
      , x = Math.floor(a / c)
      , u = Math.floor(Z / c)
      , y = new Uint16Array(O);
    for (var G = 0; G < O; G++)
      y[G] = 65535;
    var j = Y(e, a, Z, x, u, c)
      , v = j.length >>> 1;
    if (v > 65535)
      throw v;
    var X = [];
    for (var G = 0; G < 1e3 + Z; G++)
      X.push([]);
    var N = [0, 1, 0, -1, -1, 0, 1, 0]
      , w = Math.min(u, 5)
      , m = new Uint32Array(v * 6);
    for (var l = 0; l < u; l += w) {
      var b = Math.min(l + w + 1, u);
      for (var K = l; K < b; K++)
        for (var J = 0; J < x; J++) {
          var G = K * x + J
            , R = G * 2
            , r = j[R + 1] << 16 | j[R];
          I(X, r, G, j[R + 1] >>> $)
        }
      var f = Math.min(Z, b * c);
      if (l + w >= u)
        f = Z;
      while (H != 0) {
        E(X);
        var gf = X[q].pop()
          , aa = X[q].pop()
          , aA = aa >>> 16
          , e5 = aa & 65535
          , G = aA * a + e5;
        if (y[G] == 65535) {
          var fk = gf * 6
            , o = G << 2;
          y[G] = gf;
          m[fk] += e[o];
          m[fk + 1] += e[o + 1];
          m[fk + 2] += e[o + 2];
          m[fk + 3] += e5;
          m[fk + 4] += aA;
          m[fk + 5]++;
          var eY = aA >>> $;
          if (aA != f - 1 && y[G + a] == 65535)
            I(X, aA + 1 << 16 | e5, gf, B(e, a, s, e5, aA + 1, m, fk) + eY);
          if (aA != 0 && y[G - a] == 65535)
            I(X, aA - 1 << 16 | e5, gf, B(e, a, s, e5, aA - 1, m, fk) + eY);
          if (e5 != 0 && y[G - 1] == 65535)
            I(X, aA << 16 | e5 - 1, gf, B(e, a, s, e5 - 1, aA, m, fk) + eY);
          if (e5 != a - 1 && y[G + 1] == 65535)
            I(X, aA << 16 | e5 + 1, gf, B(e, a, s, e5 + 1, aA, m, fk) + eY)
        }
      }
      if (f != aA) {
        var du = (l + w) * x;
        m.fill(0, du * 6, (du + x) * 6);
        for (var aA = (l + w - 2) * c; aA < f; aA++)
          for (var e5 = 0; e5 < a; e5++) {
            var G = aA * a + e5;
            if (y[G] >= du) {
              y[G] = 65535
            }
          }
      }
    }
    return {
      hs: y,
      qR: v,
      iN: m
    }
  }
  t.mv.ym = function (e, a, Z, O, c) {
    var s = e.qR
      , x = a * Z
      , u = e.iN
      , y = e.hs
      , j = C(O, y, s, x)
      , v = new UnionFind(s)
      , m = 0;
    for (var X = 1; X < Z; X++)
      for (var N = 1; N < a; N++) {
        var G = X * a + N
          , V = y[G]
          , $ = 0;
        if (($ = y[G - 1]) != V && j[$] == j[V] && n(u, 0, V * 6, $ * 6) < c)
          v.link(V, $);
        if (($ = y[G - a]) != V && j[$] == j[V] && n(u, 0, V * 6, $ * 6) < c)
          v.link(V, $)
      }
    var w = new Uint16Array(s);
    w.fill(65535);
    var l = new Uint16Array(s);
    for (var G = 0; G < s; G++) {
      var b = v.find(G);
      if (w[b] == 65535)
        w[b] = m++;
      l[G] = w[b]
    }
    var K = new Uint16Array(x);
    for (var G = 0; G < x; G++)
      K[G] = l[y[G]];
    return {
      hs: K,
      qR: m
    }
  }
    ;
  t.mv.agb = function (e, a, Z, O) {
    var c = t.m(Z)
      , s = a.length
      , x = 0;
    for (var G = 0; G < s && x != 3; G++) {
      var u = O[G];
      if (u == 0 || u == 255) {
        var y = a[G]
          , j = 2 - (u >>> 7);
        c[y] = x = c[y] | j
      }
    }
    return x != 3
  }
    ;
  function B(e, a, Z, O, c, s, x) {
    var u = (c * a + O) * 4
      , y = s[x + 5]
      , j = 1 / y
      , v = e[u] * y - s[x]
      , X = e[u + 1] * y - s[x + 1]
      , N = e[u + 2] * y - s[x + 2]
      , V = O * y - s[x + 3]
      , $ = c * y - s[x + 4]
      , w = Math.sqrt(v * v + X * X + N * N)
      , m = Math.sqrt(V * V + $ * $);
    return ~~((w + Z * m) * j + .5)
  }
  function n(e, a, Z, O) {
    var c = 1 / e[Z + 5]
      , s = 1 / e[O + 5]
      , x = e[Z] * c - e[O] * s
      , u = e[Z + 1] * c - e[O + 1] * s
      , y = e[Z + 2] * c - e[O + 2] * s
      , j = e[Z + 3] * c - e[O + 3] * s
      , v = e[Z + 4] * c - e[O + 4] * s
      , X = Math.sqrt(x * x + u * u + y * y)
      , N = Math.sqrt(j * j + v * v);
    return ~~(X + a * N + .5)
  }
  function g(e, a, Z) {
    var O = t.b8(e, new W(0, 0, a, Z))
      , c = O.rect.d
      , s = O.rect.v
      , x = d(O.nP, c, s)
      , u = x.hs
      , y = Date.now()
      , j = new Uint16Array(a * Z);
    j.fill(65535);
    for (var v = 0; v < s; v++) {
      for (var X = 0; X < c; X++) {
        var N = v * c + X
          , G = (v << 1) * a + (X << 1)
          , V = u[N];
        if (u[N - c] != V || u[N - 1] != V || u[N + 1] != V || u[N + c] != V)
          V = 65535;
        j[G] = V;
        j[G + 1] = V;
        j[G + a] = V;
        j[G + a + 1] = V
      }
    }
    x.hs = j;
    return x
  }
  function z(e, a) {
    var G = 0
      , Z = e.length;
    while (G != Z && e[G] != a)
      G += 2;
    return G == Z ? -1 : G
  }
  function p(e, G) {
    if (G == e.length - 2) {
      e.pop();
      e.pop()
    } else {
      e[G + 1] = e.pop();
      e[G] = e.pop()
    }
  }
  t.mv.adh = function (e, a, Z, O, c) {
    var s = new Uint32Array(c * 4400)
      , S = [];
    for (var G = 0; G < c; G++)
      S.push([]);
    for (var x = 0; x < Z; x++)
      for (var u = 0; u < a; u++) {
        var G = x * a + u
          , y = G << 2
          , j = O[G]
          , v = 0
          , X = e[y] >>> 4
          , N = e[y + 1] >>> 4
          , V = e[y + 2] >>> 4;
        s[j * 4400 + (X << 8 | N << 4 | V)]++;
        s[j * 4400 + 4096]++;
        s[j * 4400 + 4100 + (X << 4 | N)]++;
        s[j * 4400 + 4360 + X]++;
        if (u != 0 && (v = O[G - 1]) != j && z(S[j], v) == -1) {
          S[j].push(v, 0);
          S[v].push(j, 0)
        }
        if (x != 0 && (v = O[G - a]) != j && z(S[j], v) == -1) {
          S[j].push(v, 0);
          S[v].push(j, 0)
        }
      }
    for (var G = 0; G < c; G++) {
      var V = S[G];
      for (var $ = 0; $ < V.length; $ += 2)
        V[$ + 1] = i(s, G, V[$])
    }
    return [s, S]
  }
    ;
  function C(e, a, Z, O) {
    var c = t.m(Z);
    for (var G = 0; G < O; G++) {
      var s = e[G];
      if (s == 0 || s == 255)
        c[a[G]] = 2 - (s >>> 7)
    }
    return c
  }
  t.mv.aam = function (e, a, Z, O, c, s, x) {
    var u = a * Z
      , y = x[0]
      , S = x[1]
      , j = new UnionFind(O)
      , v = C(c, e, O, u)
      , X = -1
      , N = !0
      , V = 0;
    for (var G = 0; G < O; G++)
      if (v[G] == 1) {
        if (X == -1)
          X = G;
        else
          j.link(G, X)
      }
    if (X == -1) {
      for (var G = 0; G < u; G++)
        s[G] = c[G] == 255 ? 255 : 0;
      return
    }
    while (N) {
      while (N) {
        N = !1;
        for (var G = 0; G < O; G++) {
          if (v[G] == 0) {
            var $ = T(S[G]);
            if (v[$] == 1) {
              v[G] = v[$];
              N = !0;
              j.link(G, $)
            }
          }
        }
      }
      N = !0;
      V = 0;
      while (N) {
        N = !1;
        for (var G = 0; G < O; G++) {
          if (v[G] == 0) {
            var $ = T(S[G]);
            if (v[$] == 0) {
              var w = G * 4400
                , m = $ * 4400;
              for (var l = 0; l < 4400; l += 2) {
                y[w + l] += y[m + l];
                y[w + l + 1] += y[m + l + 1]
              }
              A(S, y, G, $);
              V++;
              v[$] = 3;
              N = !0;
              j.link(G, $)
            }
          }
        }
      }
      N = V != 0
    }
    var b = j.find(X);
    for (var G = 0; G < O; G++)
      v[G] = j.find(G) == b ? 255 : 0;
    for (var G = 0; G < u; G++) {
      s[G] = v[e[G]]
    }
    for (var G = 0; G < u; G++) {
      var $ = c[G];
      if ($ == 0 || $ == 255)
        s[G] = $
    }
  }
    ;
  function T(e) {
    var a = 0
      , Z = 0
      , O = e.length;
    for (var c = 0; c < O; c += 2) {
      var s = e[c + 1];
      if (s > Z) {
        Z = s;
        a = c
      }
    }
    return e[a]
  }
  function A(S, e, a, Z) {
    var O = S[a]
      , c = S[Z];
    p(O, z(O, Z));
    p(c, z(c, a));
    for (var G = 0; G < c.length; G += 2) {
      var s = c[G]
        , x = S[s];
      p(x, z(x, Z));
      if (z(x, a) == -1) {
        x.push(a, 0);
        O.push(s, 0)
      }
    }
    for (var G = 0; G < O.length; G += 2) {
      var s = O[G]
        , x = S[s]
        , u = i(e, a, s);
      O[G + 1] = u;
      x[z(x, a) + 1] = u
    }
  }
  function i(e, a, Z) {
    var O = 0
      , c = 4096
      , s = a * 4400
      , x = Z * 4400;
    for (var u = 0; u < 16; u++) {
      if (e[s + 4360 + u] == 0 || e[x + 4360 + u] == 0)
        continue;
      for (var y = 0; y < 16; y++) {
        var j = u << 4 | y;
        if (e[s + 4100 + j] == 0 || e[x + 4100 + j] == 0)
          continue;
        var v = s + (j << 4)
          , X = x + (j << 4);
        for (var G = 0; G < 16; G++)
          O += Math.sqrt(e[v + G] * e[X + G])
      }
    }
    var N = O / Math.sqrt(e[s + c] * e[x + c]);
    return ~~(999.99999 * N)
  }
  return d
}();

t.oL = {};
t.oL.X7 = function (Y, S, h, q) {
  var H = Y[S] - h[q]
    , I = Y[S + 1] - h[q + 1]
    , E = Y[S + 2] - h[q + 2];
  return Math.sqrt(H * H + I * I + E * E) * (1 / 441.7)
}
  ;
t.oL.getSelection = function (Y, S, h) {
  var q = S * h
    , H = t.m(q)
    , I = !1
    , E = Math.round(h * .7)
    , d = 1
    , B = new Uint32Array(12)
    , n = t.m(12);
  for (var g = 0; g < E; g++)
    for (var z = 0; z < S; z++) {
      if (z < d || g < d || z > S - d - 1 || g > h - d - 1) {
        var G = g * S + z
          , p = G << 2
          , C = 0;
        if (g < d)
          C = 4;
        else if (z > S - d - 1)
          C = 8;
        B[C] += Y[p];
        B[C + 1] += Y[p + 1];
        B[C + 2] += Y[p + 2];
        B[C + 3]++;
        H[G] = 255
      }
    }
  for (var G = 0; G < 12; G += 4)
    for (var T = 0; T < 3; T++)
      n[G + T] = B[G + T] / B[G + 3];
  var A = new Float32Array(q);
  for (var G = 0; G < q; G++) {
    var p = G * 4
      , i = t.oL.X7(Y, p, n, 0)
      , e = t.oL.X7(Y, p, n, 4)
      , a = t.oL.X7(Y, p, n, 8)
      , Z = Math.max(i, Math.max(e, a));
    A[G] = i + e + a - Z
  }
  t.oL.CK(A);
  var O = Date.now()
    , c = new Float32Array(q)
    , s = []
    , x = t.m(q);
  for (var G = 0; G < 3; G++) {
    t.Ft(Y, x, G);
    var u = new Uint16Array(q);
    s.push(u);
    t.oL.ahO(x, H, S, h, u)
  }
  if (I)
    console.log("MBD", Date.now() - O);
  O = Date.now();
  for (var G = 0; G < q; G++)
    c[G] = s[0][G] + s[1][G] + s[2][G];
  t.oL.CK(c);
  for (var G = 0; G < q; G++)
    c[G] += .4 * A[G];
  var y = S >>> 1
    , E = h >>> 1
    , j = 1 / Math.sqrt(y * y + E * E);
  for (var g = 0; g < h; g++)
    for (var z = 0; z < S; z++) {
      var v = z - y
        , X = g - E
        , N = 1 - Math.sqrt(v * v + X * X) * j;
      c[g * S + z] *= N
    }
  if (I)
    console.log("Centeredness", Date.now() - O);
  O = Date.now();
  for (var G = 0; G < q; G++)
    H[G] = c[G] * 255;
  var V = Math.round(S / 120)
    , $ = Math.round(V * .8);
  if (I)
    console.log(V, $);
  t.Ll.hr(H, x, S, h, V, t.Ll.l5, []);
  H.set(x);
  if (I)
    console.log("erosion", Date.now() - O);
  O = Date.now();
  for (var G = 0; G < q; G++)
    c[G] = H[G];
  t.oL.CK(c);
  var w = t.m(256);
  for (var G = 0; G < 256; G++)
    w[G] = 256 / (1 + Math.exp(-20 * (G / 255 - .5)));
  for (var G = 0; G < q; G++) {
    var m = ~~(c[G] * 255 + .5);
    H[G] = w[m]
  }
  if (I)
    console.log("Simoid", Date.now() - O);
  O = Date.now();
  return H
}
  ;
t.oL.CK = function (Y) {
  var S = Y.length
    , h = 0;
  for (var G = 0; G < S; G++)
    h = Math.max(h, Y[G]);
  var q = 1 / h;
  for (var G = 0; G < S; G++)
    Y[G] = Y[G] * q
}
  ;
t.oL.ahO = function (Y, S, h, q, H) {
  var I = h * q
    , E = Y.slice(0)
    , d = Y.slice(0);
  for (var G = 0; G < I; G++)
    H[G] = S[G] == 255 ? 0 : 65535;
  t.oL.DU(Y, d, E, H, h, q);
  t.oL.qg(Y, d, E, H, h, q);
  t.oL.DU(Y, d, E, H, h, q);
  t.oL.qg(Y, d, E, H, h, q);
  return H
}
  ;
t.oL.DU = function (Y, S, h, q, H, I) {
  for (var E = 1; E < H; E++)
    t.oL.dU(E, -1, Y, S, h, q);
  for (var d = 1; d < I; d++) {
    t.oL.dU(d * H, -H, Y, S, h, q);
    for (var E = 1; E < H; E++) {
      var G = d * H + E;
      t.oL.dU(G, -1, Y, S, h, q);
      t.oL.dU(G, -H, Y, S, h, q)
    }
  }
}
  ;
t.oL.qg = function (Y, S, h, q, H, I) {
  for (var E = H - 2; E >= 0; E--)
    t.oL.dU(H * I - H + E, 1, Y, S, h, q);
  for (var d = I - 2; d >= 0; d--) {
    t.oL.dU(d * H + H - 1, H, Y, S, h, q);
    for (var E = H - 2; E >= 0; E--) {
      var G = d * H + E;
      t.oL.dU(G, 1, Y, S, h, q);
      t.oL.dU(G, H, Y, S, h, q)
    }
  }
}
  ;
t.oL.dU = function (G, Y, S, h, q, H) {
  var I = G + Y
    , E = S[G]
    , d = h[I]
    , B = q[I];
  if (d < E)
    d = E;
  else if (E < B)
    B = E;
  var n = d - B;
  if (H[I] != 65535 && n < H[G]) {
    H[G] = n;
    h[G] = d;
    q[G] = B
  }
}
  ;
t.Ll = {};
t.Ll.hr = function () {
  function Y(z, p, C, T, A, i, e) {
    if (A == 0) {
      p.set(z);
      return
    }
    if (A <= 80)
      S(z, p, C, T, A, i, e);
    else
      I(z, p, C, T, A, i, e)
  }
  function S(z, p, C, T, A, i, e) {
    var a = 0
      , Z = new Int32Array(512)
      , O = 1 + 2 * Math.round(Math.sqrt(A))
      , c = O >>> 1
      , s = new Array(O);
    for (var G = 0; G < O; G++)
      s[G] = new Int32Array(512);
    var x = i[0]
      , u = i[1];
    for (var y = 0; y < C; y++)
      if (y < A || y > C - A - O - 1) {
        Z.fill(0);
        a = 0;
        var j = Math.max(y - A, 0)
          , v = Math.min(C, y + A + 1)
          , X = v - j;
        for (var N = 0; N < A; N++) {
          a += X;
          q(Z, z, N * C + j, N * C + v, 1)
        }
        for (var N = 0; N < T; N++) {
          var V = N - A - 1
            , $ = N + A;
          if (V >= 0) {
            a -= X;
            q(Z, z, V * C + j, V * C + v, -1)
          }
          if ($ < T) {
            a += X;
            q(Z, z, $ * C + j, $ * C + v, 1)
          }
          var w = x(Z, z[N * C + y], a, e);
          p[N * C + y] = w
        }
      } else {
        for (var G = 0; G < O; G++)
          s[G].fill(0);
        a = 0;
        var j = y - A + c
          , v = y + A + 1 + c
          , X = v - j;
        for (var N = 0; N < A; N++) {
          a += X;
          h(s, z, N * C + j, N * C + v, 1, c)
        }
        for (var N = 0; N < T; N++) {
          var V = N - A - 1
            , $ = N + A;
          if (V >= 0) {
            a -= X;
            h(s, z, V * C + j, V * C + v, -1, c)
          }
          if ($ < T) {
            a += X;
            h(s, z, $ * C + j, $ * C + v, 1, c)
          }
          for (var G = 0; G < c; G++) {
            var m = c - 1 - G
              , l = c + 1 + G;
            p[N * C + y + m] = u(s[c], s[m], z[N * C + y + m], a, e);
            p[N * C + y + l] = u(s[c], s[l], z[N * C + y + l], a, e)
          }
          p[N * C + y + c] = x(s[c], z[N * C + y + c], a, e)
        }
        y += O - 1
      }
  }
  function h(z, p, C, T, A, i) {
    var e = H;
    e(z[i - 1], p[C - 1], 0, A);
    e(z[i - 1], p[T - 1], 0, -A);
    e(z[i + 1], p[T], 0, A);
    e(z[i + 1], p[C], 0, -A);
    for (var G = 1; G < i; G++) {
      var a = z[i - G - 1]
        , Z = z[i + G + 1];
      for (var O = 0; O <= G; O++) {
        e(a, p[C - 1 - O], 0, A);
        e(a, p[T - 1 - O], 0, -A);
        e(Z, p[T + O], 0, A);
        e(Z, p[C + O], 0, -A)
      }
    }
    q(z[i], p, C, T, A)
  }
  function q(z, p, G, C, T) {
    while (G < C)
      H(z, p[G++], 0, T)
  }
  function H(z, p, C, T) {
    z[C | p] += T;
    z[C | 256 | p >>> 4] += T
  }
  function I(z, p, C, T, A, i, e) {
    var a = 0
      , Z = new Int32Array(512)
      , O = new Int32Array(1 * C)
      , c = new Int32Array(512 * C)
      , s = Math.min(A, C)
      , x = Math.min(A, T)
      , u = i[0];
    for (var y = 0; y < x; y++)
      E(c, O, z, C, y, 1);
    for (var y = 0; y < T; y++) {
      if (y + A < T)
        E(c, O, z, C, y + A, 1);
      if (y - A - 1 >= 0)
        E(c, O, z, C, y - A - 1, -1);
      Z.fill(0);
      a = 0;
      for (var j = 0; j < s; j++) {
        a += O[j];
        d(Z, c, j)
      }
      for (var j = 0; j < C; j++) {
        var v = j - A - 1
          , X = j + A;
        if (v >= 0 && O[v] != 0) {
          a -= O[v];
          B(Z, c, v)
        }
        if (X < C && O[X] != 0) {
          a += O[X];
          d(Z, c, X)
        }
        var N = a == 0 ? 0 : u(Z, z[y * C + j], a, e);
        p[y * C + j] = N
      }
    }
  }
  function E(z, p, C, T, A, i) {
    var G = A * T;
    for (var e = 0; e < T; e++) {
      H(z, C[G + e], e << 9, i);
      p[e] += i
    }
  }
  function d(z, p, C) {
    for (var G = 0; G < 16; G++) {
      var T = p[C << 9 | 256 | G];
      if (T == 0)
        continue;
      z[256 | G] += T;
      var A = G << 4
        , i = C << 9 | A;
      n(z, p, A, i);
      n(z, p, A + 4, i + 4);
      n(z, p, A + 8, i + 8);
      n(z, p, A + 12, i + 12)
    }
  }
  function B(z, p, C) {
    for (var G = 0; G < 16; G++) {
      var T = p[C << 9 | 256 | G];
      if (T == 0)
        continue;
      z[256 | G] -= T;
      var A = G << 4
        , i = C << 9 | A;
      g(z, p, A, i);
      g(z, p, A + 4, i + 4);
      g(z, p, A + 8, i + 8);
      g(z, p, A + 12, i + 12)
    }
  }
  function n(z, p, C, T) {
    z[C] += p[T];
    z[C + 1] += p[T + 1];
    z[C + 2] += p[T + 2];
    z[C + 3] += p[T + 3]
  }
  function g(z, p, C, T) {
    z[C] -= p[T];
    z[C + 1] -= p[T + 1];
    z[C + 2] -= p[T + 2];
    z[C + 3] -= p[T + 3]
  }
  return Y
}();
t.Ll.l5 = [function (Y, S, h, q) {
  var G = 0;
  while (Y[256 | G] == 0 && G < 15)
    G++;
  G = G << 4;
  while (Y[G] == 0 && G < 255)
    G++;
  return G
}
  , function (Y, S, h, q, H) {
    var G = 0;
    while (Y[256 | G] + S[256 | G] == 0 && G < 15)
      G++;
    G = G << 4;
    while (Y[G] + S[G] == 0 && G < 255)
      G++;
    return G
  }
];

t.vx = function (Y, S) {
  var h = Math.min(Y.buffer.byteLength, S.buffer.byteLength)
    , q = h >>> 2
    , Y = new Uint32Array(Y.buffer, 0, q)
    , S = new Uint32Array(S.buffer, 0, q);
  S.set(Y)
}
  ;

t.rd = function (Y, S, h, q, H) {
  if (S.ma(q) && (H == null || H.ma(q))) {
    t.vx(Y, h);
    return
  }
  Y = new Uint32Array(Y.buffer),
    h = new Uint32Array(h.buffer);
  var I = S.lF(q);
  if (H)
    I = I.lF(H);
  var E = Math.max(0, I.x - S.x)
    , d = Math.max(0, I.x - q.x)
    , B = Math.max(0, I.y - S.y)
    , n = Math.max(0, I.y - q.y)
    , g = I.d
    , z = I.v
    , p = g & 3
    , C = p == 0 ? g : g - p;
  for (var G = 0; G < z; G++) {
    var T = (B + G) * S.d + E
      , A = (n + G) * q.d + d;
    h.set(new Uint32Array(Y.buffer, T * 4, g), A)
  }
}
  ;

t.Q = {};
t.Q.c2 = new Float64Array(256);
t.Q.yz = new Uint8Array(256 * 256);
t.Q.DG = new Uint8Array(256 * 256);
(function () {
  for (var G = 0; G < 256; G++)
      t.Q.c2[G] = 255 / G;
  for (var G = 0; G < 256; G++)
      for (var Y = 0; Y < 256; Y++)
          t.Q.yz[G * 256 + Y] = G == 0 ? 0 : Math.round(Y * 255 / G);
  for (var G = 0; G < 256; G++)
      for (var Y = 0; Y < 256; Y++)
          t.Q.DG[G * 256 + Y] = Math.round(G * (255 - Y) / 255)
}());
t.Q.Bc = function (Y, S, h, q, H, I, E, d) {
  if (d == null)
    d = av.$N();
  if ("idiv,lbrn,div ,lddg,vLit,lLit,hMix,diff".split(",").indexOf(Y) == -1) {
    E = E * d.fill;
    d.fill = 1;
    d.style = !1
  }
  var B = "norm,dark,mul ,idiv,lbrn,lite,scrn,div ,lddg,over,sLit,hLit,vLit,lLit,pLit,hMix,diff,smud,fsub,fdiv".split(",")
    , n = "dkCl,lgCl,hue ,sat ,colr,lum ".split(",")
    , g = t.Q[Y + "F"];
  if (d.$P == null && Y == "norm")
    t.Q.aj$(S, h, q, H, I, E, g, d.x6 ? 1 : 0);
  else if (Y == "diss")
    t.Q.aaF(S, h, q, H, I, E, g, d.x6 ? 1 : 0);
  else if (B.indexOf(Y) != -1)
    t.Q.agt(S, h, q, H, I, E, g, d);
  else if (n.indexOf(Y) != -1)
    t.Q.a5s(S, h, q, H, I, E, g, d)
}
  ;
t.Q.aj$ = function (Y, S, h, q, H, I, E, d) {
  var B = S.lF(q).lF(H)
    , n = Math.max(0, B.x - S.x)
    , g = Math.max(0, B.x - q.x)
    , z = Math.max(0, B.y - S.y)
    , p = Math.max(0, B.y - q.y)
    , C = B.d
    , T = B.v
    , A = S.d
    , i = q.d
    , e = t.Q.yz
    , a = t.Q.DG
    , Z = new Uint32Array(Y.buffer)
    , O = new Uint32Array(h.buffer);
  for (var G = 0; G < T; G++) {
    var c = (z + G) * A + n
      , s = (p + G) * i + g;
    for (var x = 0; x < C; x++) {
      var u = Z[c + x]
        , v = 255;
      if (u >>> 24 == 0)
        continue;
      if (u >>> 24 == 255 && I == 1 && d == 0) {
        O[s + x] = Z[c + x];
        continue
      }
      var y = O[s + x]
        , j = 255 * I & 255;
      if (d == 0) {
        j = (u >>> 24) * I & 255;
        v = y >>> 24
      }
      var X = a[v << 8 | j]
        , N = j + X
        , V = u & 255
        , $ = u >>> 8 & 255
        , w = u >>> 16 & 255
        , m = y & 255
        , l = y >>> 8 & 255
        , b = y >>> 16 & 255;
      O[s + x] = d * (y >>> 24) + (1 - d) * N << 24 | e[N << 8 | t.Fi(w * j + b * X)] << 16 | e[N << 8 | t.Fi($ * j + l * X)] << 8 | e[N << 8 | t.Fi(V * j + m * X)]
    }
  }
}
  ;
t.Q.aaF = function (Y, S, h, q, H, I, E, d) {
  var B = 1 / 255
    , n = B * I
    , g = Math.round(I * (256 * 256 * 256 / 255))
    , z = S.lF(q).lF(H)
    , p = Math.max(0, z.x - S.x)
    , C = Math.max(0, z.x - q.x)
    , T = Math.max(0, z.y - S.y)
    , A = Math.max(0, z.y - q.y)
    , i = z.d
    , e = z.v
    , a = new Uint32Array(Y.buffer)
    , Z = new Uint32Array(h.buffer);
  for (var G = 0; G < e; G++) {
    var O = (T + G) * S.d + p
      , c = (A + G) * q.d + C;
    for (var s = 0; s < i; s++,
      O++,
      c++) {
      var x = a[O]
        , u = Z[c]
        , y = d * 255 + (1 - d) * (x >>> 24);
      if ((t.Q.aP(O) & 16777215) >= y * g)
        continue;
      Z[c] = x & 16777215 | d * (u >>> 24) + (1 - d) * 255 << 24
    }
  }
}
  ;
t.Q.aP = function (Y) {
  Y = Y ^ 61 ^ Y >>> 16;
  Y = Y + (Y << 3);
  Y = Y ^ Y >>> 4;
  Y = Y * 668265261;
  Y = Y ^ Y >>> 15;
  return Y
}
  ;
t.Q.agt = function (Y, S, h, q, H, I, E, d) {
  var B = 1 / 255
    , n = B * I
    , g = d.x6 ? 1 : 0
    , z = d.fill
    , p = d.style
    , C = S.lF(q).lF(H)
    , T = Math.max(0, C.x - S.x)
    , A = Math.max(0, C.x - q.x)
    , i = Math.max(0, C.y - S.y)
    , e = Math.max(0, C.y - q.y)
    , a = C.d
    , Z = C.v
    , O = S.d
    , c = q.d
    , s = new Uint32Array(Y.buffer)
    , x = new Uint32Array(h.buffer);
  for (var G = 0; G < Z; G++) {
    var u = (i + G) * O + T
      , y = (e + G) * c + A;
    for (var j = 0; j < a; j++,
      u++,
      y++) {
      var v = s[u]
        , K = 1;
      if (v >>> 24 == 0)
        continue;
      var X = x[y]
        , N = (v & 255) * B
        , V = (v >>> 8 & 255) * B
        , $ = (v >>> 16 & 255) * B
        , w = (X & 255) * B
        , m = (X >>> 8 & 255) * B
        , l = (X >>> 16 & 255) * B
        , b = I;
      if (g == 0) {
        b = (v >>> 24) * n;
        K = (X >>> 24) * B
      }
      if (d.$P)
        b *= t.Q.ls(N, V, $, w, m, l, K, d.$P);
      var J = K * (1 - b)
        , R = b + J
        , r = R == 0 ? 0 : 255 / R
        , f = p ? 1 : b
        , gf = ((1 - K) * b * N + (1 - f) * K * w + f * K * E(N, w, (1 + b - f) * z)) * r
        , aa = ((1 - K) * b * V + (1 - f) * K * m + f * K * E(V, m, (1 + b - f) * z)) * r
        , aA = ((1 - K) * b * $ + (1 - f) * K * l + f * K * E($, l, (1 + b - f) * z)) * r;
      R = b * z + K * (1 - b * z);
      var e5 = ~~(R * 255 + .5);
      x[y] = g * (X >>> 24) + (1 - g) * e5 << 24 | aA << 16 | aa << 8 | gf
    }
  }
}
  ;
t.Q.a5s = function (Y, S, h, q, H, I, E, d) {
  var B = 1 / 255
    , n = B * I
    , g = d.x6 ? 1 : 0
    , z = S.lF(q).lF(H)
    , p = Math.max(0, z.x - S.x)
    , C = Math.max(0, z.x - q.x)
    , T = Math.max(0, z.y - S.y)
    , A = Math.max(0, z.y - q.y)
    , i = z.d
    , e = z.v
    , a = new Uint32Array(Y.buffer)
    , Z = new Uint32Array(h.buffer)
    , O = {
      h: 0,
      l: 0,
      O: 0
    }
    , c = {
      h: 0,
      l: 0,
      O: 0
    }
    , s = {
      h: 0,
      l: 0,
      O: 0
    };
  for (var G = 0; G < e; G++) {
    var x = (T + G) * S.d + p
      , u = (A + G) * q.d + C;
    for (var y = 0; y < i; y++,
      x++,
      u++) {
      var j = a[x]
        , v = Z[u]
        , X = (j & 255) * B
        , N = (j >>> 8 & 255) * B
        , V = (j >>> 16 & 255) * B
        , $ = (v & 255) * B
        , w = (v >>> 8 & 255) * B
        , m = (v >>> 16 & 255) * B
        , l = I
        , b = 1;
      if (g == 0) {
        l = (j >>> 24) * n;
        b = (v >>> 24) * B
      }
      if (d.$P)
        l *= t.Q.ls(X, N, V, $, w, m, b, d.$P);
      var K = b * (1 - l)
        , J = l + K
        , R = 255 / J;
      O.h = X;
      O.l = N;
      O.O = V;
      c.h = $;
      c.l = w;
      c.O = m;
      E(O, c, s);
      var r = (((1 - b) * X + b * s.h) * l + $ * K) * R
        , f = (((1 - b) * N + b * s.l) * l + w * K) * R
        , gf = (((1 - b) * V + b * s.O) * l + m * K) * R
        , aa = g * (v >>> 24) + (1 - g) * Math.round(J * 255);
      Z[u] = aa << 24 | gf << 16 | f << 8 | r
    }
  }
}
  ;
  t.Q.tK = function(Y) {
    Y = Y ^ 61 ^ Y >>> 16;
    Y = Y + (Y << 3);
    Y = Y ^ Y >>> 4;
    Y = Y * 668265261;
    Y = Y ^ Y >> 15;
    return (Y & 16777215) * (1 / 16777215)
}
;

t.AR = {};
t.AR.AR = function (Y, S, h, q, H) {
  if (q == null)
    q = 3;
  if (H == null)
    H = !0;
  var I = Y.d
    , E = Y.v
    , d = 1 / I
    , B = I * E
    , n = Date.now()
    , g = !1
    , z = t.AR.vm(h, I, E, 255, 128)
    , p = t.AR.vm(h, I, E, 0, 128)
    , cs = 0;
  if (g)
    console.log("extract contours", Date.now() - n);
  n = Date.now();
  var C = function (b3, ct) {
    var fQ = b3 << 2
      , cj = ct << 2;
    return S[fQ] + S[fQ + 1] + S[fQ + 2] - (S[cj] + S[cj + 1] + S[cj + 2])
  };
  z.sort(C);
  p.sort(C);
  var T = t.m(B)
    , A = t.m(B)
    , i = []
    , e = new Uint32Array(I * E);
  e.fill(4294967295);
  for (var G = 0; G < B; G++)
    if (h[G] == 0)
      A[G] = 255;
    else if (h[G] == 255)
      T[G] = 255;
    else {
      e[G] = i.length;
      i.push(G)
    }
  var a = z.length
    , Z = p.length
    , O = i.length;
  function c(b3, ct, fQ, cj) {
    var fJ = b3.length
      , cM = new Array(fJ * 2);
    for (var G = 0; G < fJ; G++) {
      var m = b3[G]
        , l = ~~(m * cj)
        , b = m - l * fQ
        , fp = m << 2;
      cM[G * 2] = b << 16 | l;
      cM[G * 2 + 1] = ct[fp] << 16 | ct[fp + 1] << 8 | ct[fp + 2]
    }
    return cM
  }
  var s = c(z, S, I, d)
    , x = c(p, S, I, d)
    , u = c(i, S, I, d);
  if (g)
    console.log("Itemize", Date.now() - n, "Unknown:", O, a, Z);
  n = Date.now();
  var y = t.style.gS(T, I, E, !0)
    , j = t.style.gS(A, I, E, !0)
    , v = new Array(O)
    , X = new Array(O)
    , N = new Array(O)
    , V = new Array(O)
    , $ = new Array(O);
  if (g)
    console.log("Dist transform", Date.now() - n);
  n = Date.now();
  var w = t.AR.aO;
  for (var G = 0; G < O; G++) {
    var m = i[G]
      , l = ~~(m * d)
      , b = m - l * I
      , K = y[m << 1]
      , J = y[(m << 1) + 1]
      , R = Math.sqrt(K * K + J * J)
      , r = j[m << 1]
      , f = j[(m << 1) + 1]
      , gf = Math.sqrt(r * r + f * f);
    v[G] = 1 / R;
    X[G] = 1 / gf;
    var aa = Math.floor(t.Q.tK(m * 17) * a)
      , aA = Math.floor(t.Q.tK(m * 19) * Z);
    N[G] = aa;
    V[G] = aA;
    $[G] = w(u[G * 2], u[G * 2 + 1], s[aa * 2], s[aa * 2 + 1], x[aA * 2], x[aA * 2 + 1], v[G], X[G], 1e9)
  }
  var e5 = [-I - 1, -I, -I + 1, -1, 1, I - 1, I, I + 1];
  while (Math.floor(Math.max(a, Z) * Math.pow(.5, cs)) > 1)
    cs++;
  for (var fk = 0; fk < q; fk++) {
    var o = 0;
    for (var G = 0; G < O; G++) {
      var m = i[G]
        , l = ~~(m * d)
        , b = m - l * I
        , eY = v[G]
        , du = X[G]
        , dV = u[G * 2]
        , hy = u[G * 2 + 1]
        , bq = $[G]
        , aa = N[G]
        , aA = V[G]
        , gF = 1;
      if (l != 0 && b != 0 && b != I - 1 && l != E - 1)
        for (var i5 = 0; i5 < 8; i5++) {
          var hX = e[m + e5[i5]];
          if (hX == 4294967295)
            continue;
          var bY = N[hX]
            , ds = V[hX];
          if (bY == aa && ds == aA)
            continue;
          var hV = w(dV, hy, s[bY * 2], s[bY * 2 + 1], x[ds * 2], x[ds * 2 + 1], eY, du, bq);
          if (hV < bq) {
            bq = hV;
            aa = bY;
            aA = ds
          }
        }
      for (var co = 0; co < cs; co++) {
        var c_ = ~~(a * gF)
          , a5 = ~~(Z * gF);
        gF *= .5;
        var gb = t.Q.tK(m + fk * 17 + co * 31)
          , iC = t.Q.tK(m + fk * 29 + co * 63)
          , cC = Math.max(0, aa - c_)
          , aB = Math.min(aa + c_, a - 1)
          , cd = Math.max(0, aA - a5)
          , dZ = Math.min(aA + a5, Z - 1)
          , bY = cC + ~~(gb * (aB - cC))
          , ds = cd + ~~(iC * (dZ - cd))
          , hV = w(dV, hy, s[bY * 2], s[bY * 2 + 1], x[ds * 2], x[ds * 2 + 1], eY, du, bq);
        if (hV < bq) {
          bq = hV;
          aa = bY;
          aA = ds
        }
      }
      $[G] = bq;
      N[G] = aa;
      V[G] = aA;
      o += bq
    }
  }
  if (g)
    console.log(o);
  if (g)
    console.log("iterations", Date.now() - n);
  n = Date.now();
  var en = h.slice(0);
  for (var G = 0; G < O; G++) {
    var cD = t.AR.alpha(u[G * 2 + 1], s[N[G] * 2 + 1], x[V[G] * 2 + 1]);
    en[i[G]] = ~~(.5 + 255 * cD)
  }
  en = t.Za.aj2(en, S, new W(0, 0, I, E), 16, .01 * .01);
  if (g)
    console.log("guided filter", Date.now() - n);
  n = Date.now();
  if (H)
    for (var G = 0; G < B; G++)
      if (h[G] == 255 || h[G] == 0)
        en[G] = h[G];
  var hP = S.slice(0);
  for (var G = 0; G < O; G++) {
    var ea = i[G]
      , aa = z[N[G]]
      , bq = $[G]
      , fp = ea << 2
      , bC = en[ea]
      , hG = (bC >= 250 ? ea : aa) << 2;
    hP[fp] = S[hG];
    hP[fp + 1] = S[hG + 1];
    hP[fp + 2] = S[hG + 2]
  }
  t.Vj(en, hP, 3);
  if (g)
    console.log(Date.now() - n);
  n = Date.now();
  return hP
}
  ;

t.AR.aO = function (Y, S, h, q, H, I, E, d, B) {
  var n = Y >>> 16
    , g = Y & 65535
    , z = n - (h >>> 16)
    , p = g - (h & 65535)
    , C = n - (H >>> 16)
    , T = g - (H & 65535)
    , A = Math.sqrt(z * z + p * p) * E
    , i = Math.sqrt(C * C + T * T) * d;
  if (A + i >= B)
    return 1e9;
  var e = t.AR.agH(S, q, I);
  return e + A + i
}
  ;
t.AR.agH = function (Y, S, h) {
  var q = Y >>> 16
    , H = Y >>> 8 & 255
    , I = Y & 255
    , E = S >>> 16
    , d = S >>> 8 & 255
    , B = S & 255
    , n = h >>> 16
    , g = h >>> 8 & 255
    , z = h & 255
    , p = t.AR.alpha(Y, S, h)
    , C = q - (p * E + (1 - p) * n)
    , T = H - (p * d + (1 - p) * g)
    , A = I - (p * B + (1 - p) * z);
  return Math.sqrt(C * C + T * T + A * A)
}
  ;
t.AR.alpha = function (Y, S, h) {
  var q = Y >>> 16
    , H = Y >>> 8 & 255
    , I = Y & 255
    , E = S >>> 16
    , d = S >>> 8 & 255
    , B = S & 255
    , n = h >>> 16
    , g = h >>> 8 & 255
    , z = h & 255
    , p = E - n
    , C = d - g
    , T = B - z
    , A = q - n
    , i = H - g
    , e = I - z
    , a = p * p + C * C + T * T
    , Z = a == 0 ? .5 : (A * p + i * C + e * T) / a;
  return Math.max(0, Math.min(1, Z))
}
  ;
t.AR.ajL = function (Y) { }
  ;
t.AR.vm = function (Y, S, h, q, H) {
  var I = []
    , E = S - 1
    , d = h - 1;
  for (var B = 1; B < d; B++)
    for (var n = 1; n < E; n++) {
      var G = B * S + n;
      if (Y[G] == q && (Y[G - S - 1] == H || Y[G - S] == H || Y[G - S + 1] == H || (Y[G - 1] == H || Y[G + 1] == H) || (Y[G + S - 1] == H || Y[G + S] == H || Y[G + S + 1] == H)))
        I.push(G)
    }
  return I
}
  ;

  t.style = {};
  t.style.stroke = function(Y, S, h, q) {
      var H = h.d
        , I = h.v
        , E = new Float64Array(H * I);
      t.style.Xo(Y, E, H, I);
      t.style.kT(S, h, E, h, q)
  }
  ;
  t.style.kT = function(Y, S, h, q, H) {
      var I = S.lF(q)
        , E = I.d
        , d = I.v;
      H += .5;
      var B = I.x - S.x
        , n = I.y - S.y
        , g = S.d
        , z = I.x - q.x
        , p = I.y - q.y
        , C = q.d;
      for (var T = 0; T < d; T++) {
          var A = (T + p) * C + z
            , i = (T + n) * g + B;
          for (var e = 0; e < E; e++) {
              var a = Math.max(0, Math.min(1, H - h[A + e]));
              Y[i + e] = Math.round(a * 255)
          }
      }
  }
  ;
  t.style.ag4 = function(Y, S, h, q) {
      for (var H = 0; H < h; H++)
          for (var I = 0; I < S; I++) {
              var E = H * S + I
                , d = 0
                , B = 0
                , n = Y[E];
              if (I == 0 || H == 0) {
                  d = Y[E + 1] - n;
                  B = Y[E + S] - n
              } else if (I == h - 1 || H == S - 1) {
                  d = n - Y[E - 1];
                  B = n - Y[E - S]
              } else {
                  d = Y[E + 1] - Y[E - 1];
                  B = Y[E + S] - Y[E - S]
              }
              if (d != 0 || B != 0) {
                  var g = 1 / Math.sqrt(d * d + B * B);
                  d *= g;
                  B *= g
              }
              q[E + E] = d;
              q[E + E + 1] = B
          }
  }
  ;
  t.style.Xo = function(Y, S, h, q) {
      var H = 0
        , I = h * q;
      for (var G = 0; G < I; G++)
          H |= Y[G];
      if (H == 0) {
          S.fill(1e9);
          return
      }
      var E = t.style.gS(Y, h, q);
      for (var d = 0; d < q; d++)
          for (var B = 0; B < h; B++) {
              var G = d * h + B
                , n = E[G * 2]
                , g = E[G * 2 + 1]
                , z = (d + g) * h + B + n;
              if (n == 0 && g == 0) {
                  S[G] = 0;
                  continue
              }
              var p = Math.sqrt(n * n + g * g)
                , C = Y[z] * (1 / 255)
                , T = 1 / p
                , A = Math.abs(n) * T
                , i = Math.abs(g) * T;
              if (i > A) {
                  var e = i;
                  i = A;
                  A = e
              }
              S[G] = p + t.style.aga(A, i, C)
          }
  }
  ;
  t.style.aga = function(Y, S, h) {
      return (.5 - h) * Y
  }
  ;
  t.style.gS = function(Y, S, h, q) {
      if (q == null) {
          q = !0;
          for (var G = 0; G < Y.length; G++)
              q = q && (Y[G] == 0 || Y[G] == 255)
      }
      var H = new Int16Array(S * h * 2);
      if (q)
          t.style.a3o(Y, H, S, h);
      else
          t.style.anJ(Y, H, S, h);
      return H
  }
  ;
  t.style.anJ = function(Y, S, h, q) {
      var H = h * q;
      for (var G = 0; G < H; G++)
          if (Y[G] == 0) {
              S[G * 2] = 16383;
              S[G * 2 + 1] = 16383
          }
      for (var I = 1; I <= q - 1; I++) {
          var G = I * h;
          for (var E = 0; E <= h - 1; E++)
              t.style.Is(S, Y, h, G + E << 1, -1);
          for (var E = 1; E <= h - 1; E++)
              t.style.vw(S, Y, h, G + E << 1, -1);
          for (var E = h - 2; E >= 0; E--)
              t.style.vw(S, Y, h, G + E << 1, 1)
      }
      for (var I = q - 2; I >= 0; I--) {
          var G = I * h;
          for (var E = 0; E <= h - 1; E++)
              t.style.Is(S, Y, h, G + E << 1, 1);
          for (var E = 1; E <= h - 1; E++)
              t.style.vw(S, Y, h, G + E << 1, -1);
          for (var E = h - 2; E >= 0; E--)
              t.style.vw(S, Y, h, G + E << 1, 1)
      }
  }
  ;
  t.style.vw = function(Y, S, h, q, H) {
      var I = (q >>> 1) + H << 1
        , E = Y[q]
        , d = Y[q + 1]
        , B = Y[I] + H
        , n = Y[I + 1]
        , g = B * B + n * n
        , z = E * E + d * d;
      if (n != 16383 && (E == 16383 || Math.sqrt(g) + (.5 - S[(q >>> 1) + n * h + B] * (1 / 255)) < Math.sqrt(z) + (.5 - S[(q >>> 1) + d * h + E] * (1 / 255)))) {
          Y[q] = B;
          Y[q + 1] = n
      }
  }
  ;
  t.style.Is = function(Y, S, h, q, H) {
      var I = (q >>> 1) + H * h << 1
        , E = Y[q]
        , d = Y[q + 1]
        , B = Y[I]
        , n = Y[I + 1] + H
        , g = B * B + n * n
        , z = E * E + d * d;
      if (B != 16383 && (E == 16383 || Math.sqrt(g) + (.5 - S[(q >>> 1) + n * h + B] * (1 / 255)) < Math.sqrt(z) + (.5 - S[(q >>> 1) + d * h + E] * (1 / 255)))) {
          Y[q] = B;
          Y[q + 1] = n
      }
  }
  ;
  t.style.a3o = function(Y, S, h, q) {
      var H = h * q;
      for (var G = 0; G < H; G++)
          if (Y[G] == 0) {
              S[G * 2] = 16383;
              S[G * 2 + 1] = 16383
          }
      for (var I = 1; I <= q - 1; I++) {
          var G = I * h;
          for (var E = 0; E <= h - 1; E++)
              t.style.Ux(S, Y, h, G + E << 1, -1);
          for (var E = 1; E <= h - 1; E++)
              t.style.bP(S, Y, h, G + E << 1, -1);
          for (var E = h - 2; E >= 0; E--)
              t.style.bP(S, Y, h, G + E << 1, 1)
      }
      for (var I = q - 2; I >= 0; I--) {
          var G = I * h;
          for (var E = 0; E <= h - 1; E++)
              t.style.Ux(S, Y, h, G + E << 1, 1);
          for (var E = 1; E <= h - 1; E++)
              t.style.bP(S, Y, h, G + E << 1, -1);
          for (var E = h - 2; E >= 0; E--)
              t.style.bP(S, Y, h, G + E << 1, 1)
      }
  }
  ;
  t.style.bP = function(Y, S, h, q, H) {
      var I = (q >>> 1) + H << 1
        , E = Y[q]
        , d = Y[q + 1]
        , B = Y[I] + H
        , n = Y[I + 1]
        , g = B * B + n * n
        , z = E * E + d * d;
      if (n != 16383 && (E == 16383 || g < z)) {
          Y[q] = B;
          Y[q + 1] = n
      }
  }
  ;
  t.style.Ux = function(Y, S, h, q, H) {
      var I = (q >>> 1) + H * h << 1
        , E = Y[q]
        , d = Y[q + 1]
        , B = Y[I]
        , n = Y[I + 1] + H
        , g = B * B + n * n
        , z = E * E + d * d;
      if (B != 16383 && (E == 16383 || g < z)) {
          Y[q] = B;
          Y[q + 1] = n
      }
  }
  ;
  t.style.a1Y = function(Y, S, h, q, H) {
      var I = h * q
        , E = (h + q + 1) * 1.01;
      for (var G = 0; G < I; G++)
          if (Y[G] <= H)
              S[G] = E;
      for (var d = 1; d < h; d++)
          S[d] = Math.min(S[d], S[d - 1]);
      for (var B = 1; B < q; B++) {
          var G = B * h;
          S[G] = Math.min(S[G], Math.min(S[G - h] + 1, S[G - h + 1] + Math.SQRT2));
          for (var d = 1; d < h - 1; d++) {
              var n = S[++G]
                , g = Math.min(S[G - 1] + 1, Math.min(S[G - h - 1] + Math.SQRT2, Math.min(S[G - h] + 1, S[G - h + 1] + Math.SQRT2)));
              if (g < n)
                  S[G] = g
          }
          G++;
          S[G] = Math.min(S[G], Math.min(S[G - 1] + 1, Math.min(S[G - h - 1] + Math.SQRT2, S[G - h] + 1)))
      }
      for (var d = h - 2; d >= 0; d--)
          S[d + I - h] = Math.min(S[d + I - h], S[d + I - h + 1]);
      for (var B = q - 2; B >= 0; B--) {
          var G = B * h + h - 1;
          S[G] = Math.min(S[G], Math.min(S[G + h] + 1, S[G + h - 1] + Math.SQRT2));
          for (var d = h - 2; d >= 1; d--) {
              var n = S[--G]
                , g = Math.min(S[G + 1] + 1, Math.min(S[G + h - 1] + Math.SQRT2, Math.min(S[G + h] + 1, S[G + h + 1] + Math.SQRT2)));
              if (g < n)
                  S[G] = g
          }
          G--;
          S[G] = Math.min(S[G], Math.min(S[G + 1] + 1, Math.min(S[G + h] + 1, S[G + h + 1] + Math.SQRT2)))
      }
  }
  ;
  t.style.aog = function(Y, S, h, q, H) {
      var I = new Int32Array(h * q);
      t.style.ahG(Y, I, h, q, H);
      t.style.ag3(I, S, h, q)
  }
  ;
  t.style.ahG = function(Y, S, h, q, H) {
      var I = new Int32Array(q);
      for (var E = 0; E < h; E++) {
          var d = h + q;
          for (var B = q - 1; B >= 0; B--) {
              if (Y[B * h + E] > H)
                  d = 0;
              else
                  d++;
              I[B] = d
          }
          d = h + q;
          for (var B = 0; B < q; B++) {
              if (Y[B * h + E] > H)
                  d = 0;
              else
                  d++;
              S[B * h + E] = d < I[B] ? -d : I[B]
          }
      }
  }
  ;
  t.style.ag3 = function(Y, S, h, q) {
      var H = (h + q) * (h + q)
        , I = new Float64Array(h)
        , E = new Uint16Array(h);
      for (var d = 0; d < q; d++) {
          var B = d * h
            , n = 0;
          E[0] = 0;
          I[0] = -H;
          I[1] = +H;
          for (var g = 1; g < h; g++) {
              var z = Y[g + B] * Y[g + B] + g * g
                , p = (z - (Y[E[n] + B] * Y[E[n] + B] + E[n] * E[n])) / (2 * g - 2 * E[n]);
              while (p <= I[n]) {
                  n--;
                  p = (z - (Y[E[n] + B] * Y[E[n] + B] + E[n] * E[n])) / (2 * g - 2 * E[n])
              }
              n++;
              E[n] = g;
              I[n] = p;
              I[n + 1] = H
          }
          n = 0;
          for (var g = 0; g < h; g++) {
              while (I[n + 1] < g)
                  n++;
              var C = E[n] - g
                , T = Y[E[n] + B]
                , G = d * h + g << 1;
              S[G] = C;
              S[G + 1] = T
          }
      }
  }
  ;
  t.style.vA = function(Y, S, h) {
      if (h)
          for (var G = 0; G < Y.length; G++) {
              var q = Y[G];
              if (q > 0)
                  Y[G] = Math.max(0, Math.min(255, q + S * 2 * (t.style.tK(G) - 128)))
          }
      else
          for (var G = 0; G < Y.length; G++) {
              var q = Y[G];
              if (q > 0)
                  Y[G] = Math.max(0, Math.min(255, q + Math.min(q * 3, S * 2 * (t.style.tK(G) - 128))))
          }
  }
  ;
  t.style.tK = function(Y) {
      Y = Y ^ 61 ^ Y >> 16;
      Y = Y + (Y << 3);
      Y = Y ^ Y >> 4;
      Y = Y * 668265261;
      Y = Y ^ Y >> 15;
      return Y & 255
  }
  ;

  t.Za = {};
  t.Za.ae$ = function(Y, S, h, q, H) {
    var I = h.d, E = h.v, d = I * E, B = t.Za.nE, n = t.m(d * 4), g;
    t.A5(n, 4294967295);
    var z = h
      , p = Y
      , C = S
      , T = q;
    t.Vj(Y, n, 0);
    g = t.ga(n, h);
    g = t.ga(g.nP, g.rect);
    z = g.rect;
    T = q >>> 2;
    console.log(z, T);
    p = t.m(z.e());
    t.Ft(g.nP, p, 0);
    t.Vj(S, n, 0);
    g = t.ga(n, h);
    g = t.ga(g.nP, g.rect);
    C = t.m(z.e());
    t.Ft(g.nP, C, 0);
    var A = t.Za.ank(p, C, z, T, H)
      , i = A[0]
      , e = A[1]
      , a = new W(0,0,z.d * 2,z.v * 2);
    i = B(i, z, a, !0);
    i = B(i, a, h, !0);
    e = B(e, z, a, !0);
    e = B(e, a, h, !0);
    var Z = t.m(d);
    for (var G = 0; G < d; G++)
        Z[G] = Math.max(0, Math.min(255, Math.floor(.5 + (i[G] * S[G] + 255 * e[G]))));
    return Z
}
;
t.Za.nE = function(Y, S, h, q) {
    var H = h.d
      , I = h.v
      , E = S.d
      , d = S.v
      , B = t.Za.a5
      , n = new Float32Array(H * I);
    for (var g = 0; g < d; g++) {
        var z = (g + g) * H;
        for (var p = 0; p < E; p++) {
            if (!0 || p == 0 || g == 0 || p == E - 1 || g == d - 1)
                n[z] = n[z + 1] = n[z + H] = n[z + H + 1] = Y[g * E + p];
            else {
                n[z] = B(p + .25, g + .25, Y, E, d);
                n[z + 1] = B(p + .75, g + .25, Y, E, d);
                n[z + H] = B(p + .25, g + .75, Y, E, d);
                n[z + H + 1] = B(p + .75, g + .75, Y, E, d)
            }
            z += 2
        }
    }
    return n
}
;
t.Za.a5 = function(Y, S, h, q, H) {
    Y -= .499999;
    S -= .499999;
    var I = Math.floor(Y)
      , E = Math.floor(S)
      , d = E * q + I
      , B = Y - I
      , n = S - E
      , g = (1 - n) * (1 - B)
      , z = (1 - n) * B
      , p = n * (1 - B)
      , C = n * B;
    if (h[d] == null || h[d + q + 1] == null) {
        console.log(Y, S, q, H);
        throw "e"
    }
    return g * h[d + 0] + z * h[d + 1] + p * h[d + q + 0] + C * h[d + q + 1]
}
;
t.Za.ank = function(Y, S, h, q, H) {
    var I = h.d
      , E = h.v
      , d = I * E
      , B = t.Za.AU
      , n = t.Za.m
      , g = t.n8.UY
      , z = t.Za.Nx
      , S = B(S)
      , Y = B(Y)
      , p = n(d);
    g(S, p, h, q);
    var C = n(d);
    g(Y, C, h, q);
    var T = n(d);
    z(S, S, T);
    g(T, T, h, q);
    var A = n(d);
    z(S, Y, A);
    g(A, A, h, q);
    var i = n(d)
      , e = n(d);
    for (var G = 0; G < d; G++) {
        var a = p[G]
          , Z = C[G]
          , O = T[G] - a * a
          , c = A[G] - a * Z
          , s = c / (O + H)
          , x = Z - s * a;
        i[G] = s;
        e[G] = x
    }
    var u = n(d);
    g(i, u, h, q);
    var y = n(d);
    g(e, y, h, q);
    return [u, y]
}
;
t.Za.aj2 = function(Y, S, h, q, H) {
    var I = h.d
      , E = h.v
      , d = I * E
      , B = t.Za.nE
      , n = Date.now()
      , g = !1
      , z = h
      , p = Y
      , C = S
      , T = q;
    z = new W(0,0,I >>> 2,E >>> 2);
    T = q >>> 2;
    p = t.Za.aiN(Y, I, E);
    C = t.Za.afB(S, I, E);
    if (g)
        console.log(Date.now() - n);
    n = Date.now();
    var A = t.Za.a6L(p, C, z, T, H)
      , i = A[0]
      , e = A[1]
      , a = A[2]
      , Z = A[3];
    if (g)
        console.log(Date.now() - n);
    n = Date.now();
    var O = t.m(d);
    for (var c = 0; c < E; c++)
        for (var s = 0; s < I; s++) {
            var G = c * I + s
              , x = (c >>> 2) * (I >>> 2) + (s >>> 2)
              , u = G << 2
              , y = i[x] * S[u] + e[x] * S[u + 1] + a[x] * S[u + 2] + Z[x] * 255;
            O[G] = Math.max(0, Math.min(255, ~~(.5 + y)))
        }
    if (g)
        console.log(Date.now() - n);
    n = Date.now();
    return O
}
;
t.Za.aiN = function(Y, S, h) {
    var q = S >>> 2
      , H = h >>> 2
      , I = t.m(S * h);
    for (var E = 0; E < H; E++)
        for (var d = 0; d < q; d++)
            I[E * q + d] = Y[E * S + d << 2];
    return I
}
;
t.Za.afB = function(Y, S, h) {
    var q = S >>> 2
      , H = h >>> 2
      , I = t.m(S * h * 4);
    for (var E = 0; E < H; E++)
        for (var d = 0; d < q; d++) {
            var B = E * q + d << 2
              , n = E * S + d << 4;
            I[B] = Y[n];
            I[B + 1] = Y[n + 1];
            I[B + 2] = Y[n + 2];
            I[B + 3] = Y[n + 3]
        }
    return I
}
;
t.Za.a6L = function(Y, S, h, q, H) {
    var I = h.d
      , E = h.v
      , d = I * E
      , B = t.Za.AU
      , n = t.Za.m
      , g = t.n8.UY
      , z = t.Za.Nx
      , Y = B(Y)
      , p = new t.ho(I * E);
    t.vK(S, p);
    var S = [B(p.h), B(p.l), B(p.O)]
      , C = t.Za.abr(Y, S, h, q, H)
      , T = n(d);
    g(Y, T, h, q);
    var A = n(d);
    z(S[0], Y, A);
    g(A, A, h, q);
    var i = n(d);
    z(S[1], Y, i);
    g(i, i, h, q);
    var e = n(d);
    z(S[2], Y, e);
    g(e, e, h, q);
    var a = n(d)
      , Z = n(d)
      , O = n(d)
      , c = n(d);
    for (var G = 0; G < d; G++) {
        var s = T[G]
          , x = C.E2[G]
          , u = C.FU[G]
          , y = C.kj[G]
          , j = A[G] - x * s
          , v = i[G] - u * s
          , X = e[G] - y * s;
        a[G] = C.agn[G] * j + C.uf[G] * v + C.cZ[G] * X;
        Z[G] = C.uf[G] * j + C.aiM[G] * v + C.n0[G] * X;
        O[G] = C.cZ[G] * j + C.n0[G] * v + C.a89[G] * X;
        c[G] = s - a[G] * x - Z[G] * u - O[G] * y
    }
    g(a, a, h, q);
    g(Z, Z, h, q);
    g(O, O, h, q);
    g(c, c, h, q);
    return [a, Z, O, c]
}
;
t.Za.abr = function(Y, S, h, q, H) {
    var I = h.d
      , E = h.v
      , d = I * E
      , B = t.Za.m
      , n = t.n8.UY
      , g = t.Za.Nx
      , z = {};
    z.E2 = B(d);
    n(S[0], z.E2, h, q);
    z.FU = B(d);
    n(S[1], z.FU, h, q);
    z.kj = B(d);
    n(S[2], z.kj, h, q);
    var p = B(d);
    g(S[0], S[0], p);
    n(p, p, h, q);
    var C = B(d);
    g(S[0], S[1], C);
    n(C, C, h, q);
    var T = B(d);
    g(S[0], S[2], T);
    n(T, T, h, q);
    var A = B(d);
    g(S[1], S[1], A);
    n(A, A, h, q);
    var i = B(d);
    g(S[1], S[2], i);
    n(i, i, h, q);
    var e = B(d);
    g(S[2], S[2], e);
    n(e, e, h, q);
    z.agn = p;
    z.uf = C;
    z.cZ = T;
    z.aiM = A;
    z.n0 = i;
    z.a89 = e;
    for (var G = 0; G < d; G++) {
        var a = z.E2[G]
          , Z = z.FU[G]
          , O = z.kj[G]
          , c = p[G] - a * a + H
          , s = C[G] - a * Z
          , x = T[G] - a * O
          , u = A[G] - Z * Z + H
          , y = i[G] - Z * O
          , j = e[G] - O * O + H
          , v = u * j - y * y
          , X = y * x - s * j
          , N = s * y - u * x
          , V = c * j - x * x
          , $ = x * s - c * y
          , w = c * u - s * s
          , m = v * c + X * s + N * x
          , l = 1 / m;
        z.agn[G] = v * l;
        z.uf[G] = X * l;
        z.cZ[G] = N * l;
        z.aiM[G] = V * l;
        z.n0[G] = $ * l;
        z.a89[G] = w * l
    }
    return z
}
;
t.Za.m = function(Y) {
    return new Float32Array(Y)
}
;
t.Za.AU = function(Y) {
    var S = Y.length
      , h = new Float32Array(S);
    for (var G = 0; G < S; G++)
        h[G] = Y[G] * (1 / 255);
    return h
}
;
t.Za.Nx = function(Y, S, h) {
    for (var G = 0; G < Y.length; G++)
        h[G] = Y[G] * S[G]
}
;

t.n8 = {};
  t.n8.Ri = function(Y) {
      if (t.n8.zL.length < Y)
          t.n8.zL = t.m(Y);
      return t.n8.zL
  }
  ;
  t.n8.zL = t.m(0);
  t.n8.Pc = function(Y) {
      if (t.n8.tw.length < Y)
          t.n8.tw = new Float32Array(Y);
      return t.n8.tw
  }
  ;
  t.n8.tw = new Float32Array(0);
  t.n8.NC = function(Y, S, h, q) {
      var H = h.d
        , I = h.v;
      t.n8.amb(Y, S, H, I, q)
  }
  ;
  t.n8.MQ = function(Y, S, h, q) {
      var H = h.d
        , I = h.v;
      t.n8.aas(Y, S, H, I, q)
  }
  ;
  t.n8.ada = function(Y, S, h) {
      var q = S.d
        , H = S.v;
      t.n8.anG(Y, q, H, h)
  }
  ;
  t.n8.SL = function(Y, S, h, q, H) {
      var I = h.d
        , E = h.v;
      t.n8.ajj(Y, S, I, E, q, H)
  }
  ;
  t.n8.bc = function(Y, S, h, q) {
      var H = h.d
        , I = h.v;
      q = Math.round(q);
      var E = t.n8.Ri(H * I);
      t.vx(Y, S);
      t.n8.qO(S, E, H, I, q)
  }
  ;
  t.n8.nk = function(Y, S, h) {
      var q = S.d
        , H = S.v;
      h = Math.round(h);
      var I = t.n8.Ri(q * H * 4);
      t.n8.ZJ(Y, I, q, H, h)
  }
  ;
  t.n8.UY = function(Y, S, h, q) {
      var H = h.d
        , I = h.v;
      q = Math.round(q);
      var E = t.n8.Pc(H * I);
      t.vx(Y, S);
      t.n8.Xa(S, E, H, I, q)
  }
  ;
  t.n8.S1 = function(Y, S, h) {
      var q = S.d
        , H = S.v;
      h = Math.round(h);
      var I = t.n8.Ri(q * H * 4);
      t.n8.Oc(Y, I, q, H, h);
      t.vx(I, Y)
  }
  ;
  t.n8.Ve = function(Y, D) {
      var S = Math.sqrt(12 * Y * Y / D + 1)
        , h = Math.floor(S);
      if (h % 2 == 0)
          h--;
      var q = h + 2
        , H = (12 * Y * Y - D * h * h - 4 * D * h - 3 * D) / (-4 * h - 4)
        , I = Math.round(H)
        , E = [];
      for (var G = 0; G < D; G++)
          E.push(G < I ? h : q);
      return E
  }
  ;
  t.n8.amb = function(Y, S, h, q, H) {
      var I = t.n8.Ve(H, 3)
        , E = t.n8.Ri(h * q);
      t.vx(Y, S);
      t.n8.qO(S, E, h, q, I[0] - 1 >> 1);
      t.n8.qO(S, E, h, q, I[1] - 1 >> 1);
      t.n8.qO(S, E, h, q, I[2] - 1 >> 1)
  }
  ;
  t.n8.aas = function(Y, S, h, q, H) {
      var I = t.n8.Ve(H, 2)
        , E = t.n8.Ri(h * q);
      t.vx(Y, S);
      t.n8.qO(S, E, h, q, I[0] - 1 >> 1);
      t.n8.qO(S, E, h, q, I[1] - 1 >> 1)
  }
  ;
  t.n8.anG = function(Y, S, h, q) {
      var H = t.n8.Ve(q, 3)
        , I = t.n8.Ri(S * h * 4);
      t.n8.ZJ(Y, I, S, h, H[0] - 1 >> 1);
      t.n8.ZJ(Y, I, S, h, H[1] - 1 >> 1);
      t.n8.ZJ(Y, I, S, h, H[2] - 1 >> 1)
  }
  ;
  t.n8.ajj = function(Y, S, h, q, H, I) {
      if (I == null)
          I = 3;
      var E = t.n8.Ve(H, I)
        , d = t.n8.Pc(h * q);
      t.vx(Y, S);
      for (var G = 0; G < I; G++)
          t.n8.Xa(S, d, h, q, (E[G] - 1) / 2)
  }
  ;
  t.n8.qO = function(Y, S, h, q, H) {
      t.n8.anA(Y, S, h, q, H);
      t.n8.a2q(S, Y, h, q, H)
  }
  ;
  t.n8.ZJ = function(Y, S, h, q, H) {
      t.n8.Oc(Y, S, h, q, H);
      t.n8.aaV(S, Y, h, q, H)
  }
  ;
  t.n8.Xa = function(Y, S, h, q, H) {
      t.n8.a6R(Y, S, h, q, H);
      t.n8.ajN(S, Y, h, q, H)
  }
  ;
  t.n8.dR = [];
  t.n8.gD = function(Y) {
      if (t.n8.dR[Y])
          return t.n8.dR[Y];
      var S = 1 / (Y + Y + 1)
        , h = (Y + Y + 1) * 256
        , q = t.m(h);
      for (var G = 0; G < h; G++)
          q[G] = Math.round(G * S);
      t.n8.dR[Y] = q;
      return q
  }
  ;
  t.n8.anA = function(Y, S, h, q, H) {
      var I = 1 / (H + H + 1)
        , E = h - H - H - 1
        , d = t.n8.gD(H);
      for (var G = 0; G < q; G++) {
          var B = G * h
            , n = B
            , g = B + H
            , z = Y[B]
            , p = Y[B + h - 1]
            , C = (H + 1) * z;
          for (var T = 0; T < H; T++)
              C += Y[B + T];
          for (var T = 0; T <= H; T++) {
              C += Y[g + T] - z;
              S[B + T] = d[C]
          }
          g += H + 1;
          B += H + 1;
          for (var T = 0; T < E; T++) {
              C += Y[g + T] - Y[n + T];
              S[B + T] = d[C]
          }
          g += E;
          n += E;
          B += E;
          for (var T = h - H; T < h; T++) {
              C += p - Y[n++];
              S[B++] = d[C]
          }
      }
  }
  ;
  t.n8.Oc = function(Y, S, h, q, H) {
      var I = h << 2
        , E = H << 2
        , d = 1 / (H + H + 1)
        , B = h - H - H - 1
        , n = B << 2
        , g = t.n8.gD(H);
      for (var G = 0; G < q; G++) {
          var z = G * I
            , p = z
            , C = z + E
            , T = z + I
            , A = Y[z]
            , i = Y[z + 1]
            , e = Y[z + 2]
            , a = Y[z + 3]
            , Z = (H + 1) * A
            , O = (H + 1) * i
            , c = (H + 1) * e
            , s = (H + 1) * a;
          for (var x = 0; x < E; x += 4) {
              Z += Y[z + x];
              O += Y[z + x + 1];
              c += Y[z + x + 2];
              s += Y[z + x + 3]
          }
          for (var x = 0; x <= E; x += 4) {
              Z += Y[C] - A;
              S[z] = g[Z];
              O += Y[C + 1] - i;
              S[z + 1] = g[O];
              c += Y[C + 2] - e;
              S[z + 2] = g[c];
              s += Y[C + 3] - a;
              S[z + 3] = g[s];
              C += 4;
              z += 4
          }
          for (var x = 0; x < n; x += 4) {
              Z += Y[C + x] - Y[p + x];
              S[z + x] = g[Z];
              O += Y[C + x + 1] - Y[p + x + 1];
              S[z + x + 1] = g[O];
              c += Y[C + x + 2] - Y[p + x + 2];
              S[z + x + 2] = g[c];
              s += Y[C + x + 3] - Y[p + x + 3];
              S[z + x + 3] = g[s]
          }
          C += n;
          p += n;
          z += n;
          A = Y[T - 4];
          i = Y[T - 3];
          e = Y[T - 2];
          a = Y[T - 1];
          for (var x = h - H; x < h; x++) {
              Z += A - Y[p];
              S[z] = g[Z];
              O += i - Y[p + 1];
              S[z + 1] = g[O];
              c += e - Y[p + 2];
              S[z + 2] = g[c];
              s += a - Y[p + 3];
              S[z + 3] = g[s];
              p += 4;
              z += 4
          }
      }
  }
  ;
  t.n8.a6R = function(Y, S, h, q, H) {
      var I = 1 / (H + H + 1)
        , E = h - H - H - 1;
      for (var G = 0; G < q; G++) {
          var d = G * h
            , B = d
            , n = d + H
            , g = Y[d]
            , z = Y[d + h - 1]
            , p = (H + 1) * g;
          for (var C = 0; C < H; C++)
              p += Y[d + C];
          for (var C = 0; C <= H; C++) {
              p += Y[n + C] - g;
              S[d + C] = p * I
          }
          n += H + 1;
          d += H + 1;
          for (var C = 0; C < E; C++) {
              p += Y[n + C] - Y[B + C];
              S[d + C] = p * I
          }
          n += E;
          B += E;
          d += E;
          for (var C = h - H; C < h; C++) {
              p += z - Y[B++];
              S[d++] = p * I
          }
      }
  }
  ;
  t.n8.a2q = function(Y, S, h, q, H) {
      var I = 1 / (H + H + 1)
        , E = q - H - H - 1
        , d = t.n8.gD(H);
      for (var G = 0; G < h; G++) {
          var B = G
            , n = B
            , g = B + H * h
            , z = Y[B]
            , p = Y[B + h * (q - 1)]
            , C = (H + 1) * z;
          for (var T = 0; T < H; T++)
              C += Y[B + T * h];
          for (var T = 0; T <= H; T++) {
              C += Y[g] - z;
              S[B] = d[C];
              g += h;
              B += h
          }
          for (var T = 0; T < E; T++) {
              var A = T * h;
              C += Y[g + A] - Y[n + A];
              S[B + A] = d[C]
          }
          n += E * h;
          g += E * h;
          B += E * h;
          for (var T = q - H; T < q; T++) {
              C += p - Y[n];
              S[B] = d[C];
              n += h;
              B += h
          }
      }
  }
  ;
  t.n8.aaV = function(Y, S, h, q, H) {
      var I = h << 2
        , E = H << 2
        , d = 1 / (H + H + 1)
        , B = q - H - H - 1
        , n = B << 2
        , g = t.n8.gD(H);
      for (var G = 0; G < h; G++) {
          var z = G << 2
            , p = z
            , C = z + H * I
            , T = z + I * (q - 1)
            , A = Y[z]
            , i = Y[z + 1]
            , e = Y[z + 2]
            , a = Y[z + 3]
            , Z = (H + 1) * A
            , O = (H + 1) * i
            , c = (H + 1) * e
            , s = (H + 1) * a;
          for (var x = 0; x < H; x++) {
              var u = z + x * I;
              Z += Y[u];
              O += Y[u + 1];
              c += Y[u + 2];
              s += Y[u + 3]
          }
          for (var x = 0; x <= H; x++) {
              Z += Y[C] - A;
              S[z] = g[Z];
              O += Y[C + 1] - i;
              S[z + 1] = g[O];
              c += Y[C + 2] - e;
              S[z + 2] = g[c];
              s += Y[C + 3] - a;
              S[z + 3] = g[s];
              C += I;
              z += I
          }
          for (var x = 0; x < B; x++) {
              var y = x * I;
              Z += Y[C + y] - Y[p + y];
              S[z + y] = g[Z];
              O += Y[C + y + 1] - Y[p + y + 1];
              S[z + y + 1] = g[O];
              c += Y[C + y + 2] - Y[p + y + 2];
              S[z + y + 2] = g[c];
              s += Y[C + y + 3] - Y[p + y + 3];
              S[z + y + 3] = g[s]
          }
          p += B * I;
          C += B * I;
          z += B * I;
          A = Y[T];
          i = Y[T + 1];
          e = Y[T + 2];
          a = Y[T + 3];
          for (var x = q - H; x < q; x++) {
              Z += A - Y[p];
              S[z] = g[Z];
              O += i - Y[p + 1];
              S[z + 1] = g[O];
              c += e - Y[p + 2];
              S[z + 2] = g[c];
              s += a - Y[p + 3];
              S[z + 3] = g[s];
              p += I;
              z += I
          }
      }
  }
  ;
  t.n8.ajN = function(Y, S, h, q, H) {
      var I = 1 / (H + H + 1)
        , E = q - H - H - 1;
      for (var G = 0; G < h; G++) {
          var d = G
            , B = d
            , n = d + H * h
            , g = Y[d]
            , z = Y[d + h * (q - 1)]
            , p = (H + 1) * g;
          for (var C = 0; C < H; C++)
              p += Y[d + C * h];
          for (var C = 0; C <= H; C++) {
              p += Y[n] - g;
              S[d] = p * I;
              n += h;
              d += h
          }
          for (var C = 0; C < E; C++) {
              var T = C * h;
              p += Y[n + T] - Y[B + T];
              S[d + T] = p * I
          }
          B += E * h;
          n += E * h;
          d += E * h;
          for (var C = q - H; C < q; C++) {
              p += z - Y[B];
              S[d] = p * I;
              B += h;
              d += h
          }
      }
  }
  ;