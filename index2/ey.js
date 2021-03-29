function ey(Y, S, h, q) {
  e9.call(this);
  if (!S)
      return;
  if (h == null)
      h = !1;
  this.Qo = 0;
  this.aaU = h;
  this.lT = Y;
  this.VG = null;
  this.ah7 = q;
  var H = "dd" + P.mU();
  this.j = P.w("span", "fitem ddmenu");
  if (Y && !h) {
      this.EJ = P.w("label", "flabel");
      this.j.appendChild(this.EJ);
      this.EJ.setAttribute("for", H)
  }
  this.hW = P.w("select", "bbtn");
  this.hW.setAttribute("id", H);
  this.j.appendChild(this.hW);
  this.hW.addEventListener("change", this.u3.bind(this), !1);
  this.p5 = [];
  this.Dl = null;
  this.Hm(S, q);
  this.f()
}
ey.prototype = new e9;
ey.prototype.D2 = function(Y) {
  this.lT = Y;
  this.f()
}
;
ey.prototype.f = function() {
  if (this.lT != null) {
      var Y = gx.get(this.lT);
      if (this.aaU)
          this.hW.setAttribute("title", Y);
      else
          this.EJ.textContent = Y + ":"
  }
  if (this.Dl)
      this.Hm(this.Dl, this.ah7);
  this.i(this.Qo)
}
;
ey.prototype.u = function() {
  return this.Qo
}
;
ey.prototype.Hm = function(Y, S) {
  P.v3(this.hW);
  var h = []
    , q = 0;
  if (S) {
      h.push(S[0]);
      for (var G = 1; G < S.length; G++)
          h.push(h[G - 1] + S[G])
  }
  this.Dl = Y;
  this.VG = [];
  this.ah7 = S;
  for (var G = 0; G < Y.length; G++) {
      var H = P.w("option");
      H.textContent = gx.get(Y[G]);
      H.setAttribute("value", G);
      this.hW.appendChild(H);
      this.p5.push(H);
      this.VG.push(G + q);
      if (h.indexOf(G + 1) != -1 && G != Y.length - 1) {
          var I = P.w("option");
          I.setAttribute("disabled", "");
          I.textContent = "";
          this.hW.appendChild(I);
          q++
      }
  }
}
;
ey.prototype.i = function(Y) {
  this.Qo = Y;
  this.hW.selectedIndex = this.VG[Y]
}
;
ey.prototype.u3 = function(Y) {
  this.Qo = this.VG.indexOf(this.hW.selectedIndex);
  this.B(new _(P.E.L,!1))
}
;