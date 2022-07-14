// Plural
// We need a simple function that determines if a plural is needed or not.It should take a number, and return true if a plural should be used with that number or false if not.This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// Нам нужна простая функция, которая определяет, нужно ли множественное число или нет.Он должен принимать число и возвращать true, если с этим числом следует использовать множественное число, или false, если нет.Это было бы полезно при печати строки, такой как 5 minutes, 14 apples или 1 sun.

// Вам нужно только побеспокоиться о правилах английской грамматики для этой ката, где все, что не в единственном числе(одно из чего - то), является множественным числом(не одно из чего - то).

// Все значения будут положительными целыми числами, числами с плавающей запятой или нулем.

const plural = n => n != 1;