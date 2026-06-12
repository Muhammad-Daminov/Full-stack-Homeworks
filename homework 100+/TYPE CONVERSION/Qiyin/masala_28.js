let h = {} + [];

//  Natija vaziyatga qarab  0 yoki [object Object];
// Sababi Sababi (Brauzer konsolida): Agar bu kodni konsolga to'g'ridan-to'g'ri yozsangiz, 
// JavaScript boshidagi {} ni obyekt emas, balki bo'sh kod bloki (scope) deb o'ylaydi va uni e'tiborsiz qoldiradi.
//  Qolgan qismi + [] ko'rinishida qoladi. Bu yerda + amali massivni songa aylantiradi (+"" $\implies$ 0)