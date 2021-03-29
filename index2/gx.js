var gx = {};
  gx.v$ = 0;
  gx.if = {};
  gx.L7 = function(Y) {
      var S = LNG.tables
        , h = S[Y];
      if (typeof h == "string") {
          h = S[Y] = gx.FA(h)
      }
      return h
  }
  ;
  gx.FA = function(Y) {
      var S = []
        , h = 0
        , q = 0
        , H = []
        , I = Y.length;
      while (q != I) {
          var E = Y[q];
          if (E == "[") {
              S.push(H);
              H = [];
              q = h = q + 1
          } else if (E == "]") {
              H.push(h == q ? null : Y.substring(h, q));
              var d = H;
              H = S.pop();
              H.push(d);
              q = h = q + 1
          } else if (E == ";") {
              if (Y[q - 1] != "]")
                  H.push(h == q ? null : Y.substring(h, q));
              q = h = q + 1
          } else
              q++
      }
      return H
  }
  ;
  gx.get = function(Y) {
      if (typeof Y == "string")
          return Y;
      var S = typeof Y[0];
      if (S == "number") {
          for (var G = 1; G < Y.length; G++)
              if (typeof Y[G] != "number") {
                  console.log(Y);
                  throw "e"
              }
          return gx.ajm(Y)
      }
      var h = gx.get(Y[0]);
      for (var G = 1; G < Y.length; G++) {
          var q = gx.get(Y[G])
            , H = h.indexOf("VAR" + (G - 1));
          h = h.slice(0, H) + q + h.slice(H + 4)
      }
      return h
  }
  ;
  gx.ajm = function(Y) {
      var S = JSON.stringify(Y);
      if (gx.if[S] != null)
          return gx.if[S];
      var h = gx.L7(0)
        , q = gx.L7(gx.v$)
        , H = gx.FX(Y, q);
      if (H == null)
          H = gx.FX(Y, h);
      return H
  }
  ;
  gx.FX = function(Y, S) {
      for (var G = 0; G < Y.length; G++) {
          S = S[Y[G]];
          if (S == null)
              return null;
          else if (typeof S == "string")
              break
      }
      return S.split("::")[0]
  }
  ;
  gx.ajb = function() {
      var Y = function(h, q) {
          var H = h.code
            , I = q.code;
          if (H == "en")
              return -1;
          if (I == "en")
              return 1;
          var E = navigator.languages
            , d = E.indexOf(H) != -1
            , B = E.indexOf(I) != -1;
          if (d && B)
              return H > I ? 1 : -1;
          if (d)
              return -1;
          if (B)
              return 1;
          return H > I ? 1 : -1
      }
        , S = LNG.langs.slice(0);
      S.sort(Y);
      return S
  }
  ;
  gx.afP = function(Y) {
      gx.v$ = Y
  }
  ;
  gx.e1 = function(Y) {
      for (var G = 0; G < LNG.langs.length; G++)
          if (LNG.langs[G].code == Y)
              gx.v$ = G
  }
  ;
  gx.Ra = function() {
      return LNG.langs[gx.v$].code
  }
  ;
  gx.a8d = function(Y) {
      for (var G = 0; G < Y.length; G += 2)
          if (Y[G + 1].indexOf(">") == -1)
              gx.if[JSON.stringify(Y[G])] = Y[G + 1]
  }
  ;
  gx.mm = function(Y) {
      var S = -1
        , h = LNG.langs;
      for (var G = 0; G < h.length; G++)
          if (h[G].code == Y)
              S = G;
      return S
  }
  ;