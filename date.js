#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {
    hideBin
} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option(
        'par'
    ).argv

const date = new Date();
// console.log(argv)

if (argv._[0] == 'add') {
    if (argv.d > 0) {
        date.setDate(date.getDate() + argv.d);
        console.log(date.toISOString());
    } else if (argv.y > 0) {
        date.setFullYear(date.getFullYear() + argv.y);
        console.log(date.toISOString());
    } else if (argv.m > 0) {
        date.setMonth(date.getMonth() + argv.m);
        console.log(date.toISOString());
    }
} else if (argv._[0] == 'sub') {
    if (argv.d < 0) {
        date.setDate(date.getDate() + argv.d);
        console.log(date.toISOString());
    } else if (argv.y < 0) {
        date.setFullYear(date.getFullYear() + argv.y);
        console.log(date.toISOString());
    } else if (argv.m < 0) {
        date.setMonth(date.getMonth() + argv.m);
        console.log(date.toISOString());
    }
} else if (argv.m || argv.month) {
    console.log(date.toISOString().slice(5, 7));
    return
} else if (argv.year || argv.y) {
    console.log(date.toISOString().slice(0, 4));
    return
} else if (argv.date || argv.d) {
    console.log(date.toISOString().slice(8, 10));
    return
}