function aV(Y, S) {
  if (!Y)
      Y = 0;
  if (!S)
      S = 0;
  this.x = Y;
  this.y = S
}
aV.prototype.add = function(Y) {
  return new aV(this.x + Y.x,this.y + Y.y)
}
;
aV.prototype.clone = function() {
  return new aV(this.x,this.y)
}
;
aV.prototype.jX = function(Y) {
  this.x = Y.x;
  this.y = Y.y
}
;
aV.prototype.ma = function(Y) {
  return this.x == Y.x && this.y == Y.y
}
;
aV.prototype.normalize = function(Y) {
  var S = Math.sqrt(this.x * this.x + this.y * this.y);
  this.x *= Y / S;
  this.y *= Y / S
}
;
aV.prototype.offset = function(Y, S) {
  this.x += Y;
  this.y += S
}
;
aV.prototype.bm = function(Y, S) {
  this.x = Y;
  this.y = S
}
;
aV.prototype.KB = function(Y) {
  return new aV(this.x - Y.x,this.y - Y.y)
}
;
aV.kr = function(Y, S) {
  return aV.agz(Y.x, Y.y, S.x, S.y)
}
;
aV.AZ = function(Y, S, h) {
  return new aV(Y.x + h * (S.x - Y.x),Y.y + h * (S.y - Y.y))
}
;
aV.aah = function(Y, S) {
  return new aV(Y * Math.cos(S),Y * Math.sin(S))
}
;
aV.agz = function(Y, S, h, q) {
  return Math.sqrt((h - Y) * (h - Y) + (q - S) * (q - S))
}
;
aV.DV = {};
aV.xY = {};
aV.DV.create = function() {
  var Y = new Float32Array(4);
  return Y
}
;
aV.xY.create = function(Y) {
  var S = new Float32Array(16);
  S[0] = S[5] = S[10] = S[15] = 1;
  if (Y)
      aV.xY.set(Y, S);
  return S
}
;
aV.DV.add = function(Y, S, h) {
  h[0] = Y[0] + S[0];
  h[1] = Y[1] + S[1];
  h[2] = Y[2] + S[2];
  h[3] = Y[3] + S[3]
}
;
aV.DV.set = function(Y, S) {
  S[0] = Y[0];
  S[1] = Y[1];
  S[2] = Y[2];
  S[3] = Y[3]
}
;
aV.xY.set = function(Y, S) {
  S[0] = Y[0];
  S[1] = Y[1];
  S[2] = Y[2];
  S[3] = Y[3];
  S[4] = Y[4];
  S[5] = Y[5];
  S[6] = Y[6];
  S[7] = Y[7];
  S[8] = Y[8];
  S[9] = Y[9];
  S[10] = Y[10];
  S[11] = Y[11];
  S[12] = Y[12];
  S[13] = Y[13];
  S[14] = Y[14];
  S[15] = Y[15]
}
;
aV.xY.multiply = function(Y, S, h) {
  var q = Y[0]
    , H = Y[1]
    , I = Y[2]
    , E = Y[3]
    , d = Y[4]
    , B = Y[5]
    , n = Y[6]
    , g = Y[7]
    , z = Y[8]
    , p = Y[9]
    , C = Y[10]
    , T = Y[11]
    , A = Y[12]
    , i = Y[13]
    , e = Y[14]
    , a = Y[15]
    , Z = S[0]
    , O = S[1]
    , c = S[2]
    , s = S[3];
  h[0] = Z * q + O * d + c * z + s * A;
  h[1] = Z * H + O * B + c * p + s * i;
  h[2] = Z * I + O * n + c * C + s * e;
  h[3] = Z * E + O * g + c * T + s * a;
  Z = S[4];
  O = S[5];
  c = S[6];
  s = S[7];
  h[4] = Z * q + O * d + c * z + s * A;
  h[5] = Z * H + O * B + c * p + s * i;
  h[6] = Z * I + O * n + c * C + s * e;
  h[7] = Z * E + O * g + c * T + s * a;
  Z = S[8];
  O = S[9];
  c = S[10];
  s = S[11];
  h[8] = Z * q + O * d + c * z + s * A;
  h[9] = Z * H + O * B + c * p + s * i;
  h[10] = Z * I + O * n + c * C + s * e;
  h[11] = Z * E + O * g + c * T + s * a;
  Z = S[12];
  O = S[13];
  c = S[14];
  s = S[15];
  h[12] = Z * q + O * d + c * z + s * A;
  h[13] = Z * H + O * B + c * p + s * i;
  h[14] = Z * I + O * n + c * C + s * e;
  h[15] = Z * E + O * g + c * T + s * a;
  return h
}
;
aV.xY.inverse = function(Y, S) {
  var h = Y[0]
    , q = Y[1]
    , H = Y[2]
    , I = Y[3]
    , E = Y[4]
    , d = Y[5]
    , B = Y[6]
    , n = Y[7]
    , g = Y[8]
    , z = Y[9]
    , p = Y[10]
    , C = Y[11]
    , T = Y[12]
    , A = Y[13]
    , i = Y[14]
    , e = Y[15]
    , a = h * d - q * E
    , Z = h * B - H * E
    , O = h * n - I * E
    , c = q * B - H * d
    , s = q * n - I * d
    , x = H * n - I * B
    , u = g * A - z * T
    , y = g * i - p * T
    , j = g * e - C * T
    , v = z * i - p * A
    , X = z * e - C * A
    , N = p * e - C * i
    , V = a * N - Z * X + O * v + c * j - s * y + x * u;
  if (!V) {
      return null
  }
  V = 1 / V;
  S[0] = (d * N - B * X + n * v) * V;
  S[1] = (H * X - q * N - I * v) * V;
  S[2] = (A * x - i * s + e * c) * V;
  S[3] = (p * s - z * x - C * c) * V;
  S[4] = (B * j - E * N - n * y) * V;
  S[5] = (h * N - H * j + I * y) * V;
  S[6] = (i * O - T * x - e * Z) * V;
  S[7] = (g * x - p * O + C * Z) * V;
  S[8] = (E * X - d * j + n * u) * V;
  S[9] = (q * j - h * X - I * u) * V;
  S[10] = (T * s - A * O + e * a) * V;
  S[11] = (z * O - g * s - C * a) * V;
  S[12] = (d * y - E * v - B * u) * V;
  S[13] = (h * v - q * y + H * u) * V;
  S[14] = (A * Z - T * c - i * a) * V;
  S[15] = (g * c - z * Z + p * a) * V;
  return S
}
;
aV.xY.akd = function(Y, S, h) {
  var q = S[0]
    , H = S[1];
  h[0] = q * Y[0] + H * Y[4] + Y[12];
  h[1] = q * Y[1] + H * Y[5] + Y[13]
}
;
aV.xY.a3G = function(Y, S, h) {
  var q = S[0]
    , H = S[1]
    , I = S[2]
    , E = S[3];
  h[0] = Y[0] * q + Y[4] * H + Y[8] * I + Y[12] * E;
  h[1] = Y[1] * q + Y[5] * H + Y[9] * I + Y[13] * E;
  h[2] = Y[2] * q + Y[6] * H + Y[10] * I + Y[14] * E;
  h[3] = Y[3] * q + Y[7] * H + Y[11] * I + Y[15] * E
}
;


var av = {};
av.$N = function() {
  return {
      fill: 1,
      $P: null,
      aW: [1, 1, 1],
      aco: 0,
      style: !1,
      x6: !1
  }
}
;