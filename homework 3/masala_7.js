const generatePromoCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let promo = '';

    for (let i = 0; i < 8; i++) {
        const randomINdex = Math.floor(Math.random() * chars.length);
        promo += chars[randomINdex];
    }
    return promo;
}

console.log(generatePromoCode());