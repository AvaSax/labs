window.onload = function getTime() {
    let watches = document.getElementById('watches');
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    watches.innerHTML = `<h1>${hours.toString().padStart(2,'0')}:
    ${minutes.toString()}:
    ${seconds.toString().padStart(2,'0')}<h1>`;
    this.setTimeout(getTime, 1000);

}