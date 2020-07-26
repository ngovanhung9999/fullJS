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


let tinh = (a, b, h) => {
    return add(a, b).
    then(res => multiply(res, h)).
    then(res => divide(res));
};
tinh(6, 4, "5").
then(res => { console.log(res) }).
catch(err => { console.log(err + "") });