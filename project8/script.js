let fig;
let cfig;
let p1;
let p2;
let p3;
window.onload = function () {
    document.getElementById("point").addEventListener("click", e => {
        act(e);
        fig = "point";
    });
    document.getElementById("line").addEventListener("click", e => {
        act(e);
        fig = "line";
    });
    document.getElementById("circle").addEventListener("click", e => {
        act(e);
        fig = "circle";
    });
    document.getElementById("oval").addEventListener("click", e => {
        act(e);
        fig = "oval";
    });
    document.getElementById("rectangle").addEventListener("click", e => {
        act(e);
        fig = "rectangle";
    });
    const cnv = document.getElementById("cnvs");
    cnv.width = cnv.offsetWidth;
    cnv.height = cnv.offsetHeight;
    const ctx = cnv.getContext('2d');
    cnv.addEventListener('click', function (e) {
        drawF(e, ctx);
    });
    document.getElementById('clear').addEventListener('click', () => {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
    });
}

function act(e, ctx) {
    if (cfig == null) {
        cfig = e.target;
    } else {
        cfig.classList.remove("active");
        cfig = e.target;
    }
    cfig.classList.add("active");
    point.count = 0;
}

class point {
    static count = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    dist(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

}

class line {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
    }
}

class oval extends point {
    constructor(p1, p2, p3) {
        super(p1.x, p1.y);
        this.a = this.dist(p2);
        this.b = this.dist(p3);
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "lightyellow";
        ctx.strokeStyle = "black";
        ctx.ellipse(this.x, this.y, this.a, this.b, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
}

class rectangle extends point {
    constructor(p1, p2, p3) {
        super(p1.x, p1.y);
        this.a = p2.x - p1.x;
        this.b = p3.y - p1.y;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "lightcyan";
        ctx.strokeStyle = "black";
        ctx.fillRect(p1.x, p1.y, this.a, this.b);
        ctx.stroke();
        ctx.fill();
    }
}

class circle extends point {
    constructor(p1, p2) {
        super(p1.x, p1.y);
        this.radius = p1.dist(p2);
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "lightgreen";
        ctx.strokeStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
    }
}

function drawF(e, ctx) {
    switch (fig) {
        case "point":
            p1 = new point(e.offsetX, e.offsetY);
            p1.draw(ctx);
            break;
        case "line":
            if (point.count == 0) {
                p1 = new point(e.offsetX, e.offsetY);
                p1.draw(ctx);
                point.count++;
            } else {
                p2 = new point(e.offsetX, e.offsetY);
                p2.draw(ctx);
                let l = new line(p1, p2);
                l.draw(ctx);
                point.count = 0;
            }
            break;
        case "rectangle":
            if (point.count == 0) {
                p1 = new point(e.offsetX, e.offsetY);
                p1.draw(ctx);
                point.count++;
            } else if (point.count == 1) {
                p2 = new point(e.offsetX, e.offsetY);
                p2.draw(ctx);
                point.count++;
            } else {
                p3 = new point(e.offsetX, e.offsetY);
                p3.draw(ctx);
                let rect = new rectangle(p1, p2, p3);
                rect.draw(ctx);
                point.count = 0;
            }
            break;
        case "oval":
            if (point.count == 0) {
                p1 = new point(e.offsetX, e.offsetY);
                p1.draw(ctx);
                point.count++;
            } else if (point.count == 1) {
                p2 = new point(e.offsetX, e.offsetY);
                p2.draw(ctx);
                point.count++;
            } else {
                p3 = new point(e.offsetX, e.offsetY);
                p3.draw(ctx);
                let ell = new oval(p1, p2, p3);
                ell.draw(ctx);
                point.count = 0;
            }
            break;
        case "circle":
            if (point.count == 0) {
                p1 = new point(e.offsetX, e.offsetY);
                p1.draw(ctx);
                point.count++;
            } else {
                p2 = new point(e.offsetX, e.offsetY);
                p2.draw(ctx);
                let cir = new circle(p1, p2);
                cir.draw(ctx);
                point.count = 0;
            }
            break;
        default:
            break;
    }
}