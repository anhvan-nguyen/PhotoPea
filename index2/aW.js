var aW = {};
aW.T1 = function (Y, S, h) {
  var q = S.split(":")
    , H = q[0]
    , I = null;
  if (q.length == 2) {
    if (H == "jpg" || H == "webp")
      I = [Math.round(100 * parseFloat(q[1]))];
    if (H == "psd")
      I = [!0, !0]
  }
  var E = eD.mE(Y, H.toUpperCase(), null, null, I, h);
  return E
}
  ;
aW.anI = function (Y, S, h) {
  var q = Y.Q3()
    , H = S[0];
  return aW.T1(Y, H, h)
}
  ;
aW.a56 = function () {
  var Y = this.J7, S = this.caller, h = Y.UI.hP, q = h.formats, H, I;
  Y.Q3();
  var E = Date.now();
  if (h.version == 1) {
    var d = []
      , B = 0
      , g = 0;
    for (var G = 0; G < q.length; G++) {
      var n = aW.T1(Y, q[G], S.it);
      d.push(n);
      B += n.byteLength
    }
    H = new Uint8Array(2e3 + B);
    var z = "{ \"source\": " + JSON.stringify(Y.MP) + ", \"versions\": [\n";
    for (var G = 0; G < q.length; G++) {
      var p = new Uint8Array(d[G]);
      z += "\t{\"format\": \"" + q[G].split(":")[0] + "\", \"start\": " + g + ", \"size\": " + p.length + " }" + (G + 1 < q.length ? ", " : "") + "\n";
      H.set(p, 2e3 + g);
      g += d[G].byteLength
    }
    z += "] }";
    var C = k.U9(z, H, 0);
    for (var G = C; G < 2e3; G++)
      H[G] = 32;
    I = "application/octet-stream"
  } else {
    var T = new i6
      , A = 0
      , i = ""
      , e = encodeURIComponent;
    i = "p=" + e("{ \"source\": " + JSON.stringify(Y.MP) + ", \"versions\": [");
    k.pR(T, A, i);
    A += i.length;
    for (var G = 0; G < q.length; G++) {
      i = e(" {\"format\": \"" + q[G].split(":")[0] + "\", \"data\": \"");
      k.pR(T, A, i);
      A += i.length;
      var n = aW.T1(Y, q[G], S.it)
        , a = gN.agO(n, n.byteLength)
        , C = a.length;
      T.$r(A, C);
      for (var Z = 0; Z < C; Z++) {
        T.$r(A, 3);
        var O = a[Z];
        if (O == 43) {
          T.data[A] = 37;
          T.data[A + 1] = 50;
          T.data[A + 2] = 66;
          A += 3
        } else if (O == 47) {
          T.data[A] = 37;
          T.data[A + 1] = 50;
          T.data[A + 2] = 70;
          A += 3
        } else if (O == 61) {
          T.data[A] = 37;
          T.data[A + 1] = 51;
          T.data[A + 2] = 68;
          A += 3
        } else {
          T.data[A] = O;
          A++
        }
      }
      i = e("\" }" + (G + 1 < q.length ? ", " : ""));
      k.pR(T, A, i);
      A += i.length
    }
    i = e("] }");
    k.pR(T, A, i);
    A += i.length;
    H = T.data.slice(0, A);
    I = "application/x-www-form-urlencoded"
  }
  var c = new XMLHttpRequest;
  c.open("POST", h.url, !0);
  if (I)
    c.setRequestHeader("Content-Type", I);
  c.addEventListener("load", aW.a9e.bind(this));
  c.send(new Blob([H.buffer]))
}
  ;
aW.a9e = function (Y) {
  this.caller.Bk("Saving ...");
  var S = Y.target.response;
  if (S.charAt(0) == "{") {
    S = JSON.parse(S);
    if (S.newSource)
      this.J7.MP = S.newSource;
    if (S.message)
      alert(S.message, 2e3);
    if (S.script) {
      var h = new _(P.E.P, !0);
      h.data = {
        X: P.U.sw,
        v6: S.script
      };
      this.caller.B(h)
    }
  } else
    alert("Saved. Response: " + S, 1500)
}
  ;
aW.ako = function (Y) {
  var S = Y.JV.Jt
    , h = aW.T1(Y, S);
  dz.Vh(function () {
    var q = new XMLHttpRequest
      , H = "https://www.googleapis.com/upload/drive/v3/files/" + Y.JV.file.id + "?uploadType=media" + "&" + dz.gz();
    q.open("PATCH", H, !0);
    q.addEventListener("load", function (I) {
      var E = JSON.parse(I.target.response);
      alert(E.name + " updated")
    });
    q.send(h);
    alert("Saving \"" + Y.JV.file.name + "\" to Google Drive ...")
  })
}
  ;
aW.G8 = function (Y, S, h, q) {
  debugger
  if (window.location.href.indexOf("photopea.com") == -1 || window.top != window.self)
    aW.dT(Y, S, h, q);
  else {
    try {
      aW.dT(Y, S, h, q)
    } catch (gx) {
      if (gx == "low_ram") { } else {
        var H = "Error. Please, send your file to support@photopea.com and we will solve it.";
        if (eD.hj(S) == "eps")
          H = "We support only basic EPS files. Convert your file into PDF (with an online converter) and open the PDF in Photopea.";
        alert(H, 1e4)
      }
    }
  }
}
  ;
aW.dT = function (Y, S, h, q) {
  debugger
  var H;
  if (Y.name)
    H = Y.name.split(".")[0];
  else {
    if (Y.url.substring(0, 5) == "data:" || Y.url.indexOf("googleapis") != -1)
      H = "image";
    else
      H = Y.url.substring(Y.url.lastIndexOf("/") + 1).split(".")[0];
    H = H.slice(0, 50)
  }
  var I = Y.name ? Y.name : Y.url
    , E = new Uint8Array(S)
    , d = eD.hj(S)
    , B = window.ga;
  if (Math.random() < .25 && B && d != null && eD.Oh(d))
    B("send", "event", "Formats", d);
  if (d == null)
    d = k.Fe(E, 0, 4);
  if (I && I.toLowerCase().endsWith(".raw")) {
    var n = new _(P.E.P, !0);
    n.data = {
      X: P.U.V5,
      Fh: "importraw",
      iP: S,
      hg: I.split("/").pop()
    };
    h.B(n);
    return
  } else if (d == "json") {
    var g = "";
    for (var G = 0; G < E.length; G++)
      g += String.fromCharCode(E[G]);
    g = decodeURIComponent(escape(g));
    alert("Unknown JSON file opened. See the content in the console.", 5e3);
    console.log(JSON.parse(g));
    return
  }
  if (d == "html") {
    var g = k.Dt(E, 0, E.length)
      , z = new DOMParser
      , p = z.parseFromString(g, "text/html")
      , C = p.getElementsByTagName("meta");
    for (var G = 0; G < C.length; G++) {
      var T = C[G]
        , A = T.getAttribute("property")
        , i = T.getAttribute("content")
        , e = null;
      if (A == "og:image")
        e = i;
      if (A == null && i && i.startsWith("0;url=/imgres?")) {
        var a = i.slice(14).split("&");
        for (var Z = 0; Z < a.length; Z++)
          if (a[Z].startsWith("imgurl"))
            e = decodeURIComponent(a[Z].slice(7))
      }
      if (e == null)
        continue;
      var n = new _(P.E.P, !0);
      n.data = {
        X: P.U.Pv,
        go: {
          url: e,
          jz: !0,
          lS: Y.lS
        }
      };
      h.B(n)
    }
    return
  }
  if (eD.Oh(d)) {
    debugger
    var O, c = eD.Oh(d);
    if (Y.lS != null && "jpg png gif pdf svg psd".split(" ").indexOf(d) != -1) {
      var n = new _(P.E.P, !0);
      n.data = {
        X: P.U.sh,
        target: Y.lS,
        Pq: Y._V,
        n3: S,
        ft: H
      };
      h.B(n);
      return
    }
    if (c.M4) {
      O = new dh(H + (d == "psd" ? "" : "-" + d) + ".psd");
      O.OH = Y.OH;
      c.C3(S, O)
    } else {
      var s = c.C3(S);
      if (s.length == 0)
        return;
      if (s[0].t33421 || s[0].t50706) {
        t.raw.normalize(s[0], S);
        console.log(s[0]);
        var n = new _(P.E.P, !0);
        n.data = {
          X: P.U.V5,
          Fh: "rawpea",
          Vi: s[0]
        };
        h.B(n);
        return
      }
      if (q) {
        q(new Uint8Array(s[0].data), s[0].jJ);
        return
      }
      return { H,  s}
      // O = eD.y8(H, s)
    }
    // O.wa = d;
    // O.UI = Y.UI;
    // O.MP = Y.url;
    // O.K9 = Y.K9;
    // O.JV = Y.JV;
    // O.U$ = Y.U$;
    // if (O.JV)
    //   O.JV.Jt = d;
    // if (O.t.length != 0) {
    //   var n = new _(P.E.P, !0);
    //   n.data = {
    //     X: Y.lS == null ? P.U.Qc : P.U.sh,
    //     target: Y.lS,
    //     Pq: Y._V,
    //     n3: O
    //   };
    //   h.B(n)
    // }
    return
  }
  // var x = new _(P.E.P, !0);
  // x.data = {
  //   X: P.U.SM,
  //   iP: S,
  //   Us: Y.name
  // };
  // var u = Y instanceof File && Y.ab4 != !0
  //   , n = new _(P.E.P, !0);
  // n.data = {
  //   X: P.U.PD,
  //   UI: "add",
  //   go: null,
  //   Gu: null,
  //   ake: Y.ab4
  // };
  // if (d == "zip") {
  //   var y = Date.now()
  //     , j = UZIP.parse(S)
  //     , v = "xml rels plist iwa db ds_store txt rtf".split(" ");
  //   for (var X in j) {
  //     var N = !1;
  //     for (var G = 0; G < v.length; G++)
  //       if (X.toLowerCase().endsWith("." + v[G]))
  //         N = !0;
  //     if (X.startsWith("__MACOSX/") || j[X].length == 0)
  //       N = !0;
  //     if (N)
  //       continue;
  //     var V = X.split("/").pop();
  //     aW.G8({
  //       name: V
  //     }, j[X].buffer, h, q)
  //   }
  // } else if (d == "jsx") {
  //   var g = k.Dt(new Uint8Array(S));
  //   n.data = {
  //     X: P.U.sw,
  //     v6: g
  //   };
  //   h.B(n)
  // } else if (d == "otf") {
  //   if (u)
  //     h.B(x);
  //   var $ = Typr.parse(S);
  //   n.data.go = iD.OO;
  //   for (var G = 0; G < $.length; G++) {
  //     n.data.Gu = $[G];
  //     h.B(n)
  //   }
  // } else if (d == "asl") {
  //   if (u)
  //     h.B(x);
  //   var $ = eU.z7(S);
  //   n.data.go = iD.Zp;
  //   n.data.Gu = $.KJ;
  //   h.B(n);
  //   n.data.go = iD.YM;
  //   n.data.Gu = $.pB;
  //   h.B(n)
  // } else if (d == "tpl") {
  //   var $ = g4.z7(S);
  //   n.data.go = iD.e8;
  //   n.data.Gu = {
  //     r0: $.r0,
  //     SR: $.SR,
  //     list: []
  //   };
  //   h.B(n);
  //   if ($.akO.length != 0) {
  //     n.data.go = iD.Bt;
  //     n.data.Gu = $.akO;
  //     h.B(n)
  //   }
  //   if ($.pB.length != 0) {
  //     n.data.go = iD.YM;
  //     n.data.Gu = $.pB;
  //     h.B(n)
  //   }
  //   n.data.go = iD.iL;
  //   n.data.Gu = $.list;
  //   h.B(n)
  // } else {
  //   var w = "";
  //   for (var m in iD.FV)
  //     if (iD.FV[m][0] == d)
  //       w = m;
  //   if (w != "") {
  //     if (u)
  //       h.B(x);
  //     n.data.Gu = iD.FV[w][2].z7(S, I);
  //     n.data.go = w;
  //     h.B(n)
  //   } else
  //     alert("Unknown file format: " + JSON.stringify(d))
  // }
}
  ;