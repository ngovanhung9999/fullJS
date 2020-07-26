let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("tham so phai la kieu number"));
            }
            resolve(a + b);
        }, 0);
    });
};
//(a+b)+c
add(4, 5).
then(res => add(res, 6)).
then(res => { console.log(res) }).
catch(err => { console.log(err + "") })