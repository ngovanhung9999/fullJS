const fs = require('fs');
const { resolve } = require('path');

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
//add(4, 5).then(res => { console.log(res) }, err => { console.log(err + "") });

let read = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};
read("./a.txt").then(res => { console.log(res) }, err => { console.log(err) });