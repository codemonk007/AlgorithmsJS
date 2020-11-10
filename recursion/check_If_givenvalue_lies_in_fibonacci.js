// check if the value is with in fibonacci
let test = [];
let item = 5;
function testFibonacci(n) {
    if (n == 1) {
        return [0, 1]
    }
    else {
        var s = testFibonacci(n - 1);
        if (s[s.length - 1] > item) {
            return s;
        }
        s.push(s[s.length - 1] + s[s.length - 2])
        return s;
    }
}

console.log(testFibonacci(8));
