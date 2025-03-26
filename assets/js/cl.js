let count = 2;

function increase() {
    count++;
    document.getElementById('counter').textContent = count;
}

function decrease() {
    count--;
    document.getElementById('counter').textContent = count;
}