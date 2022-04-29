const { getBalance, getPosition, getTransactions, isContract } = require("./scripts/chainReader");
//const { } = require("./scripts/priceFeeds.js");


function main(argv) {
    console.log("Hello world");
    const myArgs = process.argv.slice(2);
    if (myArgs.length > 0) {
      console.log(myArgs);
    }
  }
  
  if (require.main === module) {
    main();
  }