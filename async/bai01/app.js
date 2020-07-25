let add = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            return callback(new Error("Tham so phai co kieu number"));
        }
        callback(undefined, a + b);
    }, 0);
};

let multiply = (res, h, callback) => {
    setTimeout(() => {
        if (typeof res != "number" || typeof h != "number") {
            return callback(new Error("Tham so phai co kieu number"));
        }
        callback(undefined, res * h);
    }, 0);
};

let divide = (res, callback) => {
    setTimeout(() => {
        if (typeof res != "number") {
            return callback(new Error("Tham so phai co kieu number"));
        }
        callback(undefined, res / 2);
    }, 0);
};

let tinhDienTich = (a, b, h, callback) => {
    add(a, b, (err, res) => {
        if (err) return callback(err);
        multiply(res, h, (err, res) => {
            if (err) return callback(err);
            divide(res, (err, res) => {
                if (err) return callback(err);
                callback(undefined, res);
            });
        });
    });
};

tinhDienTich(2, 3, 2, (err, res) => {
    if (err) return console.log(err.toString());
    console.log(res);
})