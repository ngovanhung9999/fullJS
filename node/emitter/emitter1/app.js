const Emitter = require("./emitter");

const emitter = new Emitter();

emitter.on('bar', () => {
    console.log("da co mon bi dem kem");
});

emitter.on('bar', () => {
    console.log("gui thong tin cho phu huynh");
});

let arr = [9, 4, 5];

arr.forEach(value => {
    if (value < 5) {
        emitter.emit('bar');
    }
});