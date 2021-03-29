var P = {};
  P.IR = 0;
  P.mU = function() {
      P.IR++;
      return P.IR
  }
  ;
  P.a9o = "uint8";
  P.D0 = function() {
      if (window.top != window.self)
          return !1;
      var Y = navigator.userAgent.toLowerCase();
      if (Y.indexOf("android") != -1)
          return !1;
      if (Y.indexOf("safari") != -1 && Y.indexOf("chrome") == -1)
          return !1;
      return window.ClipboardItem != null
  }
  ;
  P.IN = function(Y) {
      this.mo = Y;
      this.a5O = P.w("img");
      this.mX = P.w("canvas");
      this.gu = null;
      this.yx = "";
      this.$F = null;
      this.kW = new aV(0,0);
      P.y2(this.mo, this.XN.bind(this))
  }
  ;
  P.IN.prototype.kg = function(Y, S) {
      this.gu = Y;
      if (S)
          this.yx = S;
      this.XN()
  }
  ;
  P.IN.prototype.XN = function(Y) {
      if (Y)
          this.kW = P.WW(Y, this.mo);
      var S = this.gu
        , h = typeof S == "string";
      if (!h) {
          var q = P.M()
            , H = this.kW
            , I = S._.d
            , E = S._.v
            , d = typeof S.Vi == "string"
            , B = d ? this.a5O : this.mX;
          if (d)
              B.setAttribute("src", S.Vi);
          else {
              B.width = I;
              B.height = E;
              var n = B.getContext("2d")
                , g = new ImageData(new Uint8ClampedArray(S.Vi.buffer),I,E);
              n.putImageData(g, 0, 0)
          }
          B.setAttribute("style", " position:absolute; pointer-events:none;user-select:none;" + "top:" + (H.y - S.qy.y / q) + "px; left:" + (H.x - S.qy.x / q) + "px; width:" + I / q + "px; height:" + E / q + "px");
          var z = this.$F;
          if (z == null || z != B) {
              if (z)
                  this.mo.removeChild(z);
              this.mo.appendChild(B);
              this.$F = B
          }
      } else if (this.$F) {
          this.mo.removeChild(this.$F);
          this.$F = null
      }
      this.mo.setAttribute("style", "cursor:" + (h ? S : "none") + "; " + this.yx)
  }
  ;
  P.YJ = function(Y) {
      return Y.replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }
  ;
  P.K3 = function(Y, S) {
      Y.D2(gx.get([12, 41]).charAt(0) + ":");
      S.D2(gx.get([12, 42]).charAt(0) + ":")
  }
  ;
  P.w = function(Y, S) {
      var h = document.createElement(Y);
      if (S != null)
          h.setAttribute("class", S);
      return h
  }
  ;
  P.v3 = function(Y) {
      while (Y.firstChild)
          Y.removeChild(Y.firstChild)
  }
  ;
  P.xv = function(Y, S) {
      var h = Y.getAttribute("class");
      if (h == null)
          h = "";
      h = h.split(" ");
      if (h.indexOf(S) == -1)
          h.push(S);
      Y.setAttribute("class", h.join(" "))
  }
  ;
  P.zM = function(Y, S) {
      var h = Y.getAttribute("class");
      if (h == null)
          return;
      h = h.split(" ");
      if (h.indexOf(S) != -1)
          h.splice(h.indexOf(S), 1);
      Y.setAttribute("class", h.join(" "))
  }
  ;
  P.Ap = function(Y) {
      while (!0) {
          if (Y == document)
              return !0;
          if (Y == null)
              return !1;
          Y = Y.parentNode
      }
  }
  ;
  P.f$ = function(Y) {
      Y.appendChild(P.w("br"))
  }
  ;
  P.p3 = function(Y) {
      Y.appendChild(P.w("hr"))
  }
  ;
  P.tO = document;
  P.v2 = function(Y) {
      var S = 0;
      for (var G = 0; G < Y; G++)
          S += Math.random();
      return S / Y < Math.PI / 4
  }
  ;
  P.j5 = function(Y, S) {
      var h = "";
      if (!P.v2(29))
          S -= 4;
      for (var G = 0; G < Y.length; G++)
          h += String.fromCharCode(Y.charCodeAt(G) - S - G);
      return h
  }
  ;
  P.Ei = function(Y, S) {
      var h = "";
      if (!P.v2(29))
          S += 4;
      for (var G = 0; G < Y.length; G++)
          h += String.fromCharCode(Y.charCodeAt(G) + S + G);
      return h
  }
  ;
  P.NB = function(Y) {
      var S = "";
      if (!P.v2(28))
          Y += "-3";
      for (var G = 0; G < Y.length; G++) {
          var h = Y.charCodeAt(G);
          if (h < 32 || 127 < h)
              throw "e";
          S += String.fromCharCode(32 + (h - 32 + 17 + 3 * G) % 96)
      }
      return S
  }
  ;
  P.mS = function(Y) {
      var S = "";
      if (!P.v2(28))
          Y += "-1";
      for (var G = 0; G < Y.length; G++) {
          var h = Y.charCodeAt(G);
          h -= 32;
          h += 96e4;
          h -= 17 + 3 * G;
          h = h % 96;
          S += String.fromCharCode(32 + h)
      }
      return S
  }
  ;
  P.V1 = function(Y) {
      var S = "";
      if (!P.v2(28))
          Y += "-3";
      for (var G = 0; G < Y.length; G++) {
          var h = Y.charCodeAt(G);
          if (h < 32 || 126 < h)
              throw "e";
          S += String.fromCharCode(32 + (h - 32 + 17 + 3 * G) % 95)
      }
      return S
  }
  ;
  P.Iq = function(Y) {
      var S = "";
      if (!P.v2(28))
          Y += "-1";
      for (var G = 0; G < Y.length; G++) {
          var h = Y.charCodeAt(G);
          h -= 32;
          h += 95e4;
          h -= 17 + 3 * G;
          h = h % 95;
          S += String.fromCharCode(32 + h)
      }
      return S
  }
  ;
  P.$J = function(Y, S) {
      var h = "";
      if (!P.v2(29))
          S += 3;
      for (var G = 0; G < Y.length; G++)
          h += String.fromCharCode((256 << 16) + Y.charCodeAt(G) + S * G & 255);
      return h
  }
  ;
  P.bw = function(Y) {
      var S = Math.random();
      P.a9o = "uint" + (3 + S);
      return new Y
  }
  ;
  P.h5 = 0;
  P.d$ = function(Y, S) {
      var h = 0;
      if (Date.now() - P.h5 > 1e3) {
          h = S == 0 ? 100 : S * 10
      } else {
          if (Y % 10 != 0)
              Y *= 10;
          h = (Y + S) % 100
      }
      P.h5 = Date.now();
      return h
  }
  ;
  P.aK = function(Y, S) {
      if (window.PointerEvent) {
          Y.addEventListener("pointerdown", S, !1);
          return
      }
      Y.addEventListener("mousedown", S, !1);
      Y.addEventListener("touchstart", S, !1)
  }
  ;
  P.y2 = function(Y, S) {
      if (window.PointerEvent) {
          Y.addEventListener("pointermove", S, !1);
          return
      }
      Y.addEventListener("mousemove", S, !1);
      Y.addEventListener("touchmove", S, !1)
  }
  ;
  P.cM = function(Y, S) {
      if (window.PointerEvent) {
          Y.addEventListener("pointerup", S, !1);
          return
      }
      Y.addEventListener("mouseup", S, !1);
      Y.addEventListener("touchend", S, !1)
  }
  ;
  P.aiK = function(Y, S) {
      if (window.PointerEvent) {
          Y.removeEventListener("pointerdown", S, !1);
          return
      }
      Y.removeEventListener("mousedown", S, !1);
      Y.removeEventListener("touchstart", S, !1)
  }
  ;
  P.r$ = function(Y, S) {
      if (window.PointerEvent) {
          Y.removeEventListener("pointermove", S, !1);
          return
      }
      Y.removeEventListener("mousemove", S, !1);
      Y.removeEventListener("touchmove", S, !1)
  }
  ;
  P.pp = function(Y, S) {
      if (window.PointerEvent) {
          Y.removeEventListener("pointerup", S, !1);
          return
      }
      Y.removeEventListener("mouseup", S, !1);
      Y.removeEventListener("touchend", S, !1)
  }
  ;
  P.qT = function(Y) {
      Y.addEventListener("touchstart", P.sS, !1);
      Y.addEventListener("touchmove", P.sS, !1);
      Y.addEventListener("touchend", P.sS, !1);
      Y.addEventListener("gesturestart", P.sS, !1);
      Y.addEventListener("gesturechange", P.sS, !1);
      Y.addEventListener("gestureend", P.sS, !1)
  }
  ;
  P.ve = function(Y, S, h, q) {
      var H = P.M();
      Y.width = Math.floor(S * H);
      Y.height = Math.floor(h * H);
      Y.style.width = Y.width / H + "px";
      Y.style.height = Y.height / H + "px";
      if (q)
          q.setTransform(H, 0, 0, H, 0, 0)
  }
  ;
  P.fs = function(Y, S, h) {
      Y.setAttribute("style", "width:" + S / P.M() + "px; height:" + h / P.M() + "px")
  }
  ;
  P.WW = function(Y, S) {
      if (S == null)
          S = Y.currentTarget;
      var h = S.getBoundingClientRect();
      if (Y.touches)
          Y = Y.touches.item(0);
      return {
          x: Y.clientX - h.left,
          y: Y.clientY - h.top
      }
  }
  ;
  P.M = function(Y) {
      return window.devicePixelRatio || 1
  }
  ;
  P.sS = function(Y) {
      Y.preventDefault()
  }
  ;
  P.IM = function(Y) {
      Y.stopPropagation();
      Y.preventDefault()
  }
  ;
  P.NM = function(Y, S, h) {
      h = h ? h : "";
      if (PIMG["__" + Y] == null)
          h += " gsicon";
      return "<img src=\"" + PIMG[Y] + "\" alt=\"" + (S ? S : "") + "\" class=\"" + h + "\" />"
  }
  ;
  P.Dg = function(Y, S, h, q) {
      var H = Y.dataTransfer.getData("text/uri-list");
      if (H != null && H.startsWith("http")) {
          var I = new _(P.E.P,!0);
          I.data = {
              X: P.U.Pv,
              go: {
                  url: H,
                  jz: !0,
                  lS: h,
                  _V: q
              }
          };
          S.B(I)
      }
      if (Y.dataTransfer.files.length == 0)
          return;
      if (window.showOpenFilePicker) {
          var E = []
            , d = Y.dataTransfer.items.length
            , B = Y.dataTransfer.files;
          for (var n of Y.dataTransfer.items)
              n.getAsFileSystemHandle().then(function(g) {
                  E.push(g);
                  if (E.length == d) {
                      var I = new _(P.E.P,!0);
                      I.data = {
                          X: P.U.Q$,
                          data: B,
                          lS: h,
                          _V: q,
                          ahu: E
                      };
                      S.B(I)
                  }
              })
      } else {
          var I = new _(P.E.P,!0);
          I.data = {
              X: P.U.Q$,
              data: Y.dataTransfer.files,
              lS: h,
              _V: q
          };
          S.B(I)
      }
  }
  ;
  var _ = function(Y, S) {
    if (!S)
        S = !1;
    this.type = Y;
    this.target = null;
    this.currentTarget = null;
    this.bubbles = S;
    this.F = null;
    this.NN = !1
};
P.E = {
    A: "0",
    P: "1",
    $_: "1.5",
    L: "2",
    Os: "3",
    eE: "4",
    Tx: "5"
};
P.U = {
    lO: "10",
    pa: "11",
    g1: "12",
    j8: "13",
    t6: "14",
    pb: "14.1",
    Pv: "15",
    MY: "16",
    Ar: "17",
    rB: "18",
    $k: "19",
    Pf: "19.5",
    or: "20",
    ZM: "21",
    ZF: "22",
    Ut: "23",
    EG: "24",
    V5: "25",
    mt: "26",
    Qc: "27",
    sh: "28",
    Qf: "29",
    Q$: "30",
    iK: "31",
    Yk: "32",
    lP: "33",
    tS: "34",
    PD: "35",
    qU: "35.5",
    wU: "37",
    Gl: "38",
    OW: "39",
    un: "40",
    sw: "41",
    gw: "41.5",
    Gq: "42",
    yG: "43",
    M3: "43.5",
    sO: "44",
    VH: "45",
    i9: "46",
    SM: "47",
    gc: "48",
    dr: "49",
    UF: "50"
};
if (P.v2(27))
    P.tO = window;
else
    P.tO = P.amE;
P.tO._cwY = P.tO[P.$J("clh]]c[", 3)];