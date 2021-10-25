const prompt = require('prompt-sync')();
const inss = require('./inss.js');
const irrf = require('./irrf.js');
const dependents = require('./dependents.js');
const chalk = require('chalk');

const grossSalary = prompt('What is your gross salary?: ');
const greenGrossSalary = chalk.green.bold("R$" + grossSalary);

const dependentsNumber = prompt('How many dependents do you have?: ');
const redDependentsNumber = chalk.red.bold(dependentsNumber);

const inssDeductedSalary = inss(grossSalary);
const blueInssDeductedSalary = chalk.blue.bold('R$' + inssDeductedSalary.toFixed(2));
const greenInssDeductedSalary = chalk.green.bold('R$' + inssDeductedSalary.toFixed(2));

const inssString = chalk.red.bold('INSS');

console.log(`${greenGrossSalary} - ${inssString} = ${blueInssDeductedSalary}`);

const dependentsDeductedSalary = dependents(inssDeductedSalary, dependentsNumber);
const blueDependentsDeductedSalary = chalk.blue.bold("R$" + dependentsDeductedSalary.toFixed(2));
const greenDependentsDeductedSalary = chalk.green.bold("R$" + dependentsDeductedSalary.toFixed(2));

const dependentsString = chalk.red.bold(dependentsNumber + ' dependents')

console.log(`${greenInssDeductedSalary} - ${dependentsString} = ${blueDependentsDeductedSalary}`);

const netSalary = irrf(dependentsDeductedSalary);
const blueNetSalary = chalk.blue.bold("R$" + netSalary.toFixed(2));

const irrfString = chalk.red.bold("IRRF");

console.log(`${greenDependentsDeductedSalary} - ${irrfString} = ${blueNetSalary}`);