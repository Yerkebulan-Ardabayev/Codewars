// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.

// Примечание: ввод никогда не будет пустой строкой

export const fakeBin = (x: string): string => x.split('').map((item) => (Number(item) < 5 ? '0' : '1')).join('');
