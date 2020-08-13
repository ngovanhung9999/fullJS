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
//async await su dung voi object promise
//await luon luong nam trong function co async
let tinh = async(a, b) => {
    let res = await add(a, b);
    console.log(res);
};
tinh(3, 4);