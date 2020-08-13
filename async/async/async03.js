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
//sua dung async await voi nhieu object promise va tra ve promise
let tinh = async(a, b, h) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let res = await divide(abh);
        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(error);
    }
};

tinh(4, 5, 6).
then(res => { console.log(res) }).
catch(err => { console.log(err) })