function fU(Y, S, h, q, H, I, E, d) {
  this.r0 = S;
  this.SR = h;
  this.E$ = I;
  this.Qg = q;
  if (q.y_ == null)
      q.y_ = [!1, !0];
  this.Hx = null;
  this.Ju = null;
  this.ZY = 0;
  this.a2z = 0;
  this.a7A = 0;
  this.aF = 0;
  this.sU = 0;
  this.a08 = E;
  this.jJ = new W;
  this.Hi = new W;
  this.rect = new W;
  if (d != null) {
      this.nP = d
  } else {
      var B = fU.Tc;
      if (B.length != E.e() * 4)
          B = t.m(E.e() * 4);
      else
          B.fill(0);
      this.nP = fU.Tc = B
  }
  this.rect = E.clone();
  this.wq = [];
  this.gF = [];
  this.SG = null;
  this.jy = 0;
  this.O = null;
  this.tc = "";
  this.sM = null;
  this.Mi(Y, H)
}
fU.Tc = t.m(16);
fU.prototype.Mi = function (Y, S) {
  this.jy = S;
  this.O = Y;
  this.tc = JSON.stringify(Y) + JSON.stringify(this.Qg.vy);
  this.sM = fU.al6(Y, this.r0, this.SR)
}
  ;
fU.prototype.moveTo = function (Y, S, h) {
  h = this.pM(h);
  this.ZY = h;
  var q = new aV(Y, S)
      , H = this.O.Brsh.v.Dmtr.v.val;
  this.Hx = q.clone();
  this.Ju = q.clone();
  this.SG = q.clone();
  this.wq = [Y, S];
  this.gF = [h];
  var I = this.Qg.y_;
  if (this.Qg.yS != fU.eZ)
      this.Fm(this.jN(q, this.a4() * (I[1] ? h : 1), this.Qg.xC * (I[0] ? h * .5 : 1), new aV(0, 0)));
  this.aF = q.clone()
}
  ;
fU.prototype.lineTo = function (Y, S, h) {
  h = this.pM(h);
  var q = this.wq
      , H = q.length
      , I = q[H - 2]
      , E = q[H - 1];
  if (Y == I && S == E)
      return;
  var d = this.O.Brsh.v.Dmtr.v.val
      , B = Math.ceil(d) + 1
      , n = new W(Math.round(I), Math.round(E), 0, 0);
  n.vo(B, B);
  var g = new W(Math.round(Y), Math.round(S), 0, 0);
  g.vo(B, B);
  this.LJ(n.TG(g));
  this.wq.push(Y, S);
  this.gF.push(h);
  H += 2;
  if (H >= 6)
      this.Fm(this.tk(H))
}
  ;
fU.prototype.pM = function (Y) {
  if (Y == null)
      Y = 1;
  Y = Math.max(.05, Math.min(5, Y));
  if (isNaN(Y)) {
      alert("Pressure is not a number");
      throw "e"
  }
  return Y
}
  ;
fU.prototype.Fm = function (Y) {
  this.jJ = Y;
  this.Hi = this.Hi.TG(Y)
}
  ;
fU.prototype.finish = function () {
  var Y = this.wq, S = Y.length, h;
  if (S == 4)
      h = this.Fl(Y[S - 2], Y[S - 1], this.gF[(S >> 1) - 1], !0);
  if (S > 4)
      h = this.tk(S + 2);
  if (h)
      this.Fm(h)
}
  ;
fU.prototype.tk = function (Y) {
  var S = this.wq
      , h = this.gF
      , q = S[Y - 6]
      , H = S[Y - 5]
      , I = S[Y - 4]
      , E = S[Y - 3]
      , d = h[(Y >> 1) - 3]
      , B = h[(Y >> 1) - 2]
      , n = new aV(0, 0)
      , g = new aV(0, 0);
  if (8 <= Y)
      n = fU.aS(S[Y - 8], S[Y - 7], q, H, I, E);
  if (Y <= S.length)
      g = fU.aS(S[Y - 2], S[Y - 1], I, E, q, H);
  var z = q + n.x
      , p = H + n.y
      , C = I + g.x
      , T = E + g.y
      , A = new W;
  for (var G = 0; G < 10; G++) {
      var i = (G + 1) * .1
          , e = 1 - i
          , a = e * e * e * q + 3 * i * e * e * z + 3 * i * i * e * C + i * i * i * I
          , Z = e * e * e * H + 3 * i * e * e * p + 3 * i * i * e * T + i * i * i * E
          , O = this.Fl(a, Z, d + i * (B - d));
      A = A.TG(O)
  }
  return A
}
  ;
fU.aS = function (Y, S, h, q, H, I) {
  var E = Y - h
      , d = S - q
      , B = H - h
      , n = I - q
      , g = Math.sqrt(E * E + d * d)
      , z = Math.sqrt(B * B + n * n)
      , p = Math.acos((E * B + d * n) / (g * z)) / Math.PI
      , C = .35
      , T = .1;
  p = T + p * (C - T);
  var A = H - Y
      , i = I - S
      , e = Math.sqrt(A * A + i * i)
      , a = p * z / e;
  return new aV(A * a, i * a)
}
  ;
fU.prototype.Fl = function (Y, S, h, q) {
  var H = new W
      , I = this.Qg.aov;
  if (I == null)
      I = 0;
  if (I == 0 || q) {
      H = this.T7(Y, S, h);
      return H
  }
  var E = this.SG
      , d = Y - E.x
      , B = S - E.y
      , n = Math.sqrt(d * d + B * B);
  d /= n;
  B /= n;
  if (n > I) {
      var g = E.x + d * (n - I)
          , z = E.y + B * (n - I);
      H = this.T7(g, z, h);
      this.SG.bm(g, z)
  }
  return H
}
  ;
fU.prototype.T7 = function (Y, S, h) {
  var q = new W
      , H = new aV(Y, S)
      , I = this.O.Brsh.v.Dmtr.v.val
      , E = this.Qg.yS
      , d = H.KB(this.Ju);
  d.normalize(1);
  var B = aV.kr(this.Ju, H)
      , n = -this.a2z
      , g = this.Ju.clone()
      , z = this.Qg.y_;
  while (!0) {
      var p = this.ZY + (h - this.ZY) * (Math.max(0, n) / B)
          , C = this.a4() * (z[1] ? p : 1)
          , T = this.ajE() * (C + this.a7A) / 2;
      if (E == fU.eZ)
          T = 1;
      if (n + T < B) {
          n += T;
          var A = new aV(this.Ju.x + d.x * n, this.Ju.y + d.y * n)
              , a = 1;
          if (E == fU.eZ) {
              var i = g.clone();
              i.x += d.x > 0 ? 1 : -1;
              var e = g.clone();
              e.y += d.y > 0 ? 1 : -1;
              if (aV.kr(i, A) < aV.kr(e, A))
                  A = i;
              else
                  A = e;
              n = aV.kr(A, this.Ju)
          }
          if (this.O.useScatter.v == !0) {
              a = this.O.Cnt.v;
              var Z = this.O.countDynamics.v.jitter.v.val / 100
                  , O = Z * (-1 + 2 * this.TL());
              a += Math.round(a * O)
          }
          for (var G = 0; G < a; G++) {
              var c = this.jN(A, C, this.Qg.xC * (z[0] ? p * .5 : 1), d);
              q = q.TG(c)
          }
          g = A
      } else
          break
  }
  this.a2z = B - n;
  this.Ju = H;
  this.ZY = h;
  return q
}
  ;
fU.prototype.ajE = function () {
  var Y = this.O.Brsh.v
      , S = Y.Spcn.v.val
      , h = Math.max(5, Y.Rndn.v.val);
  return h / 100 * (S / 100)
}
  ;
fU.prototype.a4 = function () {
  var Y = this.O
      , S = Y.Brsh.v.Dmtr.v.val;
  if (Y.useTipDynamics.v) {
      var h = S * (Y.minimumDiameter.v.val / 100);
      S = h + (S - h) * (1 - this.TL() * (Y.szVr.v.jitter.v.val / 100))
  }
  return S
}
  ;
fU.prototype.jN = function (Y, S, h, q) {
  h = Math.min(1, h);
  var H = this.O
      , I = this.O.Brsh.v
      , E = I.Dmtr.v.val
      , d = this.Qg
      , B = d.yS
      , n = d.ahz
      , g = new d5;
  g.translate(-this.sM.Ru.d / 2, -this.sM.Ru.v / 2);
  g.scale(1 / this.sM.akb, 1 / this.sM.akb);
  g.scale(S / E, S / E);
  g.scale(1, Math.max(5, I.Rndn.v.val) / 100);
  if (H.useTipDynamics.v) {
      var z = H.minimumRoundness.v.val / 100;
      g.scale(1, z + (1 - z) * Math.round(100 - this.TL() * H.roundnessDynamics.v.jitter.v.val) / 100);
      g.rotate((-.5 + this.TL()) * 4 * Math.PI * (H.angleDynamics.v.jitter.v.val / 100))
  }
  g.rotate(I.Angl.v.val * (Math.PI / 180));
  if (H.useScatter.v) {
      var p = (-1 + 2 * this.TL()) * H.scatterDynamics.v.jitter.v.val / 100;
      g.translate(-p * S * q.y, p * S * q.x)
  }
  g.translate(Y.x, Y.y);
  var C = this.amw(g, Y);
  this.LJ(C.rect);
  var T = C.rect.clone();
  if (B == null) {
      var A = this.cd(H);
      t.A5(C.po, Math.round(A.O * 255) << 16 | Math.round(A.l * 255) << 8 | Math.round(A.h * 255) << 0, 4278190080);
      if (this.Hi.fa() && this.rect.ma(C.rect) && h == 1)
          this.nP = C.po.slice(0);
      else
          t.Q.a2U(C.po, C.rect, this.nP, this.rect, C.rect, h)
  }
  if (B == fU.eZ) {
      var i = new aV(C.rect.x + C.rect.d / 2, C.rect.y + C.rect.v / 2)
          , e = Math.round(i.x - this.aF.x)
          , a = Math.round(i.y - this.aF.y)
          , Z = C.rect.clone();
      Z.offset(-e, -a);
      var O = Z.lF(this.rect);
      O.offset(e, a);
      t.rd(this.nP, this.rect, C.po, Z);
      t.Q.zE(C.po, C.rect, this.nP, this.rect, C.tq, C.rect, h)
  }
  if (B == fU.XP || B == fU.oT || B == fU.ML) {
      var c = C.rect.lF(this.rect), s;
      if (c.ma(C.rect))
          s = C.tq;
      else {
          s = t.m(c.e());
          t.m7(C.tq, C.rect, s, c)
      }
      var x = t.m(c.e() * 4);
      t.rd(this.nP, this.rect, x, c);
      if (B == fU.oT) {
          var u = x.slice(0)
              , y = t.Hd.Tt([-1, -1, -1, -1, 25, -1, -1, -1, -1]);
          t.Hd.FH(x, u, c.d, c.v, y, 0);
          t.vx(u, x)
      } else if (B == fU.ML) {
          var j = io.g4("UnsM");
          j.Amnt.v.val = 15;
          j.Thsh.v = 0;
          j.Rds.v.val = 5;
          var u = t.m(x.length);
          io.Cu("UnsM", {
              buffer: x,
              rect: c
          }, j, 0, 0, {
              buffer: u,
              rect: c
          });
          t.vx(u, x)
      } else {
          io.rG(1, t.n8.nk, x, c)
      }
      t.Q.zE(x, c, this.nP, this.rect, s, c, h)
  }
  this.a7A = S;
  this.aF = i;
  return T
}
  ;
fU.prototype.cd = function (Y) {
  var S = fU.BA(this.jy);
  if (Y.useColorDynamics && Y.useColorDynamics.v) {
      var h = 1 - this.TL() * Y.clVr.v.jitter.v.val / 100
          , q = fU.BA(this.E$);
      S.h = h * S.h + (1 - h) * q.h;
      S.l = h * S.l + (1 - h) * q.l;
      S.O = h * S.O + (1 - h) * q.O;
      var H = (-.5 + this.TL()) * Y.H.v.val / 100
          , I = (-1 + 2 * this.TL()) * Y.Strt.v.val / 100
          , E = (-1 + 2 * this.TL()) * Y.Brgh.v.val / 100
          , d = t.Yl(S.h, S.l, S.O);
      d.UR = (d.UR + H + 1) % 1;
      d.D1 = d.D1 + I;
      if (d.D1 < 0)
          d.D1 = -d.D1;
      if (d.D1 > 1)
          d.D1 = 1 - (d.D1 - 1);
      d.w1 = d.w1 + E;
      if (d.w1 < 0)
          d.w1 = -d.w1;
      if (d.w1 > 1)
          d.w1 = 1 - (d.w1 - 1);
      S = t.im(d.UR, d.D1, d.w1)
  }
  return S
}
  ;
fU.prototype.Aq = function (Y) {
  return Math.max(0, Math.min(1, Y))
}
  ;
fU.prototype.TL = function () {
  this.sU++;
  return fU.hash(this.sU)
}
  ;
fU.BA = function (Y) {
  return {
      h: (Y >> 16 & 255) / 255,
      l: (Y >> 8 & 255) / 255,
      O: (Y >> 0 & 255) / 255
  }
}
  ;
fU.hash = function (Y) {
  Y = Y ^ 61 ^ Y >> 16;
  Y = Y + (Y << 3);
  Y = Y ^ Y >> 4;
  Y = Y * 668265261;
  Y = Y ^ Y >> 15;
  return (Y & 16777215) / 16777215
}
  ;
fU.hf = [];
fU.ana = function (Y, D) {
  var S = Y.Fu()
      , h = D.Fu();
  if (S < h) {
      var q = S;
      S = h;
      h = q
  }
  var H = Y.R - D.R
      , I = Y.O - D.O
      , E = Y.Pb - D.Pb
      , d = Y.RH - D.RH;
  return h != 0 && S - h < .025 && Math.max(H * H, I * I, E * E, d * d) <= .01
}
  ;
fU.prototype.amw = function (Y, S) {
  var h = null, I;
  for (var G = 0; G < fU.hf.length; G++)
      if (fU.hf[G].tc == this.tc) {
          h = fU.hf[G];
          fU.hf.splice(G, 1)
      }
  if (h == null)
      h = {
          oh: [],
          tc: this.tc,
          z9: 0,
          e: 0
      };
  var q = h.oh
      , H = this.Qg.vy;
  if (H) {
      Y = Y.clone();
      Y.TR = Math.floor(Y.TR);
      Y.Un = Math.floor(Y.Un)
  }
  var E = fU.kn(Y.TR, Y.Un);
  for (var G = 0; G < q.length; G++) {
      var d = q[G];
      if (!fU.ana(d.dM, Y))
          continue;
      if (fU.agF(d.Pl, E) < .2 || d.rect.e() > 2500) {
          I = d;
          break
      }
  }
  var B = Math.round(this.O.Brsh.v.Dmtr.v.val);
  if (I) {
      I.rect.x = Math.round(I.vt.x - I.dM.TR + Y.TR);
      I.rect.y = Math.round(I.vt.y - I.dM.Un + Y.Un);
      if (H) {
          I.rect.x = Math.round(S.x - I.rect.d / 2);
          I.rect.y = Math.round(S.y - I.rect.v / 2)
      }
      I.z9 = Date.now()
  } else {
      var n;
      if (H && B <= 3) {
          n = {
              buffer: t.m(B * B * 4),
              rect: new W(Math.round(S.x - B / 2), Math.round(S.y - B / 2), B, B)
          };
          t.A5(n.buffer, 4278190080)
      } else if (Y.R == 1 && Y.O == 0 && Y.Pb == 0 && Y.RH == 1) {
          n = {
              buffer: this.sM.po,
              rect: this.sM.Ru.clone()
          };
          n.rect.x = Math.round(Y.TR);
          n.rect.y = Math.round(Y.Un)
      } else
          n = U.o.dG([this.sM.po, this.sM.Ru], Y);
      if (H) {
          for (var G = 0; G < n.buffer.length; G++)
              n.buffer[G] = n.buffer[G] > 127 ? 255 : 0
      }
      if (n == null)
          n = {
              buffer: t.m(0),
              rect: new W
          };
      var g = Y.TR - Math.floor(Y.TR)
          , z = Y.Un - Math.floor(Y.Un);
      I = {
          po: n.buffer,
          tq: t.m(n.rect.e()),
          rect: n.rect,
          vt: n.rect.clone(),
          dM: Y,
          Pl: fU.kn(Y.TR, Y.Un),
          z9: Date.now()
      };
      t.Ft(I.po, I.tq, 3);
      q.push(I);
      h.e += n.rect.e();
      if (q.length > 2e3 || h.e > 100 * 100 * 400) {
          console.log("pruning", h.e, q.length);
          q.sort(function (C, T) {
              return T.z9 - C.z9
          });
          while (q.length > 1e3 || h.e > 100 * 100 * 200) {
              var p = q.pop();
              h.e -= p.rect.e()
          }
      }
  }
  h.oh = q;
  h.z9 = Date.now();
  fU.hf.push(h);
  fU.hf.sort(function (C, T) {
      return T.z9 - C.z9
  });
  while (fU.hf.length > 3)
      fU.hf.pop();
  return I
}
  ;
fU.kn = function (Y, S) {
  return new aV(Y - Math.floor(Y), S - Math.floor(S))
}
  ;
fU.agF = function (Y, S) {
  var h = S.x
      , q = S.y
      , H = Math.abs(h - Y.x)
      , I = Math.abs(q - Y.y);
  if (Math.abs(h - 1 - Y.x) < H)
      h--;
  else if (Math.abs(h + 1 - Y.x) < H)
      h++;
  if (Math.abs(q - 1 - Y.y) < I)
      q--;
  else if (Math.abs(q + 1 - Y.y) < I)
      q++;
  H = Y.x - h;
  I = Y.y - q;
  return Math.sqrt(H * H + I * I)
}
  ;
fU.prototype.LJ = function (Y) { }
  ;
fU.al6 = function (Y, S, h) {
  var q, H, I, E = Y.Brsh.v.Dmtr.v.val;
  if (Y.Brsh.v.classID == "computedBrush") {
      var d = Y.Brsh.v.Hrdn.v.val / 100
          , B = 1 + .55 * (1 - d);
      I = E < 100 ? 1.2 : 1;
      var n = Math.round(I * E * B);
      H = new W(0, 0, n, n);
      q = t.m(n * n * 4);
      var g = new Uint32Array(q.buffer)
          , z = n / 2
          , p = B / z
          , C = Date.now()
          , T = fU.ec(d)
          , A = Math.round(8e3 / z)
          , S = T[0]
          , i = T[1] - A
          , e = T[2] + A
          , a = Math.min(n, (n >>> 1) + 1);
      for (var G = 0; G < a; G++) {
          var Z = p * (G - z + .25);
          Z *= Z;
          var O = p * (G - z + .75);
          O *= O;
          var c = G * n
              , s = (n - 1 - G) * n;
          for (var x = 0; x < a; x++) {
              var u = p * (x - z + .25)
                  , y = Math.floor(Math.sqrt(u * u + Z) * (4e3 / 1.55));
              if (e < y)
                  continue;
              else if (y < i) {
                  var j = 4278190080;
                  while (x < a) {
                      var v = n - 1 - x;
                      g[c + x] = j;
                      g[c + v] = j;
                      g[s + x] = j;
                      g[s + v] = j;
                      x++
                  }
                  break
              } else {
                  var X = p * (x - z + .75)
                      , N = Math.floor(Math.sqrt(X * X + Z) * (4e3 / 1.55))
                      , V = Math.floor(Math.sqrt(u * u + O) * (4e3 / 1.55))
                      , $ = Math.floor(Math.sqrt(X * X + O) * (4e3 / 1.55))
                      , j = ~~(.5 + 255 * .25 * (S[y] + S[N] + S[V] + S[$])) << 24
                      , v = n - 1 - x;
                  g[c + x] = j;
                  g[c + v] = j;
                  g[s + x] = j;
                  g[s + v] = j
              }
          }
      }
  }
  if (Y.Brsh.v.classID == "sampledBrush") {
      var w;
      for (var G = 0; G < S.length; G++)
          if (S[G].id == Y.Brsh.v.sampledData.v)
              w = S[G];
      H = new W(0, 0, w._.d, w._.v);
      I = Math.max(H.d, H.v) / E;
      q = t.m(H.e() * 4);
      t.Vj(w.channel, q, 3)
  }
  while (Math.min(H.d, H.v) > E * 2) {
      var m = new W(H.x, H.y, Math.floor(H.d / 2), Math.floor(H.v / 2))
          , l = U.o.dG([q, H], new d5(m.d / H.d, 0, 0, m.v / H.v, 0, 0));
      I *= m.d / H.d;
      H = l.rect;
      q = l.buffer
  }
  return {
      akb: I,
      Ru: H,
      po: q
  }
}
  ;
fU.vz = [];
fU.ec = function (Y) {
  if (fU.vz[Y])
      return fU.vz[Y];
  var S = Math.pow(Y, .55)
      , h = new Float64Array(8e3)
      , q = 0
      , H = 8e3;
  for (var G = 0; G < 8e3; G++) {
      var I = fU.ahs(G * (1.55 / 4e3), S);
      if (I >= 1)
          q = G;
      else if (I <= 0 && H == 8e3)
          H = G;
      h[G] = I
  }
  var E = [h, q, H];
  fU.vz[Y] = E;
  return E
}
  ;
fU.ahs = function (Y, S) {
  var h = Y < S ? 1 : fU.a3R((Y - S) / Math.pow(1.001 - S, .86));
  return h
}
  ;
fU.a3R = function (Y) {
  var S = Y * .85;
  return Math.exp(-(S * S) * (1 / (2 * .4 * .4))) * (1 / (.4 * Math.sqrt(2 * Math.PI)))
}
  ;
fU.prototype.i6 = function () {
  return this.rect.clone()
}
  ;
fU.prototype.sB = function () {
  return this.jJ.lF(this.rect)
}
  ;
fU.prototype.HK = function () {
  return this.Hi.lF(this.rect)
}
  ;
fU.prototype.ce = function () {
  return this.nP
}
  ;
fU.yD = null;
fU.Jd = null;
fU.PG = function (Y, S, h, q, H, I) {
  var E = fU.yD
      , d = fU.Jd;
  if (E == null) {
      fU.yD = E = P.w("canvas", "");
      fU.Jd = d = E.getContext("2d")
  }
  if (I == null)
      I = q;
  if (E.width != I || E.height != H) {
      E.width = I;
      E.height = H
  } else
      d.clearRect(0, 0, I, H);
  d.fillStyle = "#000000";
  d.font = Math.floor(10 * P.M()) + "px sans-serif";
  var B = Y.Brsh.v.Dmtr.v.val
      , n = "" + B
      , g = d.measureText(n);
  d.fillText(n, (q - g.width) / 2, H - 2);
  var z = q
      , p = H - 10 * P.M()
      , C = Math.min(z, p)
      , T = Y.Brsh.v.classID;
  if (T == "computedBrush") {
      d.translate(z / 2, p / 2);
      d.rotate(-Y.Brsh.v.Angl.v.val * Math.PI / 180);
      d.scale(1, .1 + .9 * Y.Brsh.v.Rndn.v.val / 100);
      var A = Math.min(.95 * C / 2, B / 2) + .5
          , i = .9 * Y.Brsh.v.Hrdn.v.val / 100
          , e = d.createRadialGradient(0, 0, 0, 0, 0, A);
      e.addColorStop(i, "rgba(0,0,0,1)");
      e.addColorStop((.5 + i) / 1.5, "rgba(0,0,0,.5)");
      e.addColorStop(1, "rgba(0,0,0,0)");
      d.fillStyle = e;
      d.fillRect(-A, -A, 2 * A, 2 * A);
      d.setTransform(1, 0, 0, 1, 0, 0)
  } else if (T == "sampledBrush") {
      var a, x = 0;
      for (var G = 0; G < S.length; G++)
          if (S[G].id == Y.Brsh.v.sampledData.v)
              a = S[G];
      var Z = a.abk;
      if (Z == null) {
          Z = a.abk = [a.channel, a._];
          t.h2(Z)
      }
      var O = a.channel
          , c = a._.d
          , s = a._.v;
      while ((c > z || s > p) && Z[x + 2]) {
          x += 2;
          O = Z[x];
          c = Z[x + 1].d;
          s = Z[x + 1].v
      }
      if (c * s != 0) {
          var u = t.m(c * s * 4);
          t.Vj(O, u, 3);
          var y = new ImageData(new Uint8ClampedArray(u.buffer), c, s);
          d.putImageData(y, Math.round((z - c) / 2), Math.round((p - s) / 2))
      }
  } else { }
  return E.toDataURL()
}
  ;
fU.TC = function (Y, S, h, q) {
  if (h == 0)
      h = 1;
  var H = Y.Brsh.v, I = H.Dmtr.v.val, E = H.Dmtr.v.val = Math.min(q != null ? Math.round(q * 2.6) : 3e3, I * h), d = H.Hrdn ? H.Hrdn.v.val / 100 : 1, B = q != null ? q : Math.round(E * (1 + .55 * (1 - d))) + 4, z;
  B = Math.max(15, Math.min(B, 3e3));
  var n = new W(0, 0, B, B)
      , g = new fU(Y, S, null, {
          xC: 1
      }, 16711712, 0, n);
  H.Dmtr.v.val = I;
  g.moveTo(n.d / 2, n.v / 2);
  var p = g.ce()
      , C = g.i6();
  if (n.ma(C))
      z = p;
  else {
      z = t.m(n.e() * 4);
      t.rd(p, C, z, n)
  }
  return [z, n, E]
}
  ;
fU.by = function (Y, S, h, q) {
  var H = fU.TC(Y, S, h)
      , I = H[0].slice(0)
      , E = H[1]
      , d = H[2]
      , B = E.e()
      , n = t.m(B);
  t.Ft(I, n, 3);
  var g = t.m(B);
  t.N.a1U(n, g, E);
  if (d < 3 || t.Aw(g, 0) || q && d > 12) {
      var z = E.d
          , p = z >>> 1
          , C = g
          , T = 255;
      for (var G = 0; G < 4; G++) {
          C[z * (p - 6 + G) + p] = T;
          C[z * p + p - 6 + G] = T;
          C[z * p + p + 6 - G] = T;
          C[z * (p + 6 - G) + p] = T
      }
  }
  var A = [1, 2, 1, 2, 8, 2, 1, 2, 1];
  A = t.Hd.Tt(A);
  t.Hd.zp(g, n, E.d, E.v, A);
  t.A5(I, 4294967295);
  t.Vj(n, I, 3);
  for (var G = 0; G < B; G++)
      if (g[G] == 255) {
          I[G << 2] = I[(G << 2) + 1] = I[(G << 2) + 2] = 0;
          I[(G << 2) + 3] = 255
      }
  return {
      Vi: I,
      _: E,
      qy: new aV(E.d / 2, E.v / 2)
  }
}
  ;
fU.eZ = "0";
fU.XP = "1";
fU.oT = "2";
fU.ML = "3";