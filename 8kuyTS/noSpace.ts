// Simple, remove the spaces from the string, then return the resultant string.

// Просто удалите пробелы из строки, затем верните результирующую строку.

export const noSpace = (x: string): string => x.replace(/\s/g, '');

export const noSpace = (x: string) => x.split(" ").join("");