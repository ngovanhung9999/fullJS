let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("khong the ket noi");
    }, 0);
});

pr
    .then(res => { console.log(res) }, (err) => { console.log(err) });