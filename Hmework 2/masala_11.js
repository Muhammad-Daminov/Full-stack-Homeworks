const fibonacci = (n) => {
    let sequence = [0, 1];

    while (true) {
        let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > n) break;
        sequence.push(next);
    }

    return sequence;
};

console.log(fibonacci(20));