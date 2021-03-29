function h4(Y, S, h, q, H, I, E) {
  e9.call(this);
  this.j = P.w("span", "fitem " + h);
  this.KM = new e9;
  this.KM.j = P.w("div", "floatcont");
  this.KM.j.setAttribute("style", "width: " + (q + 1.5) + "em;");
  this.KM.parent = this;
  this.dE = P.w("div");
  this.KM.j.appendChild(this.dE);
  this.vd = P.w("div");
  this.KM.j.appendChild(this.vd);
  if (Y) {
      this.lT = Y;
      this.EJ = P.w("label", "flabel");
      this.j.appendChild(this.EJ)
  }
  this.X = P.w("button", E ? "nopadding" : "");
  this.X.setAttribute("style", "position:relative;");
  this.X.addEventListener("click", (S ? this.fe : this.L0).bind(this), !1);
  this.j.appendChild(this.X);
  this.nr = P.w("img", E ? "gsicon" : "");
  this.X.appendChild(this.nr);
  if (S) {
      var d = P.w("button");
      d.textContent = "\u25BC";
      d.addEventListener("click", this.L0.bind(this), !1);
      this.j.appendChild(d)
  } else {
      var B = P.w("span");
      B.textContent = "\u25BC";
      B.setAttribute("style", "position:absolute;  bottom:2px;  right:4px;");
      this.X.appendChild(B)
  }
  var n = P.w("span");
  this.vd.appendChild(n);
  n.setAttribute("style", "display:inline-block;  vertical-align:top; width:" + q + "em;");
  this.BH = new eI(E,I);
  n.appendChild(this.BH.j);
  this.BH.parent = this.KM;
  this.BH.k(P.E.L, this.a1l, this);
  this.BH.j.style.height = H + "em";
  this.V3 = P.w("button");
  this.V3.textContent = "\u25BC";
  this.V3.setAttribute("style", "padding:3px");
  this.V3.addEventListener("click", this.a57.bind(this), !1);
  this.vd.appendChild(this.V3);
  var g = this.rP()
    , z = I != iD.YM && I != iD.Bt ? I : null
    , p = I == null ? "" : iD.FV[I][0].toUpperCase()
    , C = z ? [{
      name: [12, 87]
  }] : [];
  C = C.concat([{
      name: ["VAR0 / VAR1", [25, 3, 0], [25, 3, 1]]
  }, {
      name: [[23, 6], "." + (p == "ICC" ? "icc .cube .look .3dl" : p)]
  }, {
      name: ["VAR0 ." + p, [1, 8]],
      Sp: g.length != 0
  }]);
  for (var G = 0; G < g.length; G++)
      C.push({
          name: g[G].split("/").pop()
      });
  this.BW = new gV(C);
  this.BW.parent = this.KM;
  this.BW.k("select", this.mG, this);
  this.qq = I;
  this.afz = z;
  this.x1 = null;
  this.vG = !0;
  this.ll = null
}
h4.prototype = new e9;
h4.prototype.rP = function() {
  return []
}
;
h4.prototype.a1l = function(Y) {
  this.ug(Y);
  this.BH.ca(this.BH.u())
}
;
h4.prototype.fe = function() {}
;
h4.prototype.f = function() {
  this.BW.f();
  this.BH.f();
  var Y = this.lT;
  if (Y)
      this.EJ.textContent = gx.get(Y) + ":"
}
;
h4.prototype.D2 = function(Y) {
  this.EJ.textContent = Y
}
;
h4.prototype.dB = function(Y) {
  var S = this.qq
    , h = 0;
  if (S == iD.HE) {
      h = this.x1 ? this.x1.length : 0;
      Y = Y.slice(0)
  }
  this.x1 = Y;
  this.vG = !0;
  if (P.Ap(this.BH.j) || S == iD.jl)
      this.Xr();
  if (S == iD.HE && Y.length - h == 1 && P.Ap(this.j)) {
      this.i(Y[h]);
      this.vG = !0;
      this.Xr();
      this.BH.ca(h);
      this.B(new _(P.E.L))
  }
}
;
h4.prototype.mG = function(Y) {
  var S = Y.target.Iv()[0];
  if (this.afz == null)
      S++;
  var h = new _(P.E.P,!0);
  if (S == 0) {
      var q = this.wB();
      if (this.qq == iD.HE && q[0].profile == null)
          return;
      h.data = {
          X: P.U.PD,
          UI: "add",
          go: this.afz,
          Gu: q
      }
  } else if (S == 1)
      this.BH.Gx(1 - this.BH.a5o());
  else if (S == 2)
      h.data = {
          X: P.U.MY
      };
  else if (S == 3)
      h.data = {
          X: P.U.i9,
          alz: this.qq
      };
  else {
      var H = this.rP();
      h.data = {
          X: P.U.Pv,
          go: {
              url: "rsrc/" + H[S - 4]
          }
      }
  }
  if (h.data)
      this.B(h)
}
;
h4.prototype.wB = function() {
  return [this.u()]
}
;
h4.prototype.a57 = function(Y) {
  var S = this.BW;
  S.f();
  S.update(null);
  var h = Y.currentTarget.getBoundingClientRect()
    , q = new _(P.E.P,!0);
  q.data = {
      X: P.U.pa,
      FN: S,
      x: h.left,
      y: h.top + h.height
  };
  this.B(q)
}
;
h4.prototype.L0 = function(Y) {
  this.Xr();
  var S = this.X.getBoundingClientRect()
    , h = new _(P.E.P,!0);
  h.data = {
      X: P.U.pa,
      FN: this.KM,
      x: S.left,
      y: S.top + S.height,
      vX: !0
  };
  this.B(h)
}
;