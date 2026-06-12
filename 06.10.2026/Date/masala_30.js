function printArrayElements(arr) {
    let index = 0;
    const timer = setInterval(() => {
        if (index < arr.length) {
            console.log(arr[index]);
            index++;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

printArrayElements(["Ali", "Vali", "Sami"]);