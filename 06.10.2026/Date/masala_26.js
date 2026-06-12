const startCountdown = () => {
    let count = 10;
    const timer = setInterval(() => {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            console.log("Tugadi");
            clearInterval(timer);
        }
    }, 1000);
};

startCountdown();