function b2() {
    e9.call(this);
    this.j = P.w("div", "");
    this.FJ = 762;
    this.cf = 750;
    this.it = null;
    this.xL = P.w("div", "");
    this.xL.setAttribute("style", "width:200em; height:100em; position:absolute;");
    this.jY = [];
    this.Cs = [];
    this.UG = {}
}
b2.prototype = new e9;
b2.prototype.d2 = function (Y) {
    var S = Date.now()
        , h = [];
    if (Y == "-")
        h = [new f2, new d2, new cp, new hU, new ac, new dE, new fl, new a1, new dB, new i8, new d9, new eX, new ek, new bK, new cR, new au, new c6, new f_, new bJ, new gJ, new eL, new br, new cl, new fy, new aY, new bc, new dK(0), new dK(1), new a8, new bS, new fh, new iM, new cX, new f8, new aS("border", [7, 9], "px"), new aS("smoothness", [19, 3, 0], "px"), new aS("expand", [7, 4], "px"), new aS("contract", [7, 5], "px"), new aS("feather", [7, 6], "px"), new fz(0, "namewindow", [12, 48]), new fz(1, "cornerradius", [12, 94, 0], "px", !0), new fz(1, "scaleeffects", "Scale Effects", "%", !0), new fz(1, "doczoom", "Zoom", "%", !0)];
    else
        h = [new cE(Y.slice(4))];
    this.ags(h);
    this.UG[Y] = !0
}
    ;
b2.prototype.ags = function (Y) {
    var S = this.it;
    for (var G = 0; G < Y.length; G++) {
        var h = Y[G];
        h.parent = this;
        this.Cs.push(h);
        this.BL(h);
        h.f();
        if (S)
            h.rJ(S, iD.Ie);
        h.k(P.E.Os, this.Bp, this)
    }
}
    ;
b2.prototype.hD = function (Y, S) {
    this.FJ = Y;
    this.cf = S;
    for (var G = 0; G < this.Cs.length; G++)
        this.BL(this.Cs[G])
}
    ;
b2.prototype.f = function () {
    for (var G = 0; G < this.Cs.length; G++)
        this.Cs[G].f()
}
    ;
b2.prototype.om = function () {
    return this.jY.length == 0 ? null : this.jY[this.jY.length - 1]
}
    ;
b2.prototype.VD = function () {
    for (var G = 0; G < this.jY.length; G++)
        if (this.jY[G].VD())
            return !0;
    return !1
}
    ;
// b2.prototype.a1L = function(Y, S, h, q, H) {
b2.prototype.a1L = function () {
    debugger
    var E = new dK(1)
    // var I = Y.startsWith("afw_")
    //     , E = null;
    // if (!I && !this.UG["-"])
    //     this.d2("-");
    // if (I && !this.UG[Y])
    //     this.d2(Y);
    // if (typeof Y == "object") {
    //     E = Y;
    //     if (!E.dY(P.E.Os, this.Bp))
    //         E.k(P.E.Os, this.Bp, this);
    //     E.parent = this
    // } else
    //     for (var G = 0; G < this.Cs.length; G++)
    //         if (this.Cs[G].id == Y)
    //             E = this.Cs[G];
    if (this.VD() && E.VD()) {
        alert("Finish the current action first");
        return
    }
    // if (!E.UO(S))
    //     return;
    // if (this.jY.indexOf(E) != -1) {
    //     if (Y == "colorpicker")
    //         E.kg(S, h, q, H);
    //     return
    // }
    var d = this.jY.length - 1;
    if (d >= 0)
        P.xv(this.jY[d].j, "wdisabled");
    return E
    // this.j.appendChild(E.j);
    // this.jY.push(E);
    // this.BL(E);
    // E.kg(S, h, q, H)
}
    ;
b2.prototype.BL = function (Y) {
    var S = this.FJ, h = this.cf, q = Y.OV(S, h), H;
    if (q != null) {
        H = q
    } else {
        q = new aV(0, 0);
        H = Y.aav();
        if (H == null) {
            var I = this.jY.indexOf(Y) + 1;
            if (S < 450 || h < 450)
                H = new aV(0, 0);
            else
                H = new aV(I * 150, I * 150)
        }
    }
    Y.j.style.left = H.x + "px";
    Y.j.style.top = this.j.offsetTop + H.y + "px";
    Y.hD(this.FJ - q.x * 2, this.cf - q.y * 2 - 34)
}
    ;
b2.prototype.rJ = function (Y, S) {
    this.it = Y;
    for (var G = 0; G < this.Cs.length; G++)
        this.Cs[G].rJ(Y, S)
}
    ;
b2.prototype.Bp = function (Y) {
    var S = this.jY.pop();
    this.j.removeChild(S.j);
    var h = this.jY.length - 1;
    if (h >= 0)
        P.zM(this.jY[h].j, "wdisabled");
    if (this.xL.parentNode == this.j)
        this.j.removeChild(this.xL)
}
    ;