let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("Tham so phai co kieu number"));
            }
            resolve(a + b);
        }, 0);
    })
};

let multiply = (res, h) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof res != "number" || typeof h != "number") {
                return reject(new Error("Tham so phai co kieu number"));
            }
            resolve(res * h);
        }, 0);
    })
};

let divide = (res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof res != "number") {
                return reject(new Error("Tham so phai co kieu number"));
            }
            resolve(res / 2);
        }, 0);
    })
};
//sua dung async await voi nhieu object promies 
let tinh = async(a, b, h, callback) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let res = await divide(abh);
        callback(undefined, res);
    } catch (error) {
        callback(error);
    }
};

tinh(4, 5, "6", (err, res) => {
    if (err) return console.log(err + '');
    console.log(res);
});