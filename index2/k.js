function k() { }
    k.a3s = function (D) {
        var Y = "";
        for (var G = 3; G >= 0; G--)
            Y += String.fromCharCode(D >> G * 8 & 255);
        return Y
    }
        ;
    k.a8N = function (Y) {
        var D = 0;
        for (var G = Y.length - 1; G >= 0; G--)
            D |= Y.charCodeAt(G) << (3 - G) * 8;
        return D
    }
        ;
    k.indexOf = function (Y, S, h, q) {
        if (h == null)
            h = 0;
        if (q == null)
            q = Y.length;
        q = Math.min(q, Y.length);
        for (var G = h; G < q; G++)
            if (Y[G] == S)
                return G;
        return -1
    }
        ;
    k.Qq = function (Y, S, h) {
        if (h == null)
            h = 0;
        if (typeof S == "string") {
            var q = [];
            for (var G = 0; G < S.length; G++)
                q.push(S.charCodeAt(G));
            S = q
        }
        for (var G = h; G < Y.length; G++) {
            var H = !0;
            for (var I = 0; I < S.length; I++)
                if (S[I] != Y[G + I]) {
                    H = !1;
                    break
                }
            if (H)
                return G
        }
        return -1
    }
        ;
    k.N$ = function (Y, S, h) {
        var q = []
            , I = "";
        while (S < h) {
            var H = Y[S++];
            if (H == "\\".charCodeAt(0))
                q.push(Y[S++]);
            else
                q.push(H)
        }
        for (var G = 0; G < q.length; G += 2)
            I += String.fromCharCode(q[G] << 8 | q[G + 1]);
        return I
    }
        ;
    k.ahi = function (Y, S, h) {
        var q = new Uint8Array(2);
        for (var G = 0; G < h.length; G++) {
            k.gp(q, 0, h.charCodeAt(G));
            if (q[0] == ")".charCodeAt(0) || q[0] == "(".charCodeAt(0) || q[0] == "\\".charCodeAt(0)) {
                Y[S] = "\\".charCodeAt(0);
                S++
            }
            Y[S] = q[0];
            S++;
            if (q[1] == ")".charCodeAt(0) || q[1] == "(".charCodeAt(0) || q[1] == "\\".charCodeAt(0)) {
                Y[S] = "\\".charCodeAt(0);
                S++
            }
            Y[S] = q[1];
            S++
        }
        return S
    }
        ;
    k.rV = function (Y, S, h) {
        Y.$r(S, 4 * h.length);
        return k.ahi(Y.data, S, h)
    }
        ;
    k.RN = function (Y, S, h) {
        var q = "";
        for (var G = 0; G < h; G++) {
            var H = Y[S++] | Y[S++] << 8;
            q += String.fromCharCode(H)
        }
        return q
    }
        ;
    k._$ = function (Y, S, h) {
        var q = "";
        for (var G = 0; G < h; G++) {
            var H = Y[S++] << 8 | Y[S++];
            q += String.fromCharCode(H)
        }
        return q
    }
        ;
    k.a0X = function (Y, S, h) {
        for (var G = 0; G < h.length; G++) {
            var q = h.charCodeAt(G);
            k.Na(Y, S + 2 * G, q)
        }
    }
        ;
    k.S2 = function (Y, S, h) {
        for (var G = 0; G < h.length; G++) {
            var q = h.charCodeAt(G);
            k.gp(Y, S + 2 * G, q)
        }
    }
        ;
    k.ahQ = function (Y, S, h) {
        Y.$r(S, 2 * h.length);
        k.S2(Y.data, S, h)
    }
        ;
    k.aj3 = function (Y, G, S) {
        var h = []
            , q = 0
            , H = 0;
        S += G;
        while (G < S) {
            q = Y[G++];
            if ((q & 128) == 0)
                H = q;
            else if ((q & 224) == 192) {
                H = (q & 31) << 6;
                q = Y[G++];
                H |= q & 63
            } else if ((q & 240) == 224) {
                H = (q & 15) << 12;
                q = Y[G++];
                H |= (q & 63) << 6;
                q = Y[G++];
                H |= q & 63
            } else if ((q & 248) == 240) {
                H = (q & 7) << 18;
                q = Y[G++];
                H |= (q & 63) << 12;
                q = Y[G++];
                H |= (q & 63) << 6;
                q = Y[G++];
                H |= q & 63
            } else
                throw "e";
            h.push(H)
        }
        return h
    }
        ;
    k.Re = window.TextDecoder ? new window.TextDecoder("utf8") : null;
    k.Dt = function (Y, S, h) {
        if (S == null)
            S = 0;
        if (h == null)
            h = Y.length;
        if (k.Re && S == 0 && h == Y.length)
            return k.Re.decode(Y);
        var q = k.aj3(Y, S, h)
            , H = q.length;
        for (var G = 0; G < H; G++)
            q[G] = String.fromCharCode(q[G]);
        return q.join("")
    }
        ;
    k.TS = window.TextEncoder ? new window.TextEncoder("utf8") : null;
    k.gN = function (Y) {
        if (k.TS)
            return k.TS.encode(Y);
        var S = new Uint8Array(Y.length * 4)
            , h = k.U9(Y, S, 0);
        return S.slice(0, h)
    }
        ;
    k.U9 = function (Y, S, h) {
        var q = Y.length
            , G = 0;
        for (var H = 0; H < q; H++) {
            var I = Y.charCodeAt(H);
            if ((I & 4294967295 - (1 << 7) + 1) == 0) {
                S[h + G] = I;
                G++
            } else if ((I & 4294967295 - (1 << 11) + 1) == 0) {
                S[h + G] = 192 | I >> 6;
                S[h + G + 1] = 128 | I >> 0 & 63;
                G += 2
            } else if ((I & 4294967295 - (1 << 16) + 1) == 0) {
                S[h + G] = 224 | I >> 12;
                S[h + G + 1] = 128 | I >> 6 & 63;
                S[h + G + 2] = 128 | I >> 0 & 63;
                G += 3
            } else if ((I & 4294967295 - (1 << 21) + 1) == 0) {
                S[h + G] = 240 | I >> 18;
                S[h + G + 1] = 128 | I >> 12 & 63;
                S[h + G + 2] = 128 | I >> 6 & 63;
                S[h + G + 3] = 128 | I >> 0 & 63;
                G += 4
            } else
                throw "e"
        }
        return G
    }
        ;
    k.UP = function (Y, S) {
        var h = k.n(Y, S)
            , q = k.Dt(Y, S + 4, h - 1);
        return {
            D1: q,
            _I: 4 + h
        }
    }
        ;
    k.adX = function (Y, S) {
        var h = k.iV(Y, S)
            , q = k.RN(Y, S + 4, h);
        return q
    }
        ;
    k.Nr = function (Y, S) {
        var h = k.n(Y, S)
            , q = k._$(Y, S + 4, h);
        return q
    }
        ;
    k.CQ = function (Y, S) {
        var h = k.n(Y, S)
            , q = k._$(Y, S + 4, h - 1);
        return q
    }
        ;
    k.abT = function (Y, S, h) {
        k.C_(Y, S, h.length);
        S += 4;
        k.a0X(Y, S, h)
    }
        ;
    k.a5Y = function (Y, S, h) {
        k._6(Y, S, h.length);
        S += 4;
        k.S2(Y, S, h)
    }
        ;
    k.Xt = function (Y, S, h) {
        Y.$r(S, 4 + 2 * h.length);
        k.a5Y(Y.data, S, h)
    }
        ;
    k.afA = function (Y, S, h) {
        Y.$r(S, 4 + 2 * h.length);
        k.abT(Y.data, S, h)
    }
        ;
    k.f3 = function (Y, S, h) {
        var q = [];
        for (var G = 0; G < h; G++)
            q.push(String.fromCharCode(Y[S + G]));
        return q
    }
        ;
    k.af4 = function (Y, S, h) {
        var q = !1
            , H = Y.length - h.length;
        for (var G = S; G < H; G++) {
            for (var I = 0; I < h.length; I++) {
                if (Y[G + I] != h.charCodeAt(I))
                    break;
                if (I == h.length - 1)
                    return G
            }
        }
    }
        ;
    k.Fe = function (Y, S, h) {
        var q = "";
        for (var G = 0; G < h; G++)
            q += String.fromCharCode(Y[S + G]);
        return q
    }
        ;
    k.St = function (Y, S, h) {
        for (var G = 0; G < h.length; G++)
            Y[S + G] = h.charCodeAt(G)
    }
        ;
    k.pR = function (Y, S, h) {
        Y.$r(S, h.length);
        k.St(Y.data, S, h)
    }
        ;
    k.ac1 = function (Y, S, h) {
        var q = "";
        for (var G = 0; G < h; G++) {
            var H = Y[S + G];
            if (H < 10)
                q += "  ";
            else if (H < 100)
                q += " ";
            q += H + ", "
        }
        return q
    }
        ;
    k.PX = function (Y, S) {
        return Y[S] << 8 | Y[S + 1]
    }
        ;
    k.gp = function (Y, S, D) {
        Y[S] = D >> 8 & 255;
        Y[S + 1] = D & 255
    }
        ;
    k.GE = function (Y, S, D) {
        Y.$r(S, 4);
        k.gp(Y.data, S, D)
    }
        ;
    k.ajw = function (Y, S) {
        var h = k.PX(Y, S)
            , q = k.PX(Y, S + 2);
        return h + q * (1 / 65536)
    }
        ;
    k.$D = function (Y, S, D) {
        var h = Math.floor(D)
            , q = Math.floor((D - h) * 65536);
        k.gp(Y, S, h);
        k.gp(Y, S + 2, q)
    }
        ;
    k.Gz = function (Y, S) {
        return Y[S + 1] << 8 | Y[S]
    }
        ;
    k.Na = function (Y, S, D) {
        Y[S + 1] = D >> 8 & 255;
        Y[S] = D & 255
    }
        ;
    k._u = function (Y, S, D) {
        Y.$r(S, 4);
        k.Na(Y.data, S, D)
    }
        ;
    k.AV = function (Y, S) {
        k.RY[0] = Y[S + 1];
        k.RY[1] = Y[S];
        return k.RE[0]
    }
        ;
    k.YP = function (Y, S) {
        k.RY[0] = Y[S];
        k.RY[1] = Y[S + 1];
        return k.RE[0]
    }
        ;
    k.EX = k.gp;
    k.So = k.GE;
    k.Ii = function (Y, S) {
        k.oO[0] = Y[S + 3];
        k.oO[1] = Y[S + 2];
        k.oO[2] = Y[S + 1];
        k.oO[3] = Y[S];
        return k.lz[0]
    }
        ;
    k.Mp = function (Y, S, D) {
        k.lz[0] = D;
        Y[S + 3] = k.oO[0];
        Y[S + 2] = k.oO[1];
        Y[S + 1] = k.oO[2];
        Y[S + 0] = k.oO[3]
    }
        ;
    k.jT = function (Y, S, D) {
        Y.$r(S, 4);
        k.Mp(Y.data, S, D)
    }
        ;
    k.CS = function (Y, S, h, q) {
        h[q + 0] = Y[S + 0];
        h[q + 1] = Y[S + 1];
        h[q + 2] = Y[S + 2];
        h[q + 3] = Y[S + 3]
    }
        ;
    k.iV = function (Y, S) {
        k.CS(Y, S, k.oO, 0);
        return k.j$[0]
    }
        ;
    k.C_ = function (Y, S, D) {
        k.j$[0] = D;
        k.CS(k.oO, 0, Y, S)
    }
        ;
    k.X9 = function (Y, S, D) {
        Y.$r(S, 4);
        k.C_(Y.data, S, D)
    }
        ;
    k.ka = function (Y, S) {
        k.CS(Y, S, k.oO, 0);
        return k.lz[0]
    }
        ;
    k.abW = function (Y, S, D) {
        k.lz[0] = D;
        k.CS(k.oO, 0, Y, S)
    }
        ;
    k.a54 = function (Y, S, D) {
        Y.$r(S, 4);
        k.abW(Y.data, S, D)
    }
        ;
    k.n = function (Y, S) {
        var h = Y[S] * (256 * 256 * 256) + (Y[S + 1] << 16 | Y[S + 2] << 8 | Y[S + 3]);
        return h
    }
        ;
    k._6 = function (Y, S, D) {
        Y[S] = D >> 24 & 255;
        Y[S + 1] = D >> 16 & 255;
        Y[S + 2] = D >> 8 & 255;
        Y[S + 3] = D >> 0 & 255
    }
        ;
    k.Qx = function (Y, S, D) {
        Y.$r(S, 4);
        k._6(Y.data, S, D)
    }
        ;
    k.Sx = function (Y, S) {
        return k.n(Y, S) << 32 | k.n(Y, S + 4)
    }
        ;
    k.alo = function (Y, S, D) {
        k._6(Y, S, D >> 16 >> 16);
        k._6(Y, S + 4, D & 4294967295)
    }
        ;
    k.an = function (Y, S, D) {
        Y.$r(S, 8);
        k.alo(Y.data, S, D)
    }
        ;
    k._3 = function (Y, S) {
        var h = new Uint8Array(8);
        for (var G = 0; G < 8; G++)
            h[G] = Y[S + 7 - G];
        var q = new Float64Array(h.buffer);
        return q[0]
    }
        ;
    k.a0p = function (Y, S) {
        var h = new Uint8Array(8);
        for (var G = 0; G < 8; G++)
            h[G] = Y[S + G];
        var q = new Float64Array(h.buffer);
        return q[0]
    }
        ;
    k.I0 = function (Y, S, D) {
        var h = new Float64Array(1);
        h[0] = D;
        var q = new Uint8Array(h.buffer);
        for (var G = 0; G < 4; G++) {
            var H = q[G];
            q[G] = q[7 - G];
            q[7 - G] = H
        }
        for (var G = 0; G < 8; G++)
            Y[S + G] = q[G]
    }
        ;
    k.Ip = function (Y, S, D) {
        Y.$r(S, 8);
        k.I0(Y.data, S, D)
    }
        ;
    k.k7 = function (Y, S) {
        k.oO[0] = Y[S + 3];
        k.oO[1] = Y[S + 2];
        k.oO[2] = Y[S + 1];
        k.oO[3] = Y[S + 0];
        return k.HN[0]
    }
        ;
    k.Hp = function (Y, S) {
        k.oO[0] = Y[S + 0];
        k.oO[1] = Y[S + 1];
        k.oO[2] = Y[S + 2];
        k.oO[3] = Y[S + 3];
        return k.HN[0]
    }
        ;
    k.iJ = function (Y, S, D) {
        k.HN[0] = D;
        Y[S + 0] = k.oO[3];
        Y[S + 1] = k.oO[2];
        Y[S + 2] = k.oO[1];
        Y[S + 3] = k.oO[0]
    }
        ;
    k.a0B = function (Y, S, D) {
        Y.$r(S, 4);
        k.iJ(Y.data, S, D)
    }
        ;
    k.N0 = function (Y, S, D) {
        k.HN[0] = D;
        Y[S + 0] = k.oO[0];
        Y[S + 1] = k.oO[1];
        Y[S + 2] = k.oO[2];
        Y[S + 3] = k.oO[3]
    }
        ;
    k.a8x = function (Y, S, D) {
        Y.$r(S, 4);
        k.N0(Y.data, S, D)
    }
        ;
    k.ale = function (Y, S) {
        var h = k.Ii(Y, S)
            , q = h * (1 / (1 << 24));
        return q
    }
        ;
    k.wr = function (Y, S, h) {
        var q = Math.floor(h * (1 << 24));
        k.Mp(Y, S, q)
    }
        ;
    k.a5Q = function (Y, S, h) {
        Y.$r(S, 4);
        k.wr(Y.data, S, h)
    }
        ;
    k.Ci = function (Y, S) {
        var h = Y[S]
            , q = k.Fe(Y, S + 1, h);
        h += 1 - h % 2;
        return {
            V7: q,
            length: h + 1
        }
    }
        ;
    k.ala = function (Y, S, h) {
        var q = h.length;
        Y[S] = q;
        k.St(Y, S + 1, h);
        if (q % 2 == 0) {
            Y[S + 1 + q] = 0;
            ++q
        }
        return q + 1
    }
        ;
    k.JZ = function (Y, S, h) {
        Y.$r(S, h.length + 2);
        return k.ala(Y.data, S, h)
    }
        ;
    k.uh = function (Y, S) {
        var h = new d5;
        h.R = k._3(Y, S + 0 * 8);
        h.O = k._3(Y, S + 1 * 8);
        h.Pb = k._3(Y, S + 2 * 8);
        h.RH = k._3(Y, S + 3 * 8);
        h.TR = k._3(Y, S + 4 * 8);
        h.Un = k._3(Y, S + 5 * 8);
        return h
    }
        ;
    k.Ow = function (Y, S, h) {
        k.I0(Y, S + 0 * 8, h.R);
        k.I0(Y, S + 1 * 8, h.O);
        k.I0(Y, S + 2 * 8, h.Pb);
        k.I0(Y, S + 3 * 8, h.RH);
        k.I0(Y, S + 4 * 8, h.TR);
        k.I0(Y, S + 5 * 8, h.Un)
    }
        ;
    k.a6O = function (Y, S, h) {
        Y.$r(S, 48);
        k.Ow(Y.data, S, h)
    }
        ;
    k.abU = function (Y, S) {
        var h = k.k7(Y, S)
            , q = k.k7(Y, S + 4)
            , H = k.k7(Y, S + 8)
            , I = k.k7(Y, S + 12);
        return new W(h, q, H - h, I - q)
    }
        ;
    k.a1s = function (Y, S, h) {
        k.iJ(Y, S, h.x);
        k.iJ(Y, S + 4, h.y);
        k.iJ(Y, S + 8, h.x + h.d);
        k.iJ(Y, S + 12, h.y + h.v)
    }
        ;
    k.anY = function (Y, S, h) {
        Y.$r(S, 16);
        k.a1s(Y.data, S, h)
    }
        ;
    k.yZ = function (Y, S) {
        var h = k.Ii(Y, S)
            , q = k.Ii(Y, S + 4)
            , H = k.Ii(Y, S + 8)
            , I = k.Ii(Y, S + 12);
        return new W(q, h, I - q, H - h)
    }
        ;
    k.CI = function (Y, S, h) {
        k.Mp(Y, S, h.y);
        k.Mp(Y, S + 4, h.x);
        k.Mp(Y, S + 8, h.y + h.v);
        k.Mp(Y, S + 12, h.x + h.d)
    }
        ;
    k.T2 = function (Y, S, h) {
        Y.$r(S, 16);
        k.CI(Y.data, S, h)
    }
        ;
    k.wK = function (Y, S, h) {
        var q = new Uint8Array(h);
        for (var G = 0; G < h; G++)
            q[G] = Y[S + G];
        return q
    }
        ;
    k.Wa = function (Y, S, h) {
        Y.set(h, S)
    }
        ;
    k.E6 = function (Y, S, h) {
        Y.$r(S, h.length);
        k.Wa(Y.data, S, h)
    }
        ;
    k.abY = function (Y, S, h, D) {
        if (!D)
            D = 1;
        for (var G = 0; G < D; G++)
            Y[S + G] = h
    }
        ;
    k.x_ = function (Y, S, h, D) {
        if (!D)
            D = 1;
        Y.$r(S, D);
        k.abY(Y.data, S, h, D)
    }
        ;
    k.RE = new Int16Array(1);
    k.RY = new Uint8Array(k.RE.buffer);
    k.lz = new Int32Array(1);
    k.j$ = new Uint32Array(k.lz.buffer);
    k.oO = new Uint8Array(k.lz.buffer);
    k.HN = new Float32Array(k.lz.buffer);