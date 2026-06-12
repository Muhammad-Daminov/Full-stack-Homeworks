function startIncrementTimer() {
    let num = 0;
    const timer = setInterval(() => {
        num += 2;
        console.log(num);
        if (num >= 20) {
            clearInterval(timer);
        }
    }, 1000);
}

startIncrementTimer();