const startRandomTimer = function() {
    let count = 0;
    const timer = setInterval(() => {
        console.log(Math.floor(Math.random() * 100));
        count++;
        if (count >= 10) {
            clearInterval(timer);
        }
    }, 1000);
};

startRandomTimer();