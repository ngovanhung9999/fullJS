const Emitter = require('events');
const events = require('./eventconfig').events;
const emitter = new Emitter();
emitter.on(events.BAD, () => {
    console.log("bi diem kem 1");
});

emitter.on(events.BAD, () => {
    console.log("bi diem kem 2");
});

const arr = [10, 4, 6];

arr.forEach(value => {
    if (value < 5) {
        emitter.emit(events.BAD);
    }
});