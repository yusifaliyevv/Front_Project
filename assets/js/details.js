let count = 1;
function increment() {
    count++;
    document.getElementById("counter").innerText = count;
}
function decrement() {
    if (count > 0) {
        count--;
        document.getElementById("counter").innerText = count;
    }
}