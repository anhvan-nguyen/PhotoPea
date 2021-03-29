function cI(Y, S, h, q, H, I, E, d, B) {
  e9.call(this);
  this.j = P.w("span", "fitem");
  var n = P.mU();
  this.lT = Y;
  this.Rj = d;
  this.adw = B;
  this.Ld = S;
  this.IB = h;
  this.xR = null;
  if (q instanceof Array) {
      this.xR = q;
      q = q[0]
  }
  this.g0 = q;
  this.$U = H;
  this.akV = I;
  this.UQ = E;
  this.ee = 0;
  this.EJ = P.w("label", "flabel");
  this.EJ.innerHTML = Y;
  this.EJ.setAttribute("style", "cursor:col-resize;");
  this.LV = P.w("input", "");
  this.LV.setAttribute("type", "range");
  if (E) {
      this.LV.min = 0;
      this.LV.max = 400
  } else {
      this.LV.min = S;
      this.LV.max = h;
      if (H != 0)
          this.LV.step = (h - S) / 200
  }
  this.yl = P.w("input", "");
  this.yl.setAttribute("type", "text");
  this.yl.setAttribute("id", n);
  this.qf = P.w("span", "");
  this.qf.innerHTML = q;
  this.yl.addEventListener("change", this.u3.bind(this), !1);
  this.yl.addEventListener("keydown", this.rk.bind(this), !1);
  this.yl.addEventListener("wheel", this.Sh.bind(this), !1);
  this.LV.addEventListener("input", this.u3.bind(this), !1);
  if (B)
      this.LV.addEventListener("change", this.u3.bind(this), !1);
  this.LV.addEventListener("click", this.a27.bind(this), !1);
  this.agj = this.a9J.bind(this);
  this.alQ = this.acT.bind(this);
  this.a0W = this.aiw.bind(this);
  this.nt = 0;
  this.Ma = 0;
  this.B_ = !1;
  P.aK(this.EJ, this.agj);
  this.EJ.addEventListener("dragstart", P.IM, !1)
}
cI.prototype = new e9;
cI.prototype.xi = function(Y) {
  this.$U = Y
}
;
cI.prototype.D2 = function(Y) {
  this.EJ.textContent = Y
}
;
cI.prototype.f = function() {
  var D = this.lT
    , Y = this.Rj;
  if (D) {
      if (typeof D == "string" && D.startsWith("<"))
          this.EJ.innerHTML = D;
      else
          this.EJ.textContent = gx.get(D) + ":"
  }
  if (Y) {
      Y = gx.get(Y);
      if (D)
          this.EJ.setAttribute("title", Y);
      this.yl.setAttribute("title", Y)
  }
}
;
cI.prototype.i = function(Y, S) {
  var h = this.Ld == this.IB;
  if (!h && this.Ld >= 0)
      Y = Math.max(this.Ld, Y);
  if (this.$U == 0)
      Y = Math.round(Y);
  var q = this.g0;
  this.yl.value = (this.$U != 0 ? Y.toFixed(this.$U) : Y) + (this.akV && q ? (q.toLowerCase() == q.toUpperCase() ? "" : " ") + q : "");
  var H = 400 * Math.pow((Y - this.Ld) / (this.IB - this.Ld), 1 / 2.7);
  this.LV.value = this.UQ ? H : Y;
  if (S)
      this.da()
}
;
cI.prototype.u = function() {
  var Y = parseFloat(this.yl.value);
  if (isNaN(Y))
      Y = 0;
  return Y
}
;
cI.prototype.LH = function() {
  return this.g0
}
;
cI.prototype.u3 = function(Y) {
  var S = 0;
  if (Y.currentTarget == this.yl) {
      var h = Y.target.value
        , q = 0;
      while (q < h.length && (h.charAt(q) == "." || 48 <= h.charCodeAt(q) && h.charCodeAt(q) <= 57))
          q++;
      S = h == "" ? 0 : parseFloat(h);
      if (isNaN(S))
          S = 0;
      var H = h.slice(q).trim();
      if (this.xR && this.xR.indexOf(H) != -1)
          this.g0 = H
  } else {
      if (Date.now() - this.ee < 10)
          return;
      S = parseFloat(Y.target.value);
      if (this.UQ) {
          S = this.Ld + Math.pow(S / 400, 2.7) * (this.IB - this.Ld);
          S = this.Mo(S)
      }
  }
  this.i(S);
  if (Y.type == "input" && this.adw)
      return;
  this.da()
}
;
cI.prototype.da = function() {
  this.B(new _(P.E.L))
}
;
cI.prototype.Mo = function(Y) {
  if (this.IB - this.Ld > 50 && Y > 10)
      Y = Math.round(Y);
  return Y
}
;
cI.prototype.rk = function(Y) {
  var S = 0;
  if (F.QN(Y.code, F.z_))
      S = 1;
  if (F.QN(Y.code, F.IL))
      S = -1;
  if (S != 0)
      this._x(S, Y.shiftKey)
}
;
cI.prototype.Sh = function(Y) {
  this._x(Y.deltaY > 0 ? -1 : 1, Y.shiftKey)
}
;
cI.prototype._x = function(Y, S) {
  var h = this.u()
    , q = this.$U
    , H = Y * (q == null || q == 0 || h > 5 ? 1 : .1);
  if (S)
      H *= 10;
  var I = h + H;
  if (!this.UQ && this.IB != this.Ld)
      I = Math.min(this.IB, I);
  this.i(I);
  this.da()
}
;
cI.prototype.a27 = function(Y) {
  var S = Date.now() - this.ee;
  this.ee = Date.now();
  if (S > 300)
      return;
  var h = (this.IB + this.Ld) / 2;
  if (this.Ld < 0 && this.IB > 0)
      h = 0;
  else if (this.Ld < 1 && this.IB > 1 && this.IB < 10)
      h = 1;
  this.i(h);
  this.da()
}
;
cI.prototype.a9J = function(Y) {
  P.y2(document, this.alQ);
  P.cM(document, this.a0W);
  this.nt = P.WW(Y, document.body).x;
  this.Ma = this.u()
}
;
cI.prototype.acT = function(Y) {
  P.IM(Y);
  var S = this.Ld == this.IB
    , h = P.WW(Y, document.body).x
    , q = (h - this.nt) * (S ? 1 : 1 / 120 * (this.IB - this.Ld))
    , H = this.Ma + q;
  if (S)
      H = Math.round(H);
  if (!S) {
      if (!0) {
          H = Math.max(this.Ld, H);
          if (H == this.Ld) {
              this.nt = h;
              this.Ma = this.Ld
          }
      }
      if (!this.UQ) {
          H = Math.min(this.IB, H);
          if (H == this.IB) {
              this.nt = h;
              this.Ma = this.IB
          }
      }
      H = this.Mo(H)
  }
  this.B_ = !0;
  this.i(H);
  this.da()
}
;
cI.prototype.aiw = function(Y) {
  if (!this.B_)
      this.yl.focus();
  this.B_ = !1;
  P.r$(document, this.alQ);
  P.pp(document, this.a0W)
}
;
cI.prototype.rD = function() {
  this.yl.select();
  this.yl.focus()
}
;