const x = {};
console.log(x);
x.value = 3;
console.log(x);
x.changeValue = function () {
    this.value = 8;
};
console.log(x);
x.changeValue();
console.log(x);

x.changeValue = function () {
    x.value = 45;
};
x.changeValue();
console.log(x);

const y = {};
y.value = 23;
y.changeValue = function () {
    this.value = 2;
};
y.changeValue();
console.log(y);

const valueChanger = function () {
    x.value = 1;
};
valueChanger();
console.log(x);

const valueChangerer = () => {
    x.value = 5;
};
valueChangerer();
console.log(x);

x.showValue = function () {
    return this.value;
};
console.log(x.showValue());

x.showValuee = () => {
    return x.value;
};
console.log(x.showValuee());

x.showValuee = () => x.value;
console.log(x.showValuee());