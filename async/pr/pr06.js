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

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("Tham so phai co kieu number"));
            }
            resolve(a * b);
        }, 0);
    })
};
//muon thuc hien nhieu thao tac cung 1 luc ma cac promise khong can du lieu cua nhau
//Promis.all neu 1 trong cai nao gap loi loi thi xuat ra loi
Promise.all([add(4, 5), multiply('4', 5)]).
then(res => console.log(res)).
catch(err => console.log(err + ""));
//
//Promise.race neu thuc hien lien tiep neu cai nao gap loi thi dung va tra ve ket qua
Promise.race([add(4, 5), multiply("4", 5)]).
then(res => console.log(res)).
catch(err => console.log(err + ""));