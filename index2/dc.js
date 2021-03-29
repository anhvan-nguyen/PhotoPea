function dc() { }
dc.BR = {
  "dc:Title": ["", null, "dc:title"],
  "tiff:Artist": ["", 315, "dc:creator"],
  "tiff:ImageDescription": ["", 270, "dc:description"],
  "dc:Keywords": ["", null, "dc:subject"],
  "tiff:Copyright": ["", 33432],
  "tiff:Make": ["", 271],
  "tiff:Model": ["", 272],
  "exif:ExposureTime": [[1, 200], 33434],
  "exif:FNumber": [[16, 1], 33437],
  "exif:ExposureProgram": [1, 34850],
  "exif:ISOSpeedRatings": [200, 34855],
  "exif:DateTimeOriginal": ["", 36867],
  "exif:ShutterSpeedValue": [[1, 1], 37377],
  "exif:ApertureValue": [[8, 1], 37378],
  "exif:ExposureBiasValue": [[1, 1], 37380],
  "exif:MaxApertureValue": [[1, 1], 37381],
  "exif:MeteringMode": [5, 37383],
  "exif:LightSource": [0, 37384],
  "exif:Flash": [0, 37385],
  "exif:FocalLength": [[60, 1], 37386],
  "exif:PixelXDimension": [1, 40962],
  "exif:PixelYDimension": [1, 40963],
  "exif:FocalPlaneXResolution": [[1, 1], 41486],
  "exif:FocalPlaneYResolution": [[1, 1], 41487],
  "exif:FocalPlaneResolutionUnit": [2, 41488],
  "exif:DigitalZoomRatio": [[100, 100], 41988],
  "exif:FocalLengthIn35mmFilm": [1, 41989],
  "exif:SceneCaptureType": [0, 41990],
  "exif:LensInfo": ["", 42034],
  "exif:Lens": ["", 42036],
  "exif:LensSerialNumber": ["", 42037],
  "exif:SensitivityType": [2, 34864],
  "exif:RecommendedExposureIndex": [100, 34866],
  "exif:GPSVersionID": ["2.3.0.0", 0],
  "exif:GPSLatitude": ["48,35,57.646N", 2],
  "exif:GPSLongitude": ["22,56,42.238E", 4],
  "exif:GPSAltitudeRef": [0, 5],
  "exif:GPSAltitude": [[1, 1], 6],
  "exif:GPSStatus": ["A", 9],
  "exif:GPSMapDatum": ["", 18]
};
dc.VG = {
  "5": "dc:Title",
  "55": "exif:DateTimeOriginal",
  "80": "tiff:Artist",
  "120": "tiff:ImageDescription"
};
dc.a7X = function (Y, S) {
  if (S == null)
    S = {};
  var h = dc.VG
    , q = [];
  for (var G = 0; G < Y.length; G++) {
    var H = Y[G]
      , I = h[H[0] + ""];
    if (S[I] == null)
      S[I] = H[1];
    else if (H[0] == 25)
      q.push(H[1])
  }
  if (q.length != 0 && S["dc:Keywords"] == null)
    S["dc:Keywords"] = q.join(";");
  return S
}
  ;
dc.ak6 = function (Y) {
  var S = dc.VG
    , h = [];
  for (var q in S)
    if (Y[S[q]])
      h.push([parseInt(q), Y[S[q]]]);
  if (Y["dc:Keywords"]) {
    var H = Y["dc:Keywords"].split(";");
    for (var G = 0; G < H.length; G++)
      h.push([25, H[G].trim()])
  }
  return h
}
  ;
dc.Xv = function (Y, S) {
  if (S == null)
    S = {};
  var h = new DOMParser
    , q = h.parseFromString(Y, "image/svg+xml")
    , H = q.getElementsByTagName("rdf:Description")[0];
  if (H == null)
    return S;
  var I = dc.BR;
  for (var E in I) {
    var d = I[E][2];
    if (d == null)
      continue;
    var B = H.getElementsByTagName(d)[0];
    if (B == null)
      continue;
    var cs = B.getElementsByTagName("rdf:li")
      , n = [];
    for (var G = 0; G < cs.length; G++)
      n.push(cs[G].textContent);
    S[E] = n.join("; ")
  }
  return S
}
  ;
dc.H$ = function (Y) {
  var S = ["<?xpacket begin=\"\uFEFF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>", "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c145 79.163499, 2018/08/13-16:40:22\">", "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">", "<rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\">"]
    , h = dc.BR;
  for (var q in h) {
    var H = Y[q]
      , I = h[q][2]
      , E = "Seq"
      , d = "";
    if (H == null || I == null)
      continue;
    if (I == "dc:title" || I == "dc:description") {
      E = "Alt";
      d = " xml:lang=\"x-default\""
    }
    if (I == "dc:subject")
      E = "Bag";
    S.push("\t<" + I + "><rdf:" + E + ">");
    var B = I == "dc:subject" ? H.split(";").join(",").split(",") : [H];
    for (var G = 0; G < B.length; G++)
      S.push("\t\t<rdf:li" + d + ">" + B[G].trim() + "</rdf:li>");
    S.push("\t</rdf:" + E + "></" + I + ">")
  }
  S.push("</rdf:Description>", "</rdf:RDF>", "</x:xmpmeta>", "<?xpacket end=\"w\"?>");
  return S.join("\n")
}
  ;
dc.rM = function (Y) {
  var S = [];
  for (var G = 0; G < Y.length; G++)
    S[G] = Y[G][1] == 0 ? 0 : Y[G][0] / Y[G][1];
  return S
}
  ;
dc.M2 = function (Y) {
  var S = [];
  for (var G = 0; G < Y.length; G++) {
    var h = Y[G]
      , q = 1;
    if (h != Math.round(h)) {
      q = 1e3;
      h = Math.round(h * q)
    }
    S[G] = [h, q]
  }
  return S
}
  ;
dc.aB = function (Y, S) {
  var h = dc.BR;
  if (S == null)
    S = {};
  for (var q in h) {
    var H = h[q][1]
      , I = "t" + H;
    if (H != null && Y[I] != null) {
      var E = Y[I];
      if (H == 0)
        E = E.join(".");
      else if (H == 2 || H == 4) {
        var d = Y["t" + (H - 1)];
        if (d == null)
          d = [H == 2 ? "N" : "E"];
        E = dc.rM(E).join(",") + d[0]
      } else if (H == 42034)
        E = dc.rM(E).join(" ");
      else if (H == 270 || H == 315) {
        var B = E[0]
          , n = new Uint8Array(B.length);
        k.St(n, 0, B);
        E = k.Dt(n)
      } else
        E = E[0];
      S[q] = E
    }
  }
  if (Y.exifIFD)
    dc.aB(Y.exifIFD, S);
  if (Y.gpsiIFD)
    dc.aB(Y.gpsiIFD, S);
  return S
}
  ;
dc.ay = function (Y, S, h) {
  var q = dc.BR
    , I = 0
    , d = 0;
  if (S == null)
    S = {};
  var H = {}
    , E = {};
  for (var B in q) {
    if (Y[B] == null || q[B][1] == null)
      continue;
    var n = q[B][1]
      , g = "t" + n
      , z = S;
    if (B.startsWith("exif:")) {
      z = H;
      I++;
      if (B.startsWith("exif:GPS")) {
        z = E;
        d++
      }
    }
    var p = Y[B];
    if (n == 0)
      p = new Uint8Array(p.split(".").map(parseFloat));
    else if (n == 2 || n == 4) {
      var C = p.length;
      z["t" + (n - 1)] = [p.slice(p.length - 1)];
      p = dc.M2(p.split(",").map(parseFloat))
    } else if (n == 42034)
      p = dc.M2(p.split(" ").map(parseFloat));
    else if (n == 270 || n == 315) {
      var T = k.gN(p);
      p = [k.Fe(T, 0, T.length)]
    } else
      p = [p];
    z[g] = p
  }
  if (I != 0) {
    S.exifIFD = H;
    S.t34665 = [0]
  }
  if (d != 0) {
    S.gpsiIFD = E;
    S.t34853 = [0]
  }
  var A = new Date
    , i = [A.getFullYear(), A.getMonth() + 1, A.getDate(), A.getHours(), A.getMinutes(), A.getSeconds()];
  for (var G = 0; G < 6; G++)
    i[G] = (i[G] + "").padStart(2, "0");
  S.t305 = ["Photopea Editor (www.photopea.com)"];
  if (h != !0)
    S.t306 = [i[0] + ":" + i[1] + ":" + i[2] + " " + i[3] + ":" + i[4] + ":" + i[5]];
  return S
}
  ;