const startFifteenSecTimer = () => {
    let timeLeft = 15;
    const timer = setInterval(() => {
        console.log(timeLeft + " soniya qoldi");
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
        }
    }, 1000);
};

startFifteenSecTimer();