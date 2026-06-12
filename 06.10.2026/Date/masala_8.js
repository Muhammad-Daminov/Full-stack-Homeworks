function getCurrentTimeFormatted() {
    const now = new Date();
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

console.log(getCurrentTimeFormatted());