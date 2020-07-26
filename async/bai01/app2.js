//   a*b/(c+d)

let add = (c, d, callback) => {
    setTimeout(() => {
        if (typeof c != "number" || typeof d != "number") {
            return callback(new Error("tham so phai la number"));
        }
        callback(undefined, c + d)
    }, 0);
};

let multiply = (resAdd, a, b, callback) => {
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            return callback(new Error("tham so phai la number"));
        }
        callback(undefined, {
            resAdd: resAdd,
            resMultiply: a * b
        });
    }, 0);
};

let divide = (res, callback) => {
    setTimeout(() => {
        if (res == undefined) {
            return callback(new Error("loi"));
        }
        callback(undefined, res['resMultiply'] / res['resAdd']);
    }, 0);
};

let tinh = (a, b, c, d, callback) => {
    add(c, d, (err, res) => {
        if (err) return callback(err);
        multiply(res, a, b, (err, res) => {
            if (err) return callback(err);
            divide(res, (err, res) => {
                if (err) return callback(err);
                callback(undefined, res);
            })
        });
    });
};

tinh(5, 5, 2, "0", (err, res) => {
    if (err) return console.log(err + "");
    console.log(res);
});