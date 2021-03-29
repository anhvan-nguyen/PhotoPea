function gV(Y, S) {
  e9.call(this);
  this.uk = null;
  this.a1N = this.wR.bind(this);
  this.aao = this.hT.bind(this);
  this.agL = this.acl.bind(this);
  this.ahh = this._W.bind(this);
  this.u5 = [];
  this._c = [];
  this.WQ = [];
  this.acB = [];
  this.j = P.w("div", "contextpanel");
  this.j.addEventListener("contextmenu", P.sS, !1);
  this.zy = null;
  this.Qt = 0;
  this.a8j = Y;
  this.alC = S;
  this.Jw = [];
  for (var G = 0; G < Y.length; G++) {
      var h = P.w("div", "enab");
      this._c.push(h);
      this.j.appendChild(h);
      if (Y[G].Xg) {
          var q = P.w("img", "thumb");
          q.setAttribute("src", PIMG[Y[G].Xg]);
          h.appendChild(q)
      } else {
          var H = P.w("span", "check");
          this.acB.push(H);
          h.appendChild(H)
      }
      var I = P.w("span", "label");
      I.innerHTML = gx.get(Y[G].name);
      h.appendChild(I);
      this.WQ.push(I);
      if (Y[G].Sp)
          this.j.appendChild(P.w("hr"));
      if (Y[G].fQ || Y[G].sub) {
          var E = P.w("span", "right");
          h.appendChild(E);
          if (Y[G].fQ)
              E.innerHTML = F.Ov(Y[G].fQ);
          if (Y[G].sub)
              E.innerHTML = "\u25B6"
      }
      h.addEventListener("click", this.a1N, !1);
      h.addEventListener("mouseover", this.aao, !0);
      h.addEventListener("mouseout", this.agL, !0);
      if (Y[G].sub) {
          var d = new gV(Y[G].sub,S ? S[G].sub : null);
          d.parent = this;
          this.Jw.push(d);
          d.k("select", this.a7D, this)
      } else
          this.Jw.push(null)
  }
}
gV.prototype = new e9;
gV.prototype.SJ = function(Y) {
  P.v3(this.j);
  for (var G = 0; G < Y.length; G++)
      if (Y[G] != 0 && Y[G] != null) {
          this.j.appendChild(this._c[G]);
          if (Y[G] != 1 && this.Jw[G])
              this.Jw[G].SJ(Y[G])
      }
}
;
gV.prototype.f = function() {
  var Y = this.a8j;
  for (var G = 0; G < Y.length; G++) {
      if (Y[G].title)
          this._c[G].title = gx.get(Y[G].title);
      this.WQ[G].textContent = gx.get(Y[G].name) + (Y[G].tJ ? "..." : "")
  }
  for (var G = 0; G < this.Jw.length; G++)
      if (this.Jw[G])
          this.Jw[G].f()
}
;
gV.prototype.update = function(Y, S) {
  var h = this.a8j;
  for (var G = 0; G < h.length; G++) {
      if (h[G].p) {
          var q = h[G].p(Y, S, G);
          if (q.p != null)
              this._c[G].setAttribute("class", q.p ? "enab" : "disab");
          if (q.sY != null)
              this.WQ[G].textContent = q.sY;
          if (q.x$ != null)
              this.acB[G].textContent = q.x$ ? "\u2713" : ""
      }
  }
  for (var G = 0; G < this.Jw.length; G++)
      if (this.Jw[G])
          this.Jw[G].update(Y, S)
}
;
gV.prototype.Iv = function() {
  return this.u5
}
;
gV.prototype.wR = function(Y) {
  if (Y.button != 0)
      return;
  var G = this._c.indexOf(Y.currentTarget);
  if (this.Jw[G]) {
      this.Qt = G;
      this._W()
  } else {
      if (this.alC) {
          var S = this.alC[G]
            , h = new _(S.c,!0);
          h.F = S.F;
          h.data = S.g;
          this.B(h)
      }
      this.uk = null;
      this.u5 = [G];
      this.B(new _("select",!1));
      var h = new _(P.E.P,!0);
      h.data = {
          X: P.U.j8
      };
      this.B(h)
  }
}
;
gV.prototype.hT = function(Y) {
  var G = this._c.indexOf(Y.currentTarget);
  if (this.zy) {
      clearTimeout(this.zy);
      this.zy = null
  }
  if (this.Jw[G] == null)
      return;
  this.Qt = G;
  this.zy = setTimeout(this.ahh, 300)
}
;
gV.prototype.acl = function(Y) {
  var G = this._c.indexOf(Y.currentTarget);
  if (this.zy) {
      clearTimeout(this.zy);
      this.zy = null
  }
}
;
gV.prototype._W = function() {
  if (this.zy) {
      clearTimeout(this.zy);
      this.zy = null
  }
  var G = this.Qt;
  if (this.uk)
      this.uk.sA();
  this.uk = this.Jw[G];
  var Y = this._c[G].getBoundingClientRect()
    , S = new _(P.E.P,!0);
  S.data = {
      X: P.U.pa,
      FN: this.Jw[G],
      x: Y.left + Y.width + 2,
      y: Y.top
  };
  this.B(S)
}
;
gV.prototype.sA = function() {
  for (var G = 0; G < this.Jw.length; G++)
      if (this.Jw[G])
          this.Jw[G].sA();
  var Y = new _(P.E.P,!0);
  Y.data = {
      X: P.U.g1,
      FN: this
  };
  this.B(Y)
}
;
gV.prototype.a7D = function(Y) {
  var G = this.Jw.indexOf(Y.target);
  this.u5 = [G].concat(Y.target.Iv());
  this.B(new _("select",!1))
}
;