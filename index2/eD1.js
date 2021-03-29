function eD() { }
eD.T9 = {
  aj7: ["PNG", "JPG", "SVG", "GIF", "PDF"],
  ahC: "WEBP BMP TIFF ICO DDS TGA PPM RAW EMF DXF".split(" ")
};
eD.wg = {
  ah_: function (Y, S) {
    fetch(Y).then(function (h) {
      return h.arrayBuffer()
    }).then(function (h) {
      var q = new Uint8Array(h)
        , H = 0
        , B = "";
      if (S) {
        H = q.length;
        var I = {
          level: 9
        }
          , E = pako.deflateRaw(q, I)
          , d = UZIP.deflateRaw(q, I);
        console.log(H, E.length, d.length);
        q = E.length < d.length ? E : d
      }
      for (var G = 0; G < q.length; G++)
        B += String.fromCharCode(q[G]);
      var n = btoa(B);
      console.log(JSON.stringify([H, n]))
    })
  },
  get: function (Y, S) {
    var h = BINDB[Y]
      , q = Date.now()
      , H = atob(h[1])
      , I = H.length
      , E = new Uint8Array(I);
    for (var G = 0; G < I; G++)
      E[G] = H.charCodeAt(G);
    if (h[0] != 0) {
      var d = new Uint8Array(h[0]);
      UZIP.inflateRaw(E, d);
      E = d
    }
    if (S) {
      var B = eD.hj(E.buffer);
      E = eD.Oh(B).C3(E.buffer)
    }
    return E
  }
};
eD.hj = function (Y) {
  if (!(Y instanceof ArrayBuffer)) {
    console.log("Input is not ArrayBuffer")
  }
  var S = new Uint8Array(Y), h = eD.E4, q, H = 0, I = S.length - 1;
  if (h(S, [239, 187, 191]))
    H = 3;
  while (H < S.length && (S[H] == 9 || S[H] == 10 || S[H] == 13 || S[H] == 32))
    H++;
  while (I != 0 && (S[I] == 9 || S[I] == 10 || S[I] == 13 || S[I] == 32))
    I--;
  if (h(S, [56, 66, 80, 83]))
    q = "psd";
  if (h(S, [120]))
    q = "pxd";
  if (h(S, [103, 105, 109, 112, 32, 120, 99, 102, 32]))
    q = "xcf";
  if (h(S, [102, 105, 103, 45, 107, 105, 119, 105]))
    q = "fig";
  if (h(S, [137, 80, 78, 71, 13, 10, 26, 10])) {
    q = "png";
    var E = 8;
    while (E < S.length) {
      var d = k.n(S, E);
      E += 4;
      var B = k.Fe(S, E, 4);
      E += 4;
      if (B == "mkTS")
        q = "fpng";
      E += d + 4
    }
  }
  if (h(S, [87, 76]))
    q = "cdr";
  if (h(S, [82, 73, 70, 70])) {
    var n = dY.z7(S)
      , g = n.bj;
    if (g == "WEBP")
      q = "webp";
    else if (g.slice(0, 3) == "CDR")
      q = "cdr";
    else
      q = g
  }
  if (h(S, [70, 79, 82, 77]) || h(S, [76, 73, 83, 84]) || h(S, [67, 65, 84, 32])) {
    var n = eP.z7(S)
      , g = n.bj;
    if (g == "ILBM")
      q = "ilbm";
    else
      q = g
  }
  if (h(S, [255, 216, 255]))
    q = "jpg";
  if (h(S, [0, 0, 0, 12, 106, 80, 32, 32]))
    q = "jpg";
  if (h(S, [48, 0, 1, 0], 4))
    q = "jpg";
  if (h(S, [71, 73, 70, 56]))
    q = "gif";
  if (h(S, [0, 0, 0, 2, 121, 102, 113, 76]))
    q = "msh";
  if (h(S, [0, 0, 0, 3, 121, 102, 113, 76]))
    q = "msh";
  if (h(S, [0, 0, 0, 16]))
    q = "atn";
  if (h(S, [0, 1]))
    q = "aco";
  if (h(S, [0, 2]))
    q = "aco";
  if ([0, 1].indexOf(S[1]) != -1 && [1, 2, 3, 9, 10, 11].indexOf(S[2]) != -1 && [0, 16, 24, 32].indexOf(S[7]) != -1)
    q = "tga";
  if (h(S, [0, 2, 56, 66, 83, 76]))
    q = "asl";
  if (h(S, [0, 1, 0, -1, 0, 2, 0]))
    q = "abr";
  if (h(S, [0, 2, 0, -1, 0, 2, 0]))
    q = "abr";
  if (h(S, [0, 6, 0, 1]))
    q = "abr";
  if (h(S, [0, 6, 0, 2]))
    q = "abr";
  if (h(S, [0, 7, 0, 2]))
    q = "abr";
  if (h(S, [0, 9, 0, 2]))
    q = "abr";
  if (h(S, [0, 10, 0, 2]))
    q = "abr";
  if (h(S, [56, 66, 70, 83]))
    q = "shc";
  if (h(S, [56, 66, 80, 84]))
    q = "pat";
  if (h(S, [56, 66, 71, 82]))
    q = "grd";
  if (h(S, [56, 66, 84, 80]))
    q = "tpl";
  if (h(S, [0, 4, 0, 5]))
    q = "acv";
  if (h(S, [99, 117, 115, 104]))
    q = "csh";
  if (h(S, [0, 1, 0, 0, 0]))
    q = "otf";
  if (h(S, [79, 84, 84, 79]))
    q = "otf";
  if (h(S, [116, 116, 99, 102]))
    q = "otf";
  if (h(S, [68, 68, 83, 32]))
    q = "dds";
  if (h(S, [80, 86, 82, 3]))
    q = "pvr";
  if (h(S, [86, 84, 70, 0]))
    q = "vtf";
  if (h(S, [83, 73, 77, 80]))
    q = "fits";
  if (h(S, [0, 0, 1, 0]))
    q = "ico";
  if (h(S, [66, 77]))
    q = "bmp";
  if (h(S, [40, 0, 0, 0]))
    q = "bmp";
  if (h(S, [80, 49]))
    q = "ppm";
  if (h(S, [80, 50]))
    q = "ppm";
  if (h(S, [80, 51]))
    q = "ppm";
  if (h(S, [80, 52]))
    q = "ppm";
  if (h(S, [80, 53]))
    q = "ppm";
  if (h(S, [80, 54]))
    q = "ppm";
  if (h(S, [73, 73, 42, 0]))
    q = "tiff";
  if (h(S, [77, 77, 0, 42]))
    q = "tiff";
  if (h(S, [70, 85, 74, 73, 70, 73, 76, 77]))
    q = "raf";
  if (h(S, [112]))
    q = "lif";
  if (h(S, [73, 73, 26, 0]))
    q = "ciff";
  if (h(S, [83, 81, 76, 105]))
    q = "sketch";
  if (h(S, [80, 75])) {
    var z = UZIP.parse(Y, !0);
    if (z["document.json"])
      q = "sketch";
    else if (z.manifest)
      q = "xd";
    else
      q = "zip"
  }
  if (h(S, [123]))
    q = "json";
  if (k.n(S, 0) == S.length)
    q = "icc";
  if (h(S, [35]))
    q = "icc";
  if (h(S, [84, 73, 84, 76]))
    q = "icc";
  if (h(S, [76, 85, 84, 95]))
    q = "icc";
  if (h(S, [60, 63, 120, 109], H)) {
    if (k.Qq(S, "<look>") != -1)
      q = "icc";
    else
      q = "svg"
  }
  if (h(S, [60, 115, 118, 103], H))
    q = "svg";
  if (h(S, [60, 33, 100, 111], H) || h(S, [60, 33, 68, 79], H)) {
    if (k.Qq(S, "<svg") != -1)
      q = "svg";
    else
      q = "html"
  }
  if (h(S, [37, 33]) || h(S, [197, 208, 211, 198])) {
    q = "eps"
  }
  if (h(S, [37, 80, 68, 70], H)) {
    q = "pdf"
  } else if (h(S, [10, 69, 79, 70], I - 3))
    q = "dxf";
  if (h(S, [215, 205, 198, 154]))
    q = "wmf";
  if (h(S, [1, 0, 0, 0]))
    q = "emf";
  if (h(S, [118, 47, 49, 1]))
    q = "exr";
  if (h(S, [10, 10, 10, 10]))
    q = "jsx";
  if (h(S, [77, 90]))
    q = "exe";
  if (q == null && t.raw.FK(S.length) != null)
    return "tiff";
  return q
}
  ;
eD.E4 = function (Y, S, h) {
  if (h == null)
    h = 0;
  for (var G = 0; G < S.length; G++)
    if (S[G] != -1 && Y[h + G] != S[G])
      return !1;
  return !0
}
  ;
eD.Oh = function (Y) {
  var S = {
    BMP: eD.a6U,
    CDR: eD.G1,
    DDS: eD.Dm,
    EMF: eD.co,
    DXF: eD.RT,
    EPS: eD.q4,
    FIG: eD.R0,
    FPNG: eD.EQ,
    GIF: eD.P6,
    ICO: eD.hE,
    ILBM: eD.iM,
    FITS: eD.su,
    EXR: eD.I6,
    JPG: eD.mO,
    LIF: eD._8,
    PDF: eD.WD,
    PNG: eD.jV,
    PPM: eD.ir,
    PSD: eD.N8,
    PXD: eD.Hn,
    RAF: eD.WE,
    RAW: eD.Lw,
    SKETCH: eD.K0,
    SVG: eD.LA,
    TGA: eD.qG,
    TIFF: eD.MF,
    VTF: eD.ab,
    WEBP: eD.FZ,
    WMF: eD.me,
    XCF: eD.tA,
    XD: eD.ur,
    EXE: eD.fy,
    AI: eD.am4
  };
  return S[Y.toUpperCase()]
}
  ;
eD.pe = function (G) {
  var Y = eD.T9.aj7, S = eD.T9.ahC, h, q = [];
  if (G == null)
    h = Y.concat(S);
  else
    h = G == 0 ? Y : S;
  for (var G = 0; G < h.length; G++)
    if (eD.Oh(h[G]).rr)
      q.push(h[G]);
  return q
}
  ;
eD.lK = function (Y, S, h, q, H) {
  var I = eD.Z9(Y, S, h, q, H)
    , E = eD.PY(I);
  return E.buffer
}
  ;
eD.PY = function (Y) {
  var S = atob(Y.split(",").pop())
    , h = new Uint8Array(S.length);
  for (var G = 0; G < S.length; G++)
    h[G] = S.charCodeAt(G);
  return h
}
  ;
eD.Z9 = function (Y, S, h, q, H, I) {
  if (!(Y instanceof ArrayBuffer))
    throw "e";
  if (q == null)
    q = "png";
  if (q == "png" && I == !0) {
    var E = eD.Oh("PNG").rr([[Y, 0]], S, h);
    return "data:image/png;base64," + eD.iS(E)
  }
  var d = eD.mX;
  if (d == null)
    d = eD.mX = P.w("canvas");
  if (d.width != S || d.height != h) {
    d.width = S;
    d.height = h
  }
  var B = d.getContext("2d")
    , n = new ImageData(new Uint8ClampedArray(Y, 0, S * h * 4), S, h);
  B.putImageData(n, 0, 0);
  return d.toDataURL("image/" + q, H)
}
  ;
eD.ac7 = function (Y, S, h, q, H) {
  if (H == null)
    H = 0;
  var I = "<defs> \t<filter id=\"sofGlow\" height=\"300%\" width=\"300%\" x=\"-75%\" y=\"-75%\"> \t\t<!-- Thicken out the original shape --> \t<feMorphology operator=\"dilate\" radius=\"3\" in=\"SourceAlpha\" result=\"thicken\" /> \t\t<!-- Use a gaussian blur to create the soft blurriness of the glow -->\t\t<feGaussianBlur in=\"thicken\" stdDeviation=\"4\" result=\"blurred\" />\t\t<!-- Change the colour -->\t\t<feFlood flood-color=\"rgb(255,255,255)\" result=\"glowColor\" />\t\t<!-- Color in the glows -->\t\t<feComposite in=\"glowColor\" in2=\"blurred\" operator=\"in\" result=\"softGlow_colored\" />\t\t<!--\tLayer the effects together -->\t\t<feMerge>\t\t\t<feMergeNode in=\"softGlow_colored\"/>\t\t\t<feMergeNode in=\"SourceGraphic\"/>\t\t</feMerge>\t</filter></defs>"
    , E = "<svg  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"  width=\"128\"  height=\"128\"> " + I + "<g transform=\"translate(64 64) scale(" + .25 * Math.round(P.M()) + ")\">";
  if (Y == 1)
    E += "<g transform=\"scale(0.07 0.07) translate(-550 -112)\"  style=\"fill:#ffffff; stroke:#000000; stroke-width:60px;\">" + "<path d=\"m 555.1899,112.08836 0,120.71094 0,920.7109 232.42188,-232.42184 111.90429,270.44924 169.76363,-84.8828 -114.09371,-273.8555 320.71481,0 z\"/>" + "</g>";
  E += "<g filter=\"url(#sofGlow)\"><image transform=\"rotate(" + H + ")\" xlink:href=\"" + S + "\" x=\"" + 80 * h + "\" y=\"" + 80 * q + "\" height=\"80\" width=\"80\"/></g>" + "</g>" + "</svg>";
  var d = new Uint8Array(E.length);
  k.U9(E, d, 0);
  var B = "data:image/svg+xml;base64," + eD.iS(d.buffer);
  return {
    Vi: B,
    _: new W(0, 0, 128, 128),
    qy: new aV(64, 64)
  }
}
  ;
eD.iS = function (Y) {
  var S = new Uint8Array(Y)
    , h = "";
  for (var G = 0; G < S.length; G++)
    h += String.fromCharCode(S[G]);
  return btoa(h)
}
  ;
eD.alT = function (Y) {
  var S = atob(Y)
    , h = S.length
    , q = new Uint8Array(h);
  for (var G = 0; G < h; G++)
    q[G] = S.charCodeAt(G);
  return q.buffer
}
  ;
eD.wG = function (Y) {
  var S = []
    , h = [];
  for (var G = 0; G < Y.t.length; G++) {
    var q = Y.t[G];
    if (q.getName().slice(0, 3) == "_a_") {
      S.push(G);
      h.push(q.yj())
    }
  }
  return [S, h]
}
  ;
eD.mE = function (Y, S, h, q, H, I) {
  if (h == null)
    h = Y.d;
  if (q == null)
    q = Y.v;
  var E = new W(0, 0, Y.d, Y.v), d = new d5(h / (Y.d + .001), 0, 0, q / (Y.v + .001), 0, 0), n;
  S = S.toUpperCase();
  var B = eD.Oh(S);
  if (B.M4) {
    Y.Q3();
    n = B.rr(Y, h, q, H, I)
  } else {
    var g = eD.wG(Y), z = g[0], p = g[1], C;
    if (Y.h3.length != 0) {
      C = [];
      for (var G = 0; G < Y.h3.length; G++)
        C.push(Y.h3[G].Ga(E))
    }
    if (z.length < 2) {
      var T;
      if (h == Y.d && q == Y.v)
        T = Y.Q3().buffer;
      else {
        var A = U.o.dG([Y.Q3(), E], d);
        T = A.buffer.buffer
      }
      n = B.rr([[T, 0, Y.PW, Y.wH, C]], h, q, H)
    } else {
      var i = [];
      for (var G = 0; G < z.length; G++) {
        var e = z[G], T;
        for (var a = 0; a < z.length; a++)
          Y.t[z[a]].yR(z[a] == e);
        Y.Ko();
        Y.s();
        Y.aj();
        if (h == Y.d && q == Y.v)
          T = Y.Q3().buffer.slice(0);
        else {
          var A = U.o.dG([Y.Q3(), E], d);
          T = A.buffer.buffer
        }
        var Z = Y.t[e].getName().split(",");
        i.push([T, Z[1] ? parseInt(Z[1]) : 100, Y.PW, Y.wH, C])
      }
      for (var G = 0; G < z.length; G++)
        Y.t[z[G]].yR(p[G]);
      Y.s();
      Y.aj();
      if (H) {
        var O = H.length
          , c = H[O - 2]
          , s = H[O - 1]
          , x = H[O - 4] / 100;
        if (x != 1)
          for (var G = 0; G < i.length; G++)
            i[G][1] = Math.round((i[G][1] == 0 ? 16 : i[G][1]) / x);
        if (c)
          i.reverse();
        if (s) {
          var u = i.slice(1, i.length - 1);
          u.reverse();
          i = i.concat(u)
        }
      }
      n = B.rr(i, h, q, H)
    }
  }
  return n
}
  ;
eD.y8 = function (Y, S) {
  debugger
  var h = S[0].Sd && S[0].Sd.startsWith("_a_"), q, H = new dh(Y + ".psd"), I = new W(0, 0, 1, 1);
  if (h) {
    q = H.rY();
    q.add.lsct = hg.fC;
    q.wN(Y);
    q.XC = "pass";
    q.xa = 24;
    q.yR(!0);
    H.t.push(H.Ue())
  }
  for (var G = 0; G < S.length; G++) {
    var E = S[G];
    I = I.TG(E.jJ);
    var d = H.rY();
    d.yR(G == 0);
    d.wN(S.length == 1 ? "Background" : "Layer " + G);
    if (G == 0 && E.PW)
      H.PW = E.PW;
    if (G == 0 && E.wH)
      H.wH = E.wH;
    if (E.Sd)
      d.wN(E.Sd);
    if (E.dJ)
      for (var G = 0; G < E.dJ.length; G++) {
        var B = E.dJ[G]
          , n = dh.KK(B[0]);
        n.add.vmsk.b = B[1];
        t.Y.$M(B[1], new d5(I.d, 0, 0, I.v, 0, 0));
        H._b.push(n)
      }
    d.rect = E.jJ.clone();
    d.buffer = new Uint8Array(E.data);
    t.Wq(d);
    H.t.push(d)
  }
  if (h)
    H.t.push(q);
  if (S[0].h3) {
    for (var G = 0; G < S[0].h3.length; G++) {
      var g = new M.WB;
      H.h3.push(g);
      g.rect = S[0].jJ.clone();
      g.channel = S[0].h3[G]
    }
  }
  H.C = [h ? H.t.length - 1 : 0];
  H.d = I.d;
  H.v = I.v;
  H.buffer = t.m(I.e() * 4);
  H.s();
  return H
}
  ;
eD.jV = {};
eD.jV.rr = function (Y, S, h, q) {
  if (q == null)
    q = [100, !1, 0, 0, 0];
  var H = {
    sRGB: 1,
    loop: q[3]
  };
  if (Y[0][2] != null) {
    var I = Math.round(Y[0][2] * (1e4 / 254));
    H.pHYs = [I, I, 1]
  }
  var E = q[0]
    , d = E == 100 ? 0 : Math.max(2, Math.floor(E * 5));
  if (d == 5)
    d = 4;
  var B = []
    , n = [];
  for (var G = 0; G < Y.length; G++) {
    B.push(Y[G][0]);
    n.push(Y[G][1])
  }
  var g = UPNG.encode(B, S, h, d, n, H, q[1]);
  return g
}
  ;
eD.jV.ae8 = function (Y, S, h) {
  return UPNG.encodeLL([Y], S, h, 3, 1, 8)
}
  ;
eD.jV.C3 = function (Y) {
  var S = Date.now()
    , h = UPNG.decode(Y)
    , q = UPNG.toRGBA8(h)
    , H = h.width
    , I = h.height
    , E = 0;
  if (h.tabs.pHYs)
    E = Math.round(h.tabs.pHYs[0] * 254 / 1e4);
  if (q.length == 1)
    return [{
      jJ: new W(0, 0, H, I),
      data: q[0],
      PW: E
    }];
  var d = [];
  for (var G = 0; G < q.length; G++) {
    d.push({
      Sd: "_a_frm" + G + "," + h.frames[G].delay,
      jJ: new W(0, 0, H, I),
      data: q[G],
      PW: E
    })
  }
  return d
}
  ;
eD.ir = {};
eD.ir.rr = function (Y, S, h, q) {
  var H = new Uint8Array(Y[0][0])
    , I = S * h
    , E = I * 3
    , d = "P6\n" + S + " " + h + "\n255\n"
    , B = d.length
    , n = t.m(B + E, !0);
  for (var G = 0; G < B; G++)
    n[G] = d.charCodeAt(G);
  for (var G = 0; G < I; G++) {
    var g = G * 4
      , z = G * 3 + B;
    n[z] = H[g];
    n[z + 1] = H[g + 1];
    n[z + 2] = H[g + 2]
  }
  return n.buffer
}
  ;
eD.ir.C3 = function (Y) {
  Y = new Uint8Array(Y);
  var S = [" ".charCodeAt(0), "\n".charCodeAt(0), "\t".charCodeAt(0), "\r".charCodeAt(0)]
    , h = 0
    , q = String.fromCharCode(Y[0]) + String.fromCharCode(Y[1])
    , H = []
    , I = 0
    , E = q == "P1" || q == "P4" ? 2 : 3;
  for (h = 2; h < Y.length; h++) {
    var d = Y[h]
      , B = String.fromCharCode(d);
    if (d == "#".charCodeAt(0)) {
      while (Y[h] != "\n".charCodeAt(0))
        h++;
      continue
    }
    var n = S.indexOf(d) != -1;
    if (I == 0 && !n) {
      H.push(B);
      I = 1;
      continue
    }
    if (I == 1 && !n) {
      H[H.length - 1] += B;
      continue
    }
    if (I == 1 && n) {
      I = 0;
      if (H.length == E)
        break;
      continue
    }
  }
  var g = parseInt(H[0])
    , z = parseInt(H[1])
    , p = g * z * 4
    , C = q == "P1" || q == "P4" ? 1 : 255 / parseInt(H[2])
    , T = t.m(p);
  if (q == "P1" || q == "P2" || q == "P3") {
    var A = ""
      , i = 0
      , I = 0
      , e = "#".charCodeAt(0);
    for (var G = h; G < Y.length; G++) {
      var d = Y[G]
        , B = String.fromCharCode(d)
        , n = S.indexOf(d) != -1;
      if (d == e) {
        while (Y[G] != "\n".charCodeAt(0))
          G++
      } else if (I == 0 && !n) {
        A = B;
        I = 1
      } else if (I == 1) {
        if (n) {
          I = 0;
          var a = parseInt(A);
          A = "";
          if (q == "P1") {
            T[i] = T[i + 1] = T[i + 2] = (1 - a) * 255;
            T[i + 3] = 255;
            i += 4
          }
          if (q == "P2") {
            T[i] = T[i + 1] = T[i + 2] = Math.round(a * C);
            T[i + 3] = 255;
            i += 4
          }
          if (q == "P3") {
            T[i] = Math.round(a * C);
            i++;
            if ((i & 3) == 3) {
              T[i] = 255;
              i++
            }
          }
        } else
          A += B
      }
    }
  }
  var Z = g * z;
  if (q == "P4")
    for (var O = 0; O < z; O++) {
      var c = O * 8 * Math.ceil(g / 8);
      for (var s = 0; s < g; s++) {
        var G = c + s
          , x = Y[h + 1 + (G >> 3)];
        x = x >> 7 - (G & 7) & 1;
        var u = O * g + s << 2;
        T[u] = T[u + 1] = T[u + 2] = (1 - x) * 255;
        T[u + 3] = 255
      }
    }
  if (q == "P5")
    for (var G = 0; G < Z; G++) {
      var u = 4 * G;
      T[u] = T[u + 1] = T[u + 2] = Math.round(Y[h + 1 + G] * C);
      T[u + 3] = 255
    }
  if (q == "P6")
    for (var G = 0; G < Z; G++) {
      var u = 4 * G
        , y = h + 1 + 3 * G;
      T[u] = Math.round(Y[y] * C);
      T[u + 1] = Math.round(Y[y + 1] * C);
      T[u + 2] = Math.round(Y[y + 2] * C);
      T[u + 3] = 255
    }
  return [{
    jJ: new W(0, 0, g, z),
    data: T.buffer
  }]
}
  ;
eD.Dm = {};
eD.Dm.rr = function (Y, S, h, q) {
  var H = new Uint8Array(Y[0][0]);
  if ((S & 3) != 0 || (h & 3) != 0) {
    var I = S + (4 - (S & 3))
      , E = h + (4 - (h & 3))
      , d = new Uint8Array(I * E * 4);
    t.A5(d, 4278190080);
    t.rd(H, new W(0, 0, S, h), d, new W(0, 0, I, E));
    H = d;
    S = I;
    h = E
  }
  return UTEX.DDS.encode(H.buffer, S, h)
}
  ;
eD.Dm.C3 = function (Y) {
  var S = UTEX.DDS.decode(Y)[0];
  return [{
    jJ: new W(0, 0, S.width, S.height),
    data: S.image
  }]
}
  ;
eD.ab = {};
eD.ab.C3 = function (Y) {
  var S = UTEX.VTF.decode(Y).pop();
  return [{
    jJ: new W(0, 0, S.width, S.height),
    data: S.image
  }]
}
  ;
eD.mO = {};
eD.mO.RA = null;
eD.mO.a9Y = function (Y, S) {
  var h = eD.mO.RA
    , q = Y.byteLength
    , H = S.width
    , I = S.height
    , E = H * I
    , d = 5e6 + 2 * q + E * (S.progressive ? Math.max(2, S.numComponents) * 4 + 1 : 8)
    , B = h.instance.exports
    , n = B.memory.buffer.byteLength;
  if (n < d)
    B.memory.grow(d - n >>> 16);
  var g = new Uint8Array(B.memory.buffer)
    , z = B.malloc(q);
  g.set(new Uint8Array(Y), z);
  var p = B.malloc(4)
    , C = B.malloc(4)
    , D = B.malloc(4)
    , T = B.stbi_load_from_memory(z, q, p, C, D, 4);
  B.free(z);
  B.free(p, C, D);
  B.free(T);
  var A = g.slice(T, T + E * 4);
  return A
}
  ;
(function () {
  var Y = eD.wg.get("wasm/jpg").buffer;
  if (window.WebAssembly == null)
    window.alert("Your browser is too old. Please, update it.");
  WebAssembly.instantiate(Y).then(function (S) {
    eD.mO.RA = S
  })
}());
eD.mO.rr = function (Y, S, h, q) {
  if (q == null)
    q = [70];
  var H = Y[0]
    , I = new Uint8Array(H[0]);
  if (t.eM(I)) {
    var E = new Uint8Array(I.length)
      , d = new W(0, 0, S, h);
    t.A5(E, 4294967295);
    t.Q.Bc("norm", I, d, E, d, d, 1);
    I = E
  }
  var B = new Uint8Array(eD.lK(I.buffer, S, h, "jpeg", q[0] / 100));
  if (H[2] != null) {
    var n = eD.mO.kZ(B)[224][0] + 2;
    n += 9;
    B[n] = 1;
    k.gp(B, n + 1, H[2]);
    k.gp(B, n + 3, H[2])
  }
  if (H[3] != null && q[1] == !0 && Object.keys(H[3]).length != 0) {
    var g = 0
      , z = 0
      , p = 0
      , C = dc.ay(H[3])
      , T = new Uint8Array(UTIF.encode([C]))
      , A = "http://ns.adobe.com/xap/1.0/"
      , Z = 0
      , s = 0
      , v = 20;
    g = 4 + 6 + T.length;
    var i = dc.H$(H[3])
      , e = k.gN(i);
    z = 4 + A.length + 1 + e.length;
    var a = dc.ak6(H[3]);
    for (var G = 0; G < a.length; G++)
      Z += 5 + a[G][1].length;
    var O = Z + (Z & 1)
      , c = t.m(14 + 4 + 2 + 4 + O);
    k.St(c, s, "Photoshop 3.0");
    s += 14;
    k.St(c, s, "8BIM");
    s += 4;
    c[s++] = 4;
    c[s++] = 4;
    s += 2;
    k._6(c, s, Z);
    s += 4;
    for (var G = 0; G < a.length; G++) {
      var x = a[G]
        , u = x[1];
      c[s++] = 28;
      c[s++] = 2;
      c[s++] = x[0];
      k.gp(c, s, u.length);
      s += 2;
      k.St(c, s, u);
      s += u.length
    }
    p = 4 + c.length;
    var y = g + z + p
      , j = new Uint8Array(B.length + y);
    for (var G = 0; G < 20; G++)
      j[G] = B[G];
    for (var G = 20; G < B.length; G++)
      j[G + y] = B[G];
    j[v] = 255;
    j[v + 1] = 225;
    k.gp(j, v + 2, g - 2);
    k.St(j, v + 4, "Exif");
    for (var G = 0; G < T.length; G++)
      j[v + 10 + G] = T[G];
    v += g;
    j[v] = 255;
    j[v + 1] = 225;
    k.gp(j, v + 2, z - 2);
    k.St(j, v + 4, A);
    for (var G = 0; G < e.length; G++)
      j[v + 4 + A.length + 1 + G] = e[G];
    v += z;
    j[v] = 255;
    j[v + 1] = 237;
    k.gp(j, v + 2, p - 2);
    for (var G = 0; G < c.length; G++)
      j[v + 4 + G] = c[G];
    v += p;
    B = j
  }
  return B.buffer
}
  ;
eD.mO.kZ = function (Y) {
  var S = 0
    , h = []
    , q = Y.length;
  while (S < q) {
    while (Y[S] == 255)
      S++;
    var H = Y[S];
    S++;
    if (h[H] == null)
      h[H] = [];
    h[H].push(S - 2);
    if (H == 216)
      continue;
    if (H == 217)
      break;
    if (224 <= H && H <= 239 || H == 218 || H == 219 || H == 192 || H == 193 || H == 194 || H == 196 || H == 221 || H == 254) {
      var I = k.PX(Y, S);
      S += I;
      if (H == 218)
        while (S < q && (Y[S] != 255 || (Y[S + 1] == 0 || 208 <= Y[S + 1] && Y[S + 1] <= 215)))
          S++;
      continue
    }
    console.log("unknown marker ", H.toString(16), S);
    break
  }
  if (h[217] == null) {
    console.log("EOI marker missing");
    var E = Y.length - 2;
    Y[E] = 255;
    Y[E + 1] = 217;
    h[217] = [E]
  }
  return h
}
  ;
eD.mO.abn = function (Y) {
  Y = new Uint8Array(Y);
  if (Y[0] != 255)
    return Y.buffer;
  var S = eD.mO.kZ(Y)
    , h = eD.mO.iW(Y, S);
  if (h.numComponents != 4)
    return Y.buffer;
  var q = h.width
    , H = h.height
    , I = eD.mO.Sn(Y, S, !0);
  return eD.mO.rr([[I[0].data]], q, H, [85])
}
  ;
eD.mO.iW = function (Y, S) {
  var h = (S[192] ? S[192] : S[193] ? S[193] : S[194])[0] + 4
    , q = {};
  q.progressive = S[194] != null;
  q.precision = Y[h];
  h++;
  q.height = k.PX(Y, h);
  h += 2;
  q.width = k.PX(Y, h);
  h += 2;
  q.numComponents = Y[h];
  h++;
  if (S[224]) {
    var H = q.jfif = {};
    h = S[224][0] + 2 + 2 + 5 + 2;
    H.densityUnits = Y[h];
    h++;
    H.xDensity = k.PX(Y, h);
    h += 2;
    H.yDensity = k.PX(Y, h);
    h += 2
  }
  if (S[238]) {
    var H = q.adobe = {};
    h = S[238][0] + 2 + 2 + 6;
    H.version = Y[h];
    h++;
    H.flags0 = k.PX(Y, h);
    h += 2;
    H.flags1 = k.PX(Y, h);
    h += 2;
    H.transform = Y[h];
    h++
  }
  return q
}
  ;
eD.mO.a1d = function (Y, S, h) {
  var q = S
    , H = k.PX(Y, q);
  q += 2;
  var I = k.Fe(Y, q, 4);
  if (I == "Exif") {
    q += 6;
    var E = Y.slice(q, q + H - 8), d;
    try {
      d = UTIF.decode(E.buffer, {
        parseMN: !1,
        debug: !1
      })
    } catch (gx) { }
    if (d)
      h.exif = d
  } else if (I == "http") {
    var B = 0;
    while (Y[q + B] != 0)
      B++;
    var n = k.Fe(Y, q, B);
    q += B + 1;
    if (n == "http://ns.adobe.com/xmp/extension/") {
      var g = k.Fe(Y, q, 32);
      q += 32;
      q += 8;
      var z = S + H - q;
      while (Y[q + z - 1] == 0)
        z--;
      if (h.xmp_extn == null)
        h.xmp_extn = "";
      try {
        h.xmp_extn += k.Dt(Y, q, z)
      } catch (gx) { }
    } else if (n == "http://ns.adobe.com/xap/1.0/") {
      var p = k.Dt(Y.slice(q, q + H - B - 3));
      if (p[0] == "?")
        p = "<" + p;
      h.xmp = p
    }
  } else
    console.log(I)
}
  ;
eD.mO.Sn = function (Y, S, h) {
  var q = eD.mO.iW(Y, S), H = q.width, I = q.height, E = H * I, d, B = -1, A = 72, i;
  if (q.adobe)
    B = q.adobe.transform;
  if (h || H * I > 15e7 || B == 0 || B == 2) {
    var n = new PDFJS.JpegImage;
    n.parse(Y);
    var g = n.getData({
      width: H,
      height: I,
      forceRGB: !0,
      isSourcePDF: h
    })
      , d = t.m(E * 4);
    for (var G = 0; G < E; G++) {
      var z = G << 2
        , p = z - G;
      d[z] = g[p];
      d[z + 1] = g[p + 1];
      d[z + 2] = g[p + 2];
      d[z + 3] = 255
    }
  } else {
    d = eD.mO.a9Y(Y.buffer, q)
  }
  var C = S[225];
  if (C)
    for (var G = 0; G < C.length; G++)
      eD.mO.a1d(Y, C[G] + 2, q);
  var T = S[217][0] + 2;
  if (T != Y.length)
    q.suffix = Y.slice(T);
  var e = [H, I, 1, 0, 0, 0, 1, 0];
  if (q.jfif && q.jfif.densityUnits != 0) {
    A = Math.round([72, 1, 2.54][q.jfif.densityUnits] * q.jfif.xDensity)
  } else if (q.exif && q.exif[0].t282 != null) {
    var a = q.exif[0].t282[0];
    A = a[0] / a[1]
  }
  if (q.exif) {
    var Z = q.exif;
    i = dc.aB(Z[0]);
    var O = Z[0].t274;
    if (O)
      O = O[0];
    if (O != null && O > 1 && O < 20)
      e = t.raw.aI(O, H, I)
  }
  if (q.xmp) {
    i = dc.Xv(q.xmp, i)
  }
  var c = S[237]
    , s = []
    , x = [];
  if (c) {
    var u = new Uint8Array(65536)
      , y = 0
      , j = 0;
    for (var G = 0; G < c.length; G++) {
      j = c[G] + 2;
      var v = j + k.PX(Y, j);
      j += 2;
      var X = j;
      while (Y[j] != 0)
        j++;
      j++;
      var N = k.Fe(Y, X, j - X - 1)
        , V = v - j;
      while (y + V > u.length) {
        var $ = new Uint8Array(u.length * 2);
        $.set(u);
        u = $
      }
      var w = new Uint8Array(Y.buffer, j, V);
      u.set(w, y);
      y += V
    }
    j = 0;
    Y = u;
    while (j < y) {
      var m = k.Fe(Y, j, 4);
      j += 4;
      if (m != "8BIM" && m != "AgHg" && m != "PHUT" && m != "DCSR")
        throw m;
      var l = k.PX(Y, j);
      j += 2;
      var b = Y[j++]
        , K = k.Fe(Y, j, b);
      j += b;
      if ((b & 1) == 0)
        j++;
      var J = k.n(Y, j);
      j += 4;
      var T = j + J + (J & 1);
      if (l == 1028) {
        while (j + 4 < T) {
          var R = Y[j++]
            , r = Y[j++]
            , f = Y[j++]
            , gf = k.PX(Y, j);
          j += 2;
          if (R == 28 && r == 2)
            s.push([f, k.Fe(Y, j, gf)]);
          j += gf
        }
      } else if ((l & 2e3) == 2e3) {
        var aa = e$.ix(Y, j, J);
        x.push([K, aa])
      } else { }
      j = T
    }
    if (s.length != 0)
      i = dc.a7X(s, i)
  }
  var aA = [{
    jJ: new W(0, 0, H, I),
    data: d.buffer,
    PW: A,
    wH: i,
    dJ: x.length == 0 ? null : x
  }]
    , i = q.xmp_extn;
  if (i) {
    var e5 = new DOMParser
      , fk = e5.parseFromString(i, "image/svg+xml")
      , fk = fk.children[0].children[0].children[0]
      , o = [fk.getAttribute("GImage:Data"), fk.getAttribute("GDepth:Data")];
    for (var G = 0; G < o.length; G++)
      if (o[G]) {
        var eY = atob(o[G])
          , du = new Uint8Array(eY.length);
        k.St(du, 0, eY);
        du = du.buffer;
        var dV = eD.hj(du)
          , hy = eD.Oh(dV).C3(du);
        aA.push(hy[0])
      }
  }
  if (q.suffix) {
    var bq = q.suffix
      , i5 = k.Fe(bq, 4, 4)
      , hX = k.Qq(bq, String.fromCharCode(255) + String.fromCharCode(216) + String.fromCharCode(255));
    if (eD.E4(bq, [0, 0, 1, 10, 14, 0, 0, 0])) {
      var j = 0;
      while (j != bq.length) {
        var bY = k.Gz(bq, j + 2);
        j += 4;
        var ds = {
          2272: 12,
          2320: 21,
          2561: 13,
          2625: 21,
          2721: 3,
          2608: 0
        }[bY];
        if (ds != null) {
          var hV = k.iV(bq, j);
          j += 4;
          var gF = k.Fe(bq, j, hV);
          j += hV;
          var co = k.Fe(bq, j, ds);
          j += ds;
          if (bY == 2608) {
            var c_ = k.n(bq, j + 24);
            j += c_ + 24;
            var a5 = k.n(bq, j);
            j += a5;
            alert("Photopea found a " + ac.Fd(c_) + " MP4 video inside your image.", 4e3)
          }
        } else if (bY == 18502) {
          while (k.Fe(bq, j, 4) != "SEFT")
            j += 4;
          j += 4
        } else {
          break;
          console.log(k.f3(bq, j, 128));
          console.log(bq.slice(j));
          throw bY.toString(16)
        }
      }
    } else if (i5 == "ftyp") {
      alert("Photopea found a " + ac.Fd(bq.length) + " MP4 video inside your image.", 4e3)
    } else if (k.Fe(bq, 0, 4) == "fixe") {
      alert("Unknown data - " + bq.length + " B - at the end of the file", 3e3);
      var j = 4
        , J = k.iV(bq, j);
      j += 4;
      var gb = k.iV(bq, j);
      j += 4;
      var iC = k.iV(bq, j);
      j += 4;
      console.log(J, gb, iC, bq.slice(j, j + 84));
      j += 84;
      var cC = k.Fe(bq, j, 32);
      j += 32;
      j += 8;
      var cC = k.Fe(bq, j, 32);
      j += 32
    } else if (k.Fe(bq, 8, 13) == "FocusShot_Map") {
      var aB = k.n(bq, 0)
        , gf = k.iV(bq, 4)
        , du = t.m(E * 4)
        , cd = t.m(E * 4);
      for (var dZ = 0; dZ < I; dZ++)
        for (var en = 0; en < H; en++) {
          var G = dZ * H + en
            , z = G << 2
            , cD = 8 + 13 + ((dZ >>> 1) * H + en >>> 1)
            , hP = bq[cD]
            , ea = bq[cD + (E >>> 2)];
          du[z] = du[z + 1] = du[z + 2] = hP;
          du[z + 3] = 255;
          cd[z] = cd[z + 1] = cd[z + 2] = ea;
          cd[z + 3] = 255
        }
      aA.push({
        jJ: new W(0, 0, H, I),
        data: du.buffer
      }, {
        jJ: new W(0, 0, H, I),
        data: cd.buffer
      })
    } else if (i5 == "edof") {
      var O = bq[8 + 7];
      console.log(O.toString(16));
      var j = 8 + 16
        , fp = k.Gz(bq, j)
        , bC = k.Gz(bq, j + 2)
        , E = fp * bC;
      j += 4;
      j += 32 + 16;
      var hG = t.m(E * 4);
      for (var G = 0; G < E; G++) {
        var z = G << 2;
        hG[z] = hG[z + 1] = hG[z + 2] = bq[j + G];
        hG[z + 3] = 255
      }
      if (O == 16) { } else if (O == 19) {
        var b3 = hG.slice(0);
        t.I.N6(hG, b3, fp, bC);
        var ct = fp;
        fp = bC;
        bC = ct;
        t.I.aj9(b3, hG, fp, bC)
      } else
        throw "Unknown orientation of a depth map";
      aA.push({
        jJ: new W(0, 0, fp, bC),
        data: hG.buffer
      })
    } else if (hX != -1 && !(bq[0] == 255 && bq[1] == 129)) {
      try {
        if (hX != 0)
          bq = bq.slice(hX);
        var hy = eD.Oh("jpg").C3(bq.buffer);
        for (var G = 0; G < hy.length; G++)
          aA.push(hy[G])
      } catch (gx) { }
    }
  }
  if (aA.length > 1) {
    var fQ = aA[0].jJ;
    aA[0].Sd = "Main";
    for (var G = 1; G < aA.length; G++) {
      aA[G].Sd = eD.mO.ae4(new Uint8Array(aA[G].data)) ? "Depth Map" : null;
      var cj = aA[G].jJ;
      if (!cj.ma(fQ)) {
        var fJ = fQ.d / cj.d
          , cM = fQ.v / cj.v
          , cc = new d5;
        cc.scale(fJ, cM);
        var cr = U.o.Hz([new Uint8Array(aA[G].data), cj], 1, t.I.gA(cc));
        aA[G].jJ = cr.rect;
        aA[G].data = cr.buffer
      }
    }
  }
  if (eD.mO.a3 == 1)
    if (e[2] != 1 || e[6] != 1)
      for (var G = 0; G < aA.length; G++) {
        var bZ = aA[G]
          , eb = new Uint8Array(bZ.data)
          , H = bZ.jJ.d
          , I = bZ.jJ.v
          , fp = e[0]
          , bC = e[1]
          , d = t.m(fp * bC * 4);
        t.I.cw(eb, H, I, d, e);
        bZ.jJ = new W(0, 0, fp, bC);
        bZ.data = d.buffer
      }
  return aA
}
  ;
eD.mO.ae4 = function (Y) {
  var S = !0;
  for (var G = 0; G < Y.length; G += 4) {
    S = S && Y[G] == Y[G + 1] && Y[G + 1] == Y[G + 2]
  }
  return S
}
  ;
eD.mO.a3 = 0;
eD.mO.C3 = function (Y, S, h) {
  debugger
  Y = new Uint8Array(Y);
  if (Y[0] == 255) {
    var q = eD.mO.kZ(Y);
    if (q[195] == null) {
      eD.mO.a3++;
      var H = eD.mO.Sn(Y, q, !1);
      eD.mO.a3--;
      return H
    }
    var I = k.PX(Y, q[195][0] + 5)
      , E = k.PX(Y, q[195][0] + 7)
      , d = UTIF.LosslessJpegDecode(Y)
      , B = E * I
      , n = t.m(B * 4);
    for (var G = 0; G < B; G++) {
      var g = G << 2
        , z = g - G;
      n[g] = d[z];
      n[g + 1] = d[z + 1];
      n[g + 2] = d[z + 2];
      n[g + 3] = 255
    }
    return [{
      jJ: new W(0, 0, E, I),
      data: n.buffer
    }]
  } else if (Y[0] == 0 && Y[4] == 48 && Y[6] == 1) {
    var p = Y
      , C = new PDFJS.Jbig2Image
      , T = [];
    if (S)
      T.push({
        data: S,
        start: 0,
        end: S.length
      });
    T.push({
      data: p,
      start: 0,
      end: p.length
    });
    var d = C.parseChunks(T);
    if (!h)
      for (var G = 0; G < d.length; G++)
        d[G] = ~d[G];
    var E = k.n(Y, 11)
      , I = k.n(Y, 15)
      , A = Math.ceil(E / 8)
      , i = t.m(E * I * 4);
    for (var e = 0; e < I; e++) {
      var a = e * A;
      for (var Z = 0; Z < E; Z++) {
        var g = (e * E + Z) * 4
          , O = d[a + (Z >>> 3)] >>> 7 - (Z & 7) & 1
          , c = O * 255;
        i[g] = c;
        i[g + 1] = c;
        i[g + 2] = c;
        i[g + 3] = 255
      }
    }
    return [{
      jJ: new W(0, 0, E, I),
      data: i.buffer
    }]
  } else {
    var C = new PDFJS.JpxImage;
    C.parse(Y);
    var E = C.width
      , I = C.height
      , s = C.tiles
      , x = C.componentsCount
      , u = new Uint8Array(E * I * 4)
      , y = new W(0, 0, E, I);
    for (var C = 0; C < s.length; C++) {
      var j = s[C]
        , v = j.width
        , X = j.height
        , N = v * X
        , cs = j.items
        , V = new W(j.left, j.top, v, X)
        , $ = new Uint8Array(N * 4);
      if (x == 1)
        for (var G = 0; G < N; G++) {
          var w = cs[G]
            , g = G * 4;
          $[g] = w;
          $[g + 1] = w;
          $[g + 2] = w;
          $[g + 3] = 255
        }
      else if (x == 3)
        for (var G = 0; G < N; G++) {
          var z = G * 3
            , g = G * 4;
          $[g] = cs[z];
          $[g + 1] = cs[z + 1];
          $[g + 2] = cs[z + 2];
          $[g + 3] = 255
        }
      else
        console.log("Unknown number of components: " + x);
      t.rd($, V, u, y)
    }
    return [{
      jJ: y,
      data: u.buffer
    }]
  }
}
  ;
eD.FZ = {};
eD.FZ.rr = function (Y, S, h, q) {
  if (q == null)
    q = [70, 0, 0, 0];
  var H = q[0] / 100
    , B = 0;
  if (Y.length == 1)
    return eD.lK(Y[0][0], S, h, "webp", H);
  var I = k.pR
    , E = k.X9
    , d = new i6;
  I(d, B, "RIFF    WEBPVP8X");
  B += 16;
  E(d, B, 10);
  B += 4;
  E(d, B, 18);
  B += 4;
  E(d, B, S - 1);
  B += 3;
  E(d, B, h - 1);
  B += 3;
  I(d, B, "ANIM");
  B += 4;
  E(d, B, 6);
  B += 4;
  d.$r(B, 4);
  d.data[B + 3] = 255;
  k._u(d, B + 4, q[2]);
  B += 6;
  var n = [];
  for (var G = 0; G < Y.length; G++) {
    n.push(Y[G][0])
  }
  var g = UPNG.encode.compress(n, S, h, H == 1 ? 0 : Math.max(2, Math.floor(H * 500)), [!1, !0, !0, 0, !0]).frames;
  for (var G = 0; G < Y.length; G++) {
    I(d, B, "ANMF");
    B += 4;
    var z = B;
    B += 4;
    var p = g[G]
      , C = p.rect
      , T = [C.x >>> 1, C.y >>> 1, C.width - 1, C.height - 1, Y[G][1]];
    for (var A = 0; A < 5; A++)
      E(d, B + 3 * A, T[A]);
    B += 15;
    d.$r(B, 1);
    d.data[B] = 1 - p.blend << 1 | p.dispose;
    B++;
    var i = new Uint8Array(eD.lK(p.img.buffer, C.width, C.height, "webp", 1))
      , e = dY.z7(i.buffer).sub
      , a = k.Fe(i, 12, 4);
    if (a != "VP8L" && a != "VP8 " && a != "VP8X")
      throw "e";
    var Z = a == "VP8 " ? 0 : a == "VP8L" ? 12 : 30
      , O = i.length - Z;
    d.$r(B, O);
    for (var A = 0; A < O; A++)
      d.data[B + A] = i[Z + A];
    B += O;
    var c = B - z - 4;
    E(d, z, c);
    if ((c & 1) == 1) {
      d.$r(B, 1);
      B++
    }
  }
  E(d, 4, B - 8);
  return d.data.slice(0, B).buffer
}
  ;
(function () {
  var Y = eD.wg.get("wasm/webp").buffer;
  WebAssembly.instantiate(Y).then(function (S) {
    var h = S.instance.exports;
    eD.FZ.exp = h
  })
}());
eD.FZ.C3 = function (Y) {
  var S = new Uint8Array(Y)
    , h = eD.FZ.abR
    , q = null
    , H = dY.z7(Y).sub
    , I = {};
  for (var G = 0; G < H.length; G++)
    I[H[G]._z] = H[G];
  var E = I.ANIM
    , d = I.VP8L
    , B = I["VP8 "]
    , n = I.VP8X;
  if (E == null) {
    var g, z;
    if (B) {
      g = k.Gz(S, B.T + 6);
      z = k.Gz(S, B.T + 8)
    } else if (d) {
      var p = k.iV(S, d.T + 1);
      g = (p & (1 << 14) - 1) + 1;
      z = (p >>> 14 & (1 << 14) - 1) + 1
    } else
      throw "e";
    var C = [h(q, Y, {
      T: 0,
      size: S.length
    }, g, z)];
    return C
  }
  var T = n.T
    , g = 1 + (k.iV(S, T + 4) & 16777215)
    , z = 1 + (k.iV(S, T + 7) & 16777215)
    , A = []
    , i = new W(0, 0, g, z)
    , e = t.m(g * z * 4);
  for (var G = 0; G < H.length; G++) {
    var a = H[G];
    if (a._z != "ANMF")
      continue;
    var Z = [];
    for (var O = 0; O < 5; O++)
      Z.push(k.iV(S, a.T + O * 3) & 16777215);
    var c = new W(Z[0] * 2, Z[1] * 2, Z[2] + 1, Z[3] + 1)
      , s = Z[4]
      , x = h(q, Y, {
        T: a.T + 16,
        size: a.size - 16
      }, g, z)
      , u = new Uint8Array(x.data)
      , y = S[a.T + 15];
    if (y >>> 1 == 0)
      t.Q.Bc("norm", u, c, e, i, c, 1);
    else
      t.rd(u, c, e, i);
    A.push({
      Sd: "_a_" + A.length + "," + s,
      jJ: i.clone(),
      data: e.buffer.slice(0)
    });
    if ((y & 1) == 1) {
      t.A5(u, 0);
      t.rd(u, c, e, i)
    }
  }
  return A
}
  ;
eD.FZ.abR = function (Y, S, h, q, H) {
  var I = eD.FZ.exp
    , E = 5e6 + 2 * h.size + q * H * 10
    , d = I.memory
    , B = d.buffer.byteLength;
  if (B < E) {
    I.memory.grow((E - B >>> 16) + 1)
  }
  var n = new Uint8Array(d.buffer)
    , g = I.malloc(h.size);
  n.set(new Uint8Array(S, h.T, h.size), g);
  var z = I.malloc(8)
    , p = I.WebPDecodeARGB(g, h.size, z, z + 4)
    , C = k.iV(n, z)
    , T = k.iV(n, z + 4)
    , A = C * T * 4
    , i = t.m(A);
  for (var G = 0; G < A; G += 4) {
    i[G] = n[p + G + 1];
    i[G + 1] = n[p + G + 2];
    i[G + 2] = n[p + G + 3];
    i[G + 3] = n[p + G]
  }
  I.WebPFree(p);
  I.free(z);
  I.free(g);
  return {
    jJ: new W(0, 0, C, T),
    data: i.buffer
  }
}
  ;
eD.a6U = function () {
  function Y(d, B, n, g) {
    var z = new Uint8Array(d[0][0])
      , p = new Uint32Array(z.buffer)
      , C = []
      , T = {}
      , i = 24
      , e = 0
      , s = 0;
    for (var G = 0; G < p.length; G++) {
      var A = p[G] & 16777215;
      if (T[A] == null) {
        T[A] = C.length;
        C.push(A);
        if (C.length > 256) {
          C = null;
          break
        }
      }
    }
    if (C) {
      i = 1;
      while (1 << i < C.length)
        i *= 2;
      if (i == 2)
        i = 4
    }
    var a = {
      rz: B,
      UR: n,
      Ge: 1,
      yf: i,
      _X: 0,
      a5G: e
    }
      , Z = 4 * Math.floor((a.yf * a.rz + 31) / 32);
    a.size = Z * a.UR + 2;
    var O = new i6
      , c = C ? (1 << i) * 4 : 0;
    k.pR(O, s, "BM");
    s += 2;
    k.X9(O, s, Z * n + 16 + 40 + c);
    s += 4;
    k.X9(O, s, 0);
    s += 4;
    k.X9(O, s, 54 + c);
    s += 4;
    O.$r(s, 40);
    k.X9(O, s, 40);
    s += 4;
    E(O.data, s, a, Z);
    s += 36;
    if (C) {
      O.$r(s, c);
      var x = O.data;
      for (var G = 0; G < C.length; G++) {
        var u = s + G * 4
          , y = C[G] >>> 16
          , j = C[G] >>> 8 & 255
          , v = C[G] & 255;
        x[u] = y;
        x[u + 1] = j;
        x[u + 2] = v
      }
      s += c
    }
    O.$r(s, Z * n);
    if (i == 24)
      for (var X = 0; X < n; X++) {
        var N = s + (n - 1 - X) * Z;
        for (var V = 0; V < B; V++) {
          var $ = (X * B + V) * 4;
          O.data[N + V * 3 + 2] = z[$];
          O.data[N + V * 3 + 1] = z[$ + 1];
          O.data[N + V * 3 + 0] = z[$ + 2]
        }
      }
    else if (i == 8)
      for (var X = 0; X < n; X++) {
        var N = s + (n - 1 - X) * Z;
        for (var V = 0; V < B; V++) {
          var $ = X * B + V
            , w = T[p[$] & 16777215];
          O.data[N + V] |= w
        }
      }
    else if (i == 4)
      for (var X = 0; X < n; X++) {
        var N = s + (n - 1 - X) * Z;
        for (var V = 0; V < B; V++) {
          var $ = X * B + V
            , w = T[p[$] & 16777215];
          O.data[N + (V >>> 1)] |= w << 4 - (V & 1) * 4
        }
      }
    else if (i == 1)
      for (var X = 0; X < n; X++) {
        var N = s + (n - 1 - X) * Z;
        for (var V = 0; V < B; V++) {
          var $ = X * B + V
            , w = T[p[$] & 16777215];
          O.data[N + (V >>> 3)] |= w << 7 - (V & 7)
        }
      }
    s += Z * n + 2;
    return O.data.slice(0, s).buffer
  }
  function S(d) {
    d = new Uint8Array(d);
    if (k.iV(d, 0) == 40)
      return [h(d.buffer, 0)];
    var B = 0
      , n = k.Fe(d, B, 2);
    B += 2;
    if (n != "BM") {
      alert("Unsupported BMP format: " + n);
      return
    }
    var g = k.iV(d, B);
    B += 4;
    B += 4;
    var z = k.iV(d, B);
    B += 4;
    return [h(d.buffer, B, z)]
  }
  function h(d, B, n) {
    d = new Uint8Array(d);
    var g = k.iV(d, B)
      , z = I(d, B + 4);
    if (z.Ge != 1)
      alert("unsupported number of color planes: " + z.Ge);
    if (z._X != 0 && z._X != 1 && z._X != 2 && z._X != 3) {
      alert("Unsupported BMP compression: " + z._X);
      return
    }
    B += g;
    var p = B
      , C = d;
    if (n == null)
      n = B;
    if (z._X == 1 || z._X == 2) {
      var T = H(d, n, z);
      z.yf = 8;
      d = T;
      n = 0
    }
    var A = 4 * Math.floor((z.yf * z.rz + 31) / 32)
      , i = z.rz
      , e = Math.abs(z.UR)
      , a = new Uint8Array(i * e * 4);
    a.fill(255);
    if (z.yf == 32)
      for (var Z = 0; Z < e; Z++) {
        var O = n + (e - 1 - Z) * A;
        for (var c = 0; c < i; c++) {
          var s = (Z * i + c) * 4;
          a[s] = d[O + c * 4 + 2];
          a[s + 1] = d[O + c * 4 + 1];
          a[s + 2] = d[O + c * 4 + 0];
          a[s + 3] = d[O + c * 4 + 3]
        }
      }
    else if (z.yf == 24)
      for (var Z = 0; Z < e; Z++) {
        var O = n + (e - 1 - Z) * A;
        for (var c = 0; c < i; c++) {
          var s = (Z * i + c) * 4;
          a[s] = d[O + c * 3 + 2];
          a[s + 1] = d[O + c * 3 + 1];
          a[s + 2] = d[O + c * 3 + 0]
        }
      }
    else if (z.yf == 16)
      for (var Z = 0; Z < e; Z++) {
        var O = n + (e - 1 - Z) * A;
        for (var c = 0; c < i; c++) {
          var s = (Z * i + c) * 4
            , x = d[O + c * 2 + 1] << 8 | d[O + c * 2];
          a[s] = (x >>> 11) * (255 / 31);
          a[s + 1] = (x >>> 5 & 63) * (255 / 63);
          a[s + 2] = (x & 31) * (255 / 31)
        }
      }
    else if (z.yf == 8)
      for (var Z = 0; Z < e; Z++) {
        var O = n + (e - 1 - Z) * A;
        for (var c = 0; c < i; c++) {
          var s = (Z * i + c) * 4
            , u = d[O + c];
          a[s] = C[p + 4 * u + 2];
          a[s + 1] = C[p + 4 * u + 1];
          a[s + 2] = C[p + 4 * u + 0]
        }
      }
    else if (z.yf == 4)
      for (var Z = 0; Z < e; Z++) {
        var O = n + (e - 1 - Z) * A;
        for (var c = 0; c < i; c++) {
          var s = (Z * i + c) * 4
            , u = d[O + (c >> 1)];
          u = u >> 4 - 4 * (c & 1);
          u = u & 15;
          a[s] = C[p + 4 * u + 2];
          a[s + 1] = C[p + 4 * u + 1];
          a[s + 2] = C[p + 4 * u + 0]
        }
      }
    else if (z.yf == 1)
      for (var Z = 0; Z < e; Z++) {
        var O = n + (e - 1 - Z) * A;
        for (var c = 0; c < i; c++) {
          var s = (Z * i + c) * 4
            , y = d[O + (c >> 3)];
          y = y >> 7 - (c & 7);
          y = y & 1;
          a[s] = C[p + 4 * y + 2];
          a[s + 1] = C[p + 4 * y + 1];
          a[s + 2] = C[p + 4 * y + 0]
        }
      }
    else
      throw "Unknown bit depth " + z.yf;
    if (z.UR < 0) {
      var j = new Uint32Array(a.buffer)
        , v = e >>> 1;
      for (var Z = 0; Z < v; Z++) {
        var X = Z * i
          , N = (e - Z - 1) * i;
        for (var c = 0; c < i; c++) {
          var V = j[X + c];
          j[X + c] = j[N + c];
          j[N + c] = V
        }
      }
    }
    return {
      jJ: new W(0, 0, i, e),
      data: a.buffer
    }
  }
  function q(d, G) {
    return d >>> 4 - ((G & 1) << 2) & 15
  }
  function H(d, B, n) {
    var g = n.rz
      , z = Math.abs(n.UR)
      , p = new Uint8Array(g * z)
      , C = 0
      , T = 0
      , G = 0;
    while (T < z) {
      var A = d[B++]
        , i = d[B++]
        , e = T * g + C;
      if (A > 0) {
        if (n.yf == 4)
          for (G = 0; G < A; G++) {
            p[e + G] = q(i, G)
          }
        else
          for (G = 0; G < A; G++) {
            p[e + G] = i
          }
        C += A
      } else if (A == 0 && i == 0) {
        T++;
        C = 0
      } else if (A == 0 && i == 1) {
        break
      } else if (A == 0 && i == 2) {
        C += d[B++];
        T += d[B++]
      } else {
        var a = i;
        if (n.yf == 4) {
          for (G = 0; G < i; G++) {
            p[e + G] = q(d[B + (G >>> 1)], G)
          }
          a = Math.ceil(i / 2)
        } else {
          for (G = 0; G < i; G++) {
            p[e + G] = d[B + G]
          }
        }
        if ((a & 1) != 0)
          a++;
        B += a;
        C += i
      }
    }
    return p
  }
  function I(d, B) {
    var n = k.ka
      , g = k.iV
      , z = k.Gz
      , p = {};
    p.rz = n(d, B);
    B += 4;
    p.UR = n(d, B);
    B += 4;
    p.Ge = z(d, B);
    B += 2;
    p.yf = z(d, B);
    B += 2;
    p._X = g(d, B);
    B += 4;
    p.size = g(d, B);
    B += 4;
    var C = n(d, B);
    B += 4;
    var T = n(d, B);
    B += 4;
    p.a5G = g(d, B);
    B += 4;
    B += 4;
    return p
  }
  function E(d, B, n, g) {
    k.C_(d, B, n.rz);
    B += 4;
    k.C_(d, B, n.UR);
    B += 4;
    k.Na(d, B, n.Ge);
    B += 2;
    k.Na(d, B, n.yf);
    B += 2;
    k.C_(d, B, n._X);
    B += 4;
    k.C_(d, B, n.size);
    B += 4;
    k.C_(d, B, 2834);
    B += 4;
    k.C_(d, B, 2834);
    B += 4;
    k.C_(d, B, n.a5G);
    B += 4;
    B += 4
  }
  return {
    C3: S,
    rr: Y,
    ajZ: h
  }
}();
eD.P6 = {};
eD.P6.rr = function (Y, S, h, q) {
  if (q == null)
    q = [100, 0, 0, 0, 0];
  var H = []
    , I = []
    , E = S * h * 4
    , A = null;
  for (var d = 0; d < Y.length; d++) {
    var B = new Uint8Array(Y[d][0].slice(0));
    for (var G = 0; G < E; G += 4) {
      var n = B[G + 3] = B[G + 3] > 127 ? 255 : 0;
      if (n == 0)
        B[G] = B[G + 1] = B[G + 2] = 0
    }
    H.push(B.buffer);
    I.push(Y[d][1])
  }
  var g = Math.round(2 + 254 * q[0] / 100)
    , z = UPNG.encode.compress(H, S, h, g, [!0, !1, !1, 8, !1])
    , p = z.plte
    , C = new Uint8Array(4)
    , T = new Uint32Array(C.buffer);
  for (var G = 0; G < p.length; G++) {
    T[0] = p[G];
    var i = C[0];
    C[0] = C[2];
    C[2] = i;
    p[G] = T[0];
    if (T[0] == 0)
      A = G
  }
  while (p.length < 256)
    p.push(0);
  var e = new Uint8Array(2e3 + S * h * Y.length)
    , a = q[2]
    , Z = {
      palette: p
    };
  if (a != 1)
    Z.loop = a == 0 ? 0 : a - 1;
  var O = new GifWriter(e, S, h, Z);
  for (var G = 0; G < Y.length; G++) {
    var c = z.frames[G]
      , s = c.rect
      , x = c.blend
      , u = c.dispose;
    O.addFrame(s.x, s.y, s.width, s.height, c.img, {
      transparent: A,
      disposal: u + 1,
      delay: Math.round(I[G] / 10)
    })
  }
  return e.slice(0, O.end()).buffer
}
  ;
eD.P6.C3 = function (Y) {
  var S = Date.now()
    , h = []
    , q = UGIF.decode(Y)
    , H = UGIF.toRGBA8(q)
    , I = new W(0, 0, q.width, q.height);
  for (var G = 0; G < H.length; G++) {
    var E = q.frames[G];
    h.push({
      jJ: I.clone(),
      Sd: "_a_frm" + G + "," + E.delay * 10,
      data: H[G]
    })
  }
  return h
}
  ;
eD.hE = {};
eD.hE.rr = function (Y, S, h, q) {
  console.log(Y);
  if (S > 256 || h > 256) {
    alert("Maximum ICO size is 256x256 px. Will be cropped.", 4e3);
    var H = Math.min(S, 256)
      , I = Math.min(h, 256)
      , E = new W(0, 0, H, I)
      , d = t.m(E.e() * 4)
      , B = new W(0, 0, S, h)
      , n = new Uint8Array(Y[0][0]);
    t.rd(n, B, d, E);
    Y[0][0] = d.buffer;
    S = H;
    h = I
  }
  var g = new i6
    , z = 0
    , p = q && q[0] == !0;
  k._u(g, z, 0);
  z += 2;
  k._u(g, z, p ? 2 : 1);
  z += 2;
  k._u(g, z, 1);
  z += 2;
  var C = new Uint8Array(eD.Oh("png").rr(Y, S, h));
  g.$r(z, 16);
  g.data[z] = S == 256 ? 0 : S;
  z++;
  g.data[z] = h == 256 ? 0 : h;
  z++;
  z += 2;
  k._u(g, z, p ? Math.round(S / 2) : 1);
  z += 2;
  k._u(g, z, p ? Math.round(h / 2) : 32);
  z += 2;
  k.X9(g, z, C.length);
  z += 4;
  k.X9(g, z, 6 + 16);
  z += 4;
  g.$r(z, C.length);
  for (var G = 0; G < C.length; G++)
    g.data[z + G] = C[G];
  z += C.length;
  var T = new Uint8Array(z);
  for (var G = 0; G < z; G++)
    T[G] = g.data[G];
  return T.buffer
}
  ;
eD.hE.C3 = function (Y) {
  Y = new Uint8Array(Y);
  var S = 4
    , h = k.Gz(Y, S);
  S += 2;
  var q = [];
  for (var G = 0; G < h; G++) {
    var H = eD.hE.agC(Y, S + G * 16)
      , I = Y.buffer.slice(H.offset, H.offset + H.size)
      , E = eD.hj(I);
    E = E ? E : "bmp";
    if (E == "png") {
      var d = eD.Oh(E)
        , B = d.C3(I);
      H.yE = B[0]
    } else {
      var n = eD.Oh("BMP").ajZ(I, 0)
        , I = t.m(H.rz * H.UR * 4);
      t.rd(new Uint8Array(n.data), new W(0, 0, n.jJ.d, n.jJ.v), I, new W(0, H.UR, H.rz, H.UR));
      n.data = I.buffer;
      n.jJ.v = H.UR;
      H.yE = n
    }
    q.push(H)
  }
  q.sort(function (g, z) {
    if (g.rz != z.rz)
      return g.rz - z.rz;
    return g.a8B - z.a8B
  });
  return [q.pop().yE]
}
  ;
eD.hE.agC = function (Y, S) {
  var h = {};
  h.rz = Y[S];
  S++;
  if (h.rz == 0)
    h.rz = 256;
  h.UR = Y[S];
  S++;
  if (h.UR == 0)
    h.UR = 256;
  h.aaM = Y[S];
  S++;
  S++;
  h.aof = k.Gz(Y, S);
  S += 2;
  h.a8B = k.Gz(Y, S);
  S += 2;
  h.size = k.iV(Y, S);
  S += 4;
  h.offset = k.iV(Y, S);
  S += 4;
  return h
}
  ;
eD.MF = {};
eD.MF.C3 = function (Y) {
  var S = Date.now(), q, z = !0;
  if (t.raw.FK(Y.byteLength))
    return [t.raw.a7j(Y)];
  var h = UTIF.decode(Y);
  if (h[0].t33421)
    q = h[0];
  else if (h[0].subIFD && h[0].t271 && h[0].t271[0] == "Hasselblad") {
    q = h[0].subIFD[0];
    q.t33421 = [2, 2]
  } else if (h[0].subIFD && h[0].subIFD[0].t33421) {
    q = h[0].subIFD[0];
    if (q.t50706 == null) {
      if (q.t258[0] == 8)
        q.t258[0] = 12
    }
  } else if (h[0].subIFD && h[0].subIFD[0] && h[0].subIFD[0].t262 && h[0].subIFD[0].t262[0] == 34892)
    q = h[0].subIFD[0];
  else if (h[0].subIFD && h[0].subIFD[1] && h[0].subIFD[1].t33421)
    q = h[0].subIFD[1];
  else if (h[0].subIFD && h[0].subIFD[2] && h[0].subIFD[2].t33421)
    q = h[0].subIFD[2];
  else if (h[3] && h[3].t50648) {
    var H = h[0].exifIFD
      , I = H.makerNote;
    q = h[3];
    var E = I.t224[1]
      , d = I.t224[2];
    q.t256 = [E];
    q.t257 = [d];
    q.t258 = [16];
    q.t259 = [7];
    q.t262 = [32803];
    q.t277 = [1];
    q.t33421 = [2, 2];
    var B = q.t50656[0]
      , n = t.raw.$b[B];
    if (n == null)
      throw "e";
    q.t33422 = n
  }
  if (q) {
    UTIF.decodeImage(Y, q, h);
    for (var g in h[0])
      if ((g[0] == "t" || g[0] == "e" || g[0] == "d") && q[g] == null)
        q[g] = h[0][g];
    q.fE = h[0].t274 ? h[0].t274[0] : 1;
    return [q]
  }
  var p = 1 / 256;
  for (var G = 0; G < h.length; G++)
    if (h[G].t258 && h[G].t258[0] == 16 && h[G].t277 && h[G].t277[0] == 1) { } else
      z = !1;
  if (z) {
    var C = 0
      , T = 0
      , A = 0;
    for (var G = 0; G < h.length; G++) {
      UTIF.decodeImage(Y, h[G], h);
      var i = h[G].data;
      for (var e = 0; e < i.length; e += 2) {
        var a = i[e + 1] << 8 | i[e];
        if (a > C)
          C = a;
        T += a;
        A++
      }
    }
    p = 1 / 256 * 65535 / (.5 * C + .5 * (2 * T / A))
  }
  var Z = [];
  for (var G = 0; G < h.length; G++) {
    var O = h[G]
      , c = 72;
    UTIF.decodeImage(Y, O, h);
    var s = O.t282
      , x = O.t296;
    if (s != null && x != null) {
      c = s[0][0] / s[0][1];
      if (x[0] == 3)
        c = Math.round(c / 2.54)
    }
    if (O.width == null)
      continue;
    var u = UTIF.toRGBA8(O, p).buffer
      , y = dc.aB(O);
    Z.push({
      jJ: new W(0, 0, O.width, O.height),
      data: u,
      PW: c,
      wH: y
    })
  }
  return Z
}
  ;
eD.MF.rr = function (Y, S, h, q) {
  if (q == null)
    q = [!1];
  var H = {}
    , I = Y[0];
  if (I[3] != null && q[0])
    H = dc.ay(I[3]);
  if (I[2] != null) {
    H.t282 = H.t283 = [[Math.round(I[2]), 1]];
    H.t296 = [2]
  }
  return UTIF.encodeImage(I[0], S, h, H)
}
  ;
eD.N8 = {};
eD.N8.M4 = !0;
eD.N8.C3 = function (Y, S) {
  fV.z7(Y, S)
}
  ;
eD.N8.a5F = function (Y, S, h, q) {
  if (q == null)
    q = [!1, !1, !1];
  if (!q[0])
    Y.Q3();
  var H = new i6
    , I = fV.zN(Y, H, q);
  return [H.data.buffer, I]
}
  ;
eD.N8.rr = function (Y, S, h, q) {
  var H = eD.N8.a5F(Y, S, h, q)
    , I = H[0]
    , E = H[1];
  return I.byteLength == E ? I : I.slice(0, E)
}
  ;
eD.Hn = {};
eD.Hn.M4 = !0;
eD.Hn.C3 = function (Y, S) {
  var h = pako.inflate(new Uint8Array(Y))
    , q = k.PX(h, 0)
    , H = k.PX(h, 2)
    , I = 4;
  S.d = k.n(h, I);
  I += 4;
  S.v = k.n(h, I);
  I += 4;
  S.buffer = t.m(S.d * S.v * 4);
  var E = k.PX(h, I);
  I += 2;
  I += 4;
  for (var d = 0; d < E; d++) {
    var B = S.rY()
      , u = 1
      , y = 2
      , j = 3
      , v = 0;
    S.t.push(B);
    var n = k.n(h, I);
    I += 4;
    var g = I
      , z = k.PX(h, g);
    g += 2;
    var p = k.Dt(h, g, z);
    g += z;
    B.wN(p);
    g++;
    B.rect.x = k.Ii(h, g);
    g += 4;
    B.rect.y = k.Ii(h, g);
    g += 4;
    B.rect.d = k.n(h, g);
    g += 4;
    B.rect.v = k.n(h, g);
    g += 4;
    if (q > 3)
      g += 4;
    B.opacity = Math.round(255 * h[g] / 100);
    g++;
    B.yR(h[g] != 0);
    g++;
    B.XC = "norm,lddg,norm,dark,diff,norm,hLit,norm,norm,lite,mul ,over,scrn,fsub".split(",")[h[g]];
    g++;
    g++;
    if (q > 3) {
      var C = k.PX(h, g);
      g += 2;
      if (C != 0) {
        var T = JSON.parse(k.Dt(h, g, C));
        g += C;
        var A = T.text
          , i = T.textSettings
          , e = i.font
          , a = i.size
          , Z = i.padding
          , O = parseInt(i.color.slice(1), 16);
        B.add.lnsr = "rend";
        B.add.TySh = ap.Hr(0, 0);
        B.add.TySh.tI = new W(0, 0, 100, 100);
        B.add.TySh.J = new d5(1, 0, 0, 1, B.rect.x + Z, B.rect.y + Z);
        var c = B.add.TySh.lV;
        ap.sI(c, 1);
        ap.h6(c, [0, 0, B.rect.d - Z * 2, B.rect.v]);
        ap.LB(c, 0, A);
        var s = ap.Rm(c, 0, 1);
        s.cD.FontSize = a;
        s.cD.FillColor = {
          Type: 1,
          Values: [1, (O >>> 16 & 255) / 255, (O >>> 8 & 255) / 255, (O >>> 0 & 255) / 255]
        };
        if (i.bold)
          e += "-Bold";
        ap.UB(s, e);
        s.vY.Justification = ["left", "right", "center"].indexOf(i.align);
        ap.aN(c, 0, A.length, s)
      }
    }
    var x = k.n(h, g);
    g += 4;
    if (x != B.rect.e() * 4)
      throw "e";
    B.buffer = t.m(x);
    if (q > 3) {
      u = 0;
      y = 1;
      j = 2;
      v = 3
    }
    for (var G = 0; G < x; G += 4) {
      B.buffer[G] = h[g + G + u];
      B.buffer[G + 1] = h[g + G + y];
      B.buffer[G + 2] = h[g + G + j];
      B.buffer[G + 3] = h[g + G + v]
    }
    g += x;
    var X = k.n(h, g);
    g += 4;
    if (X == 0 && q > 3) {
      I += n;
      continue
    }
    var N = h[g];
    g++;
    var V = k.PX(h, g);
    g += 2;
    if (X != 0) {
      B.r = new M.WB;
      B.r.rect = B.rect.clone();
      B.r.channel = t.m(B.rect.e());
      for (var G = 0; G < X; G += 4)
        B.r.channel[G >>> 2] = h[g + G + 1];
      g += X
    }
    if (N != 0) {
      var $ = JSON.parse(ai.default);
      B.add.lmfx = $;
      for (var G = 0; G < ai.order.length; G++)
        $[ai.m6[G]] = {
          t: "VlLs",
          v: []
        };
      var w = {
        "102": 9,
        "101": 2,
        "103": 0,
        "104": 3,
        "105": 8
      };
      for (var G = 0; G < N; G++) {
        var m = k.PX(h, g)
          , l = g + m + 4
          , b = h.slice(g, l)
          , K = h[g + 2];
        g += 3;
        var J = w[K + ""]
          , R = JSON.parse(ai.l_[J]);
        $[ai.m6[J]].v.push({
          t: "Objc",
          v: R
        });
        if (J != 0) {
          R.Md.v.BlnM = iS.zw("norm");
          R.Opct.v.val = h[g];
          g++;
          if (J == 9 || J == 2) {
            R.Dstn.v.val = h[g + 1];
            g += 2
          } else
            g += 2;
          R.blur.v.val = Math.round(h[g] * 1.2);
          g++;
          if (J == 9 || J == 2) {
            R.uglg.v = !1;
            R.lagl.v.val = 180 - k.PX(h, g);
            g += 2
          }
          R.Clr.v = t.W.Da({
            h: h[g + 1],
            l: h[g + 2],
            O: h[g + 3]
          })
        } else {
          R.hglM.v.BlnM = R.sdwM.v.BlnM = iS.zw("norm");
          g += 2;
          var r = h[g++]
            , f = h[g++];
          R.blur.v.val = Math.round(Math.sqrt(f * r) * 1.3);
          R.srgR.v.val = Math.round(100 * r / f);
          R.uglg.v = !1;
          R.lagl.v.val = 180 - k.PX(h, g);
          g += 2;
          R.hglO.v.val = h[g++];
          R.hglC.v = t.W.Da({
            h: h[g + 1],
            l: h[g + 2],
            O: h[g + 3]
          });
          g += 4;
          R.sdwO.v.val = h[g++];
          R.sdwC.v = t.W.Da({
            h: h[g + 1],
            l: h[g + 2],
            O: h[g + 3]
          });
          g += 4
        }
        g = l
      }
    }
    if (g - I != n) {
      var aa = k.n(h, g)
        , fk = 0;
      g += 4;
      g++;
      var z = k.PX(h, g);
      g += 2;
      var A = k.Dt(h, g, z);
      g += z;
      A = A.replace(/\r/g, "\n");
      var z = k.PX(h, g);
      g += 2;
      var e = k.Dt(h, g, z);
      g += z;
      var a = k.PX(h, g);
      g += 2;
      var aA = B.rect.x
        , e5 = B.rect.d;
      if (aa & 4)
        fk = 1;
      if (aa & 2)
        fk = 2;
      var o = Math.round(a * .4);
      if (fk == 0 || fk == 2)
        e5 += o;
      if (fk == 1 || fk == 2) {
        e5 += o;
        aA -= o
      }
      B.add.lnsr = "rend";
      B.add.TySh = ap.Hr(0, 0);
      B.add.TySh.tI = new W(0, 0, 100, 100);
      B.add.TySh.J = new d5(1, 0, 0, 1, aA, B.rect.y + a * .25);
      var c = B.add.TySh.lV;
      ap.sI(c, 1);
      ap.h6(c, [0, 0, e5, B.rect.v]);
      ap.LB(c, 0, A);
      var s = ap.Rm(c, 0, 1);
      s.cD.FontSize = a;
      s.cD.FillColor = {
        Type: 1,
        Values: [1, h[g + 1] / 255, h[g + 2] / 255, h[g + 3] / 255]
      };
      g += 4;
      if (h[g + 5])
        e += "-Bold";
      if (h[g + 6])
        e += "-Italic";
      ap.UB(s, e);
      s.vY.Justification = fk;
      g += 8;
      ap.aN(c, 0, A.length, s)
    }
    I += n
  }
}
  ;
eD.K0 = {};
eD.K0.M4 = !0;
eD.K0.C3 = function (Y, S) {
  f7.z7(Y, S)
}
  ;
eD.ur = {};
eD.ur.M4 = !0;
eD.ur.C3 = function (Y, S) {
  fT.z7(Y, S)
}
  ;
eD.R0 = {};
eD.R0.M4 = !0;
eD.R0.C3 = function (Y, S) {
  aZ.z7(Y, S)
}
  ;
eD.tA = {};
eD.tA.M4 = !0;
eD.tA.C3 = function (Y, S) {
  bB.z7(Y, S)
}
  ;
eD.EQ = {};
eD.EQ.M4 = !0;
eD.EQ.C3 = function (Y, S) {
  iO.z7(Y, S)
}
  ;
eD.LA = {};
eD.LA.M4 = !0;
eD.LA.rr = function (Y, S, h, q, H) {
  if (q == null)
    q = [!0, !1, !1, !1, !0, !0];
  var I = g9.nq(Y, {
    MU: q[0],
    hidden: q[1],
    afO: q[2],
    a5w: q[3],
    names: q[4],
    al$: q[5],
    aon: S,
    a96: h
  }, H.Z7);
  return I
}
  ;
eD.LA.C3 = function (Y, S, h) {
  g9.z7(Y, S, h)
}
  ;
eD.q4 = {};
eD.q4.M4 = !0;
eD.q4.C3 = function (Y, S) {
  var h = 150
    , q = new d5(1, 0, 0, -1, 0, 0);
  q.scale(h / 72, h / 72);
  S.PW = h;
  var H = new ic(S, q, !0);
  FromPS.Parse(Y, H)
}
  ;
eD.WD = {};
eD.WD.M4 = !0;
eD.WD.rr = function (Y, S, h, q, H) {
  if (q == null)
    q = ["", 100, !1, !1, !1];
  q[5] = ["jpg"];
  var I = new ToPDF;
  bp.nq(Y, q, I, H.Z7);
  return I.buffer
}
  ;
eD.WD.C3 = function (Y, S, h) {
  var q = 2;
  while (!0) {
    var H = q * 72
      , I = new d5(1, 0, 0, -1, 0, 0);
    I.scale(H / 72, H / 72);
    S.PW = H;
    var E = new ic(S, I, !0);
    FromPDF.Parse(Y, E);
    var d = Math.max(S.d, S.v);
    if (h && d < Math.max(h[0], h[1])) {
      S.t = [];
      var B = q;
      while (d * (q / B) < Math.max(h[0], h[1]))
        q++
    } else
      break
  }
}
  ;
eD.me = {};
eD.me.M4 = !0;
eD.me.C3 = function (Y, S) {
  var h = 72
    , q = new d5(1, 0, 0, 1, 0, 0);
  q.scale(h / 72, h / 72);
  S.PW = h;
  var H = new ic(S, q, !1);
  FromWMF.Parse(Y, H)
}
  ;
eD.co = {};
eD.co.vj = !0;
eD.co.M4 = !0;
eD.co.rr = function (Y, S, h, q, H) {
  if (q == null)
    q = ["", !1, !1, !1];
  q[4] = [];
  var I = new ToEMF;
  bp.nq(Y, q, I, H.Z7);
  return I.buffer
}
  ;
eD.co.C3 = function (Y, S) {
  var h = 72
    , q = new d5(1, 0, 0, 1, 0, 0);
  q.scale(h / 72, h / 72);
  S.PW = h;
  var H = new ic(S, q, !1);
  FromEMF.Parse(Y, H)
}
  ;
eD.G1 = {};
eD.G1.M4 = !0;
eD.G1.C3 = function (Y, S) {
  return df.z7(Y, S)
}
  ;
eD.iM = {};
eD.iM.C3 = function (Y, S) {
  var h = eP.z7(Y), q = new Uint8Array(Y), H = 0, I, E, d, B, n, g, z, p, C = 0, T = 0, A = 0, i = 0, e = 0;
  for (var a = 0; a < h.sub.length; a++) {
    var Z = h.sub[a]
      , H = Z.T;
    if (Z._z == "BMHD") {
      var O = [];
      for (var G = 0; G < 4; G++)
        O[G] = k.PX(q, H + 2 * G);
      H += 8;
      B = O[2];
      n = O[3];
      E = O[0];
      d = O[1];
      I = t.m(E * d * 4);
      g = q[H++];
      z = q[H++];
      p = q[H++]
    } else if (Z._z == "CMAP")
      C = H;
    else if (Z._z == "CAMG") {
      var c = k.n(q, H);
      T = c & 32768,
        A = c & 4,
        i = c & 2048;
      e = c & 128
    } else if (Z._z == "BODY") {
      var s = E + 15 >>> 4 << 1, x = g + z, u = t.m(s * d * x), X, N, V;
      cW.NU(q, H, Z.size, u, 0, u.length);
      var y = g - 2
        , j = (1 << y) - 1
        , v = Math.round(255 / j);
      for (var n = 0; n < d; n++)
        for (var B = 0; B < E; B++) {
          var $ = 0;
          for (var w = 0; w < x; w++) {
            var m = (n * x + w) * s * 8 + B
              , l = u[m >>> 3] >>> 7 - (m & 7) & 1;
            $ |= l << w
          }
          var b = $ >>> g
            , $ = $ & (1 << g) - 1
            , G = n * E + B
            , K = G << 2;
          if (C != 0) {
            if (i != 0 && $ >>> y != 0) {
              var J = $ >>> y
                , R = ($ & j) * v;
              if (J == 1)
                V = R;
              else if (J == 2)
                X = R;
              else if (J == 3)
                N = R
            } else {
              var R = C + $ * 3;
              X = q[R + 0];
              N = q[R + 1];
              V = q[R + 2]
            }
          } else {
            X = $ >>> 0 & 255;
            N = $ >>> 8 & 255;
            V = $ >>> 16 & 255
          }
          I[K + 0] = X;
          I[K + 1] = N;
          I[K + 2] = V;
          I[K + 3] = 255
        }
    }
  }
  return [{
    jJ: new W(0, 0, E, d),
    data: I.buffer
  }]
}
  ;
eD.qG = {};
eD.qG.M4 = !1;
eD.qG.rr = function (Y, S, h, q) {
  var H = Y[0][4]
    , I = new Uint8Array(Y[0][0])
    , E = 2
    , d = H ? !0 : !1
    , B = d ? 4 : 3
    , n = new Uint8Array(S * h * B);
  for (var g = 0; g < h; g++)
    for (var z = 0; z < S; z++) {
      var p = g * S + z << 2
        , C = ((h - g - 1) * S + z) * B;
      n[C] = I[p + 2];
      n[C + 1] = I[p + 1];
      n[C + 2] = I[p + 0];
      if (d)
        n[C + 3] = H[0][g * S + z]
    }
  if (!0) {
    var T = n.length
      , A = 0
      , i = new Uint8Array(T * 2)
      , e = 0
      , a = 0
      , Z = S * B;
    while (a < T) {
      var O = a
        , c = 0
        , s = Z * (Math.floor(a / Z) + 1);
      while (O < s && c < 128) {
        var x = !0;
        for (var G = 0; G < B; G++)
          x = x & n[a + G] == n[O + G];
        if (!x)
          break;
        O += B;
        c++
      }
      if (c == 1) {
        var u = 1;
        while (u < 128 && a + (u + 1) * B < s) {
          var x = !0
            , y = a + u * B;
          for (var G = 0; G < B; G++)
            x = x & n[y + G] == n[y + B + G];
          if (x)
            break;
          u++
        }
        i[e++] = u - 1;
        for (var j = 0; j < u; j++)
          for (var G = 0; G < B; G++)
            i[e++] = n[a++]
      } else {
        i[e++] = 127 + c;
        for (var G = 0; G < B; G++)
          i[e + G] = n[a + G];
        e += B;
        a += B * c;
        A += c
      }
    }
    n = i.slice(0, e);
    E += 8
  }
  var v = new Uint8Array(18 + n.length + 26);
  v[2] = E;
  k.Na(v, 12, S);
  k.Na(v, 14, h);
  v[16] = B * 8;
  v[17] = B == 4 ? 8 : 0;
  v.set(n, 18);
  k.St(v, 18 + n.length + 8, "TRUEVISION-XFILE.");
  return v.buffer
}
  ;
eD.qG.C3 = function (Y) {
  var S = new Uint8Array(Y)
    , h = 0
    , q = S[0]
    , H = S[1]
    , I = S[2]
    , E = S[4] * 256 + S[3]
    , d = S[6] * 256 + S[5]
    , B = S[7]
    , n = S[9] * 256 + S[8]
    , g = S[11] * 256 + S[10]
    , z = S[13] * 256 + S[12]
    , p = S[15] * 256 + S[14]
    , C = S[16]
    , T = S[17]
    , A = T >>> 4
    , i = k.Fe(S, 18, q)
    , e = t.m(z * p * 4)
    , h = 18 + q + (d * B >>> 3)
    , a = new Uint8Array(S.buffer, h);
  if (I > 3) {
    var Z = 0
      , O = S
      , c = new Uint8Array(z * p * C >>> 3)
      , s = h
      , x = 0
      , u = S.length
      , y = C >>> 3;
    while (x < c.length) {
      var D = O[s];
      s++;
      if (D < 128)
        for (var G = 0; G < D + 1; G++) {
          for (var j = 0; j < y; j++) {
            c[x] = O[s];
            x++;
            s++
          }
        }
      else {
        for (var G = 0; G < D - 127; G++) {
          for (var j = 0; j < y; j++) {
            c[x] = O[s + j];
            x++
          }
        }
        s += y
      }
    }
    I -= 8;
    a = c;
    h = s
  } else
    h += z * p * C >>> 3;
  var v = new Uint8Array(4)
    , X = eD.qG.a5C;
  for (var N = 0; N < p; N++)
    for (var V = 0; V < z; V++) {
      var $ = (A & 2) == 0 ? (p - N - 1) * z + V : N * z + V, w = N * z + V, m, l, b, K = 255, J = $ * C >>> 3;
      if (I == 1) {
        var R = 0;
        if (C == 8)
          R = a[J];
        else
          throw "e";
        X(S, 18 + q + E + (R * B >>> 3), B, v);
        m = v[0];
        l = v[1];
        b = v[2];
        K = v[3]
      } else if (I == 2) {
        X(a, J, C, v);
        m = v[0];
        l = v[1];
        b = v[2];
        K = v[3]
      } else if (I == 3) {
        if (C == 8)
          m = l = b = a[J];
        else
          throw "e"
      }
      var r = w * 4;
      e[r] = m;
      e[r + 1] = l;
      e[r + 2] = b;
      e[r + 3] = K
    }
  var v = {
    jJ: new W(0, 0, z, p),
    data: e.buffer,
    Sd: i
  };
  if (t.eM(e)) {
    var f = t.m(z * p);
    t.Ft(e, f, 3);
    t.A5(e, 4278190080, 16777215);
    v.h3 = [f]
  }
  return [v]
}
  ;
eD.qG.a5C = function (Y, S, h, q) {
  var H, I, E, d = 255;
  if (h == 24 || h == 32) {
    E = Y[S];
    I = Y[S + 1];
    H = Y[S + 2];
    if (h == 32)
      d = Y[S + 3]
  } else if (h == 16) {
    var B = Y[S + 1] << 8 | Y[S + 0];
    H = B >>> 10 & 31;
    I = B >>> 5 & 31;
    E = B >>> 0 & 31;
    H = Math.round(H * (255 / 31));
    I = Math.round(I * (255 / 31));
    E = Math.round(E * (255 / 31))
  } else
    throw "e";
  q[0] = H;
  q[1] = I;
  q[2] = E;
  q[3] = d
}
  ;
eD._8 = {};
eD._8.C3 = function (Y) {
  var S = new Uint8Array(Y), h = 0, q = 112, H = 42, I = k.iV, g;
  h += 8;
  var E = S[h];
  h++;
  if (E != H)
    throw "e";
  var d = I(S, h);
  h += 4;
  var B = k.RN(S, h, d);
  h += d * 2;
  var n = [];
  while (h < S.length) {
    g = I(S, h);
    h += 4;
    if (g != q)
      throw g;
    h += 4;
    g = S[h];
    h++;
    if (g != H)
      throw g;
    var z = I(S, h);
    h += 4;
    var p = S[h];
    h++;
    if (p != H) {
      h -= 5;
      z = I(S, h);
      h += 8;
      g = S[h];
      h++;
      if (g != H)
        throw g
    }
    var C = I(S, h) * 2;
    h += 4;
    if (z > 0)
      n.push(h + C);
    h += C + z
  }
  var T = new DOMParser
    , A = T.parseFromString(B, "image/svg+xml").firstChild.firstChild
    , i = [];
  eD._8.Z0(A, S, n, i);
  return i
}
  ;
eD._8.Z0 = function (Y, S, h, q) {
  var H = Y.firstChild.firstChild;
  if (H.tagName == "Image") {
    var I = H.getElementsByTagName("ImageDescription")[0]
      , E = I.children[0].children
      , d = I.children[1].children
      , B = h.shift()
      , n = [];
    for (var G = 0; G < d.length; G++)
      n.push(parseInt(d[G].getAttribute("NumberOfElements")));
    while (n.length > 3)
      n[2] *= n.pop();
    var g = E.length
      , z = n[0]
      , p = n[1]
      , C = n[2]
      , T = parseInt(d[0].getAttribute("BytesInc"));
    for (var A = 0; A < C; A++) {
      var i = t.m(z * p * 4);
      t.A5(i, 4278190080);
      for (var e = 0; e < g; e++) {
        var a = t.m(z * p);
        if (T == 1)
          for (var Z = 0; Z < a.length; Z++)
            a[Z] = S[B + Z];
        else if (T == 2)
          for (var Z = 0; Z < a.length; Z++)
            a[Z] = Math.min(255, (S[B + Z * 2 + 1] << 8 | S[B + Z * 2]) >>> 2);
        else
          throw T;
        if (e != 3)
          t.Vj(a, i, e);
        if (g == 1) {
          t.Vj(a, i, 1);
          t.Vj(a, i, 2)
        }
        B += z * p * T
      }
      q.push({
        jJ: new W(0, 0, z, p),
        data: i.buffer
      })
    }
  } else {
    var O = Y.children
      , c = 0;
    while (c < O.length && O[c].tagName != "Children")
      c++;
    if (c == O.length)
      throw "e";
    O = O[c].children;
    for (var s = 0; s < O.length; s++)
      eD._8.Z0(O[s], S, h, q)
  }
}
  ;
eD.su = {};
eD.su.C3 = function (Y) {
  var S = new Uint8Array(Y)
    , h = 0
    , q = {}
    , g = 1e9;
  for (var G = 0; G < 306; G++) {
    var H = k.Fe(S, h, 8).trim()
      , I = k.Fe(S, h + 9, 71).split("/")[0].trim();
    q[H] = I;
    h += 80;
    if (H == "END") {
      h = Math.ceil(h / 2880) * 2880;
      break
    }
  }
  var E = parseInt(q.NAXIS1)
    , d = parseInt(q.NAXIS2)
    , B = E * d
    , n = parseInt(q.BITPIX)
    , z = -1e9
    , p = new Float32Array(B)
    , C = new Float32Array(Y, h, Y.byteLength - h >>> 2);
  for (var G = 0; G < B; G++) {
    var T = G << 2
      , A = G << 1;
    if (n == -32) {
      var i = S[h + T + 0];
      S[h + T + 0] = S[h + T + 3];
      S[h + T + 3] = i;
      var i = S[h + T + 1];
      S[h + T + 1] = S[h + T + 2];
      S[h + T + 2] = i;
      p[G] = C[G]
    } else if (n == 16) {
      p[G] = k.Gz(S, h + A)
    } else
      throw n;
    var e = p[G];
    if (e < g)
      g = e;
    if (e > z)
      z = e
  }
  var a = t.m(B * 4)
    , Z = 1 / z;
  for (var O = 0; O < d; O++)
    for (var c = 0; c < E; c++) {
      var G = O * E + c
        , s = (d - O - 1) * E + c
        , T = s << 2
        , e = p[G] * Z;
      a[T] = a[T + 1] = a[T + 2] = 255 * e;
      a[T + 3] = 255
    }
  return [{
    jJ: new W(0, 0, E, d),
    data: a,
    Sd: q.OBJECT
  }]
}
  ;
eD.WE = {};
eD.WE.C3 = function (Y) {
  var S = new Uint8Array(Y), h = 16, q = k.Fe(S, h, 4), I = 32, e = 0, a = 0, Z = !1, l;
  h += 4;
  var H = k.Fe(S, h, 8);
  h += 8;
  while (S[h + I - 1] == 0)
    I--;
  var E = k.Fe(S, h, I);
  h += 32;
  var d = k.Fe(S, h, 4);
  h += 4;
  h += 20;
  var B = k.n(S, h);
  h += 4;
  var n = k.n(S, h);
  h += 4;
  var g = k.n(S, h);
  h += 4;
  var z = k.n(S, h);
  h += 4;
  var p = k.n(S, h);
  h += 4;
  var C = k.n(S, h);
  h += 4;
  var T = "FujiFilm " + E
    , A = [0, 1, 1, 2];
  if (T == "FujiFilm X10") {
    T = "FujiFilm FinePix X10";
    A = [2, 1, 1, 0]
  }
  var i = {
    t271: ["FujiFilm"],
    t272: [T],
    t277: [1],
    t33421: [2, 2],
    t33422: A,
    fE: 1
  };
  h = g;
  var O = []
    , c = k.PX
    , s = k.n(S, h);
  h += 4;
  for (var G = 0; G < s; G++) {
    var x = c(S, h);
    h += 2;
    var u = c(S, h);
    h += 2;
    if (x == 256) {
      a = c(S, h);
      e = c(S, h + 2)
    } else if (x == 272) {
      O = [c(S, h), c(S, h + 2)]
    } else if (x == 273) {
      O.push(c(S, h), c(S, h + 2))
    } else if (x == 304) {
      Z = !(S[h] >>> 7)
    } else if (x == 305) {
      var y = Math.round(Math.sqrt(u))
        , j = [];
      for (var v = 0; v < u; v++)
        j.push(S[h + v]);
      j.reverse();
      i.t33421 = [y, y];
      i.t33422 = j
    } else if (x == 12272) {
      var X = c(S, h)
        , N = c(S, h + 2)
        , V = c(S, h + 6);
      i.t50728 = [X / N, 1, X / V]
    }
    h += u
  }
  var $ = e < a
    , w = S.slice(p, p + C)
    , m = Math.round(C * 8 / (e * a));
  if (w[0] == 73 && w[1] == 73 && w[2] == 42) {
    l = UTIF.decode(w.buffer)[0].fujiIFD;
    m = l.t61443[0];
    var b = l.t61454;
    i.t50728 = [b[0] / b[1], 1, b[0] / b[2]];
    var K = l.t61447[0];
    w = w.slice(K, K + l.t61448[0])
  }
  var C = w.length
    , J = C * 8 < e * a * m;
  if (J)
    alert("Compressed RAF is not supported yet :(");
  function R(aA, e5, fk) {
    fk = fk << 8 - (e5 & 7);
    var o = e5 >>> 3;
    aA[o] |= fk >>> 16;
    aA[o + 1] |= fk >>> 8;
    aA[o + 2] |= fk
  }
  var r = C * 8 / (e * a);
  if (r == 16)
    for (var G = 0; G < C; G += 2) {
      var f = w[G];
      w[G] = w[G + 1];
      w[G + 1] = f
    }
  else if (r == 14) {
    for (var G = 0; G < C; G += 4) {
      var f = w[G];
      w[G] = w[G + 3];
      w[G + 3] = f;
      f = w[G + 1];
      w[G + 1] = w[G + 2];
      w[G + 2] = f
    }
  } else if (r == 12)
    for (var G = 0; G < C; G += 3) {
      var gf = w[G + 2] << 16 | w[G + 1] << 8 | w[G + 0];
      gf = gf >>> 12 | (gf & 4095) << 12;
      w[G] = gf >>> 16 & 255;
      w[G + 1] = gf >>> 8 & 255;
      w[G + 2] = gf & 255
    }
  if ($)
    w = eD.WE.a9B(w, e, a);
  var aa = $ ? 2 : 1;
  e *= aa;
  i.t256 = [e];
  i.t257 = [a];
  i.t258 = [m];
  i.t50719 = [O[1], O[0] * aa];
  i.t50720 = [O[3], O[2] * aa];
  i.width = e;
  i.height = a;
  i.data = new Uint8Array(w.buffer);
  return [i]
}
  ;
eD.WE.a9B = function (Y, S, h) {
  Y = new Uint16Array(Y.buffer);
  var q = new Uint16Array(S * h * 2);
  for (var H = 0; H < h; H += 2)
    for (var I = 0; I < S; I++) {
      var E = H * S + I
        , d = E * 2
        , B = Y[E]
        , n = Y[E + S];
      q[d + 1] = q[d + 2 * S] = n;
      if (((H >>> 1) + I & 1) == 0) {
        q[d] = B;
        q[d + 2 * S + 1] = Y[E + 1]
      } else {
        q[d] = Y[E - 1];
        q[d + 2 * S + 1] = B
      }
    }
  return q
}
  ;
eD.Lw = {};
eD.Lw.vj = !0;
eD.Lw.rr = function (Y, S, h, q) {
  var H = new Uint8Array(Y[0][0])
    , I = S * h
    , E = [1, 3, 4][q[0]]
    , d = 8 + 8 * q[1]
    , B = q[2];
  if (E == 1) {
    var n = new Uint8Array(S * h);
    t.Ft(H, n, 0);
    H = n
  }
  if (E == 3) {
    var n = new Uint8Array(S * h * 3);
    for (var G = 0; G < I; G++) {
      var g = G * 4
        , z = G * 3;
      n[z] = H[g];
      n[z + 1] = H[g + 1];
      n[z + 2] = H[g + 2]
    }
    H = n
  }
  if (d == 16) {
    var p = H.length
      , n = new Uint8Array(p * 2);
    for (var G = 0; G < p; G++) {
      var C = Math.round(H[G] * (65535 / 255));
      n[G * 2 + B] = C >>> 8;
      n[G * 2 + 1 - B] = C & 255
    }
    H = n
  }
  return H.buffer
}
  ;
eD.I6 = {};
eD.I6.C3 = function (Y, S) {
  function h(B) {
    return ~~(.5 + t.BX(Math.max(0, Math.min(1, B))) * 255)
  }
  var q = EXRLoader.parse(Y)
    , H = q.width
    , I = q.height
    , E = t.m(H * I * 4);
  for (var d = 0; d < I; d++)
    for (var B = 0; B < H; B++) {
      var G = (d * H + B) * 4
        , n = ((I - d - 1) * H + B) * 4;
      E[G] = h(q.data[n + 0]);
      E[G + 1] = h(q.data[n + 1]);
      E[G + 2] = h(q.data[n + 2]);
      E[G + 3] = h(q.data[n + 3])
    }
  return [{
    jJ: new W(0, 0, H, I),
    data: E.buffer
  }]
}
  ;
eD.RT = {};
eD.RT.vj = !0;
eD.RT.M4 = !0;
eD.RT.rr = function (Y, S, h, q, H) {
  q = ["", 100, !1, !1, !1];
  q[5] = ["jpg"];
  var I = new ToDXF;
  bp.nq(Y, q, I, H.Z7);
  return I.buffer
}
  ;
eD.RT.C3 = function (Y, S) {
  var h = 72
    , q = new d5(1, 0, 0, 1, 0, 0);
  q.scale(h / 72, h / 72);
  S.PW = h;
  var H = new ic(S, q, !1);
  FromDXF.Parse(Y, H)
}
  ;
eD.fy = {};
eD.fy.C3 = function () {
  var Y = k.Gz, S = k.iV, h = k.Fe, q;
  function H(E, d, B, n, g) {
    var z = S(E, B)
      , p = S(E, B + 4)
      , C = S(E, B + 8)
      , T = Y(E, B + 12)
      , A = Y(E, B + 14);
    B += 16;
    var i = {};
    for (var G = 0; G < T + A; G++) {
      var e = S(E, B), a = S(E, B + 4), Z, O;
      if (e >>> 31 == 1) {
        e = e & 16777215
      }
      if (G < T)
        Z = k.RN(E, d + e + 2, Y(E, d + e));
      else
        Z = "id" + e;
      var c = n.slice(0);
      c.push(Z);
      if (a >>> 31 == 1) {
        a = a & 268435455;
        O = H(E, d, d + a, c, g)
      } else {
        var s = S(E, d + a)
          , x = S(E, d + a + 4)
          , u = S(E, d + a + 8)
          , y = S(E, d + a + 12);
        if (y != 0)
          throw "e";
        if (s < g[0] || s > g[0] + g[1])
          throw "e";
        var j = g[2] + s - g[0];
        O = E.slice(j, j + x);
        var v = eD.hj(O.buffer);
        if (v && ["bmp", "png", "ico"].indexOf(v) != -1) {
          var X = eD.Oh(v);
          if (!X.M4) {
            var N = null;
            try {
              N = X.C3(O.buffer)
            } catch (gx) { }
            if (N) {
              N[0].Sd = c[1];
              q.push(N[0])
            }
          }
        } else if (v)
          console.log(v)
      }
      i[Z] = O;
      B += 8
    }
    return i
  }
}