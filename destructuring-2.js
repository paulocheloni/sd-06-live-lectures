const assert = require('assert');

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur'],
  bankInfo: {
    agNumber: "0001",
    accountNumber: "12345-6",
    bankName: "Corn Investments"
  }
};

let { name, birthplace, jobs, bankInfo } = richestDuckInTheWorld;

assert.strictEqual(
  `${name} from ${birthplace}`,
  'Scrooge McDuck from Glasgow, Scotland'
);

name = "Gabriel";

console.log(richestDuckInTheWorld);

const [firstJob, secondJob, thirdJob, ...rest] = jobs;

assert.strictEqual(
  `Started working as ${firstJob}, ${secondJob} and ${thirdJob}`,
  "Started working as Shoe shiner, Sailor and Cowboy"
)

const { agNumber, accountNumber, bankName } = bankInfo;

assert.strictEqual(
  `${bankName}, agency number ${agNumber}, account number ${accountNumber}`,
  "Corn Investments, agency number 0001, account number 12345-6"
)