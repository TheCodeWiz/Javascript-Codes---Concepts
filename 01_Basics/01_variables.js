const accountId = 144553
let accountEmail = "manav@gmail.com"
var accountPassword = "123"
accountCity = "jaipur"

// accountId = 2//this is not allowed
accountEmail = "mv@mv.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// console.log(accountId); //this will print only particular value and not multiple values at once
console.table([accountId, accountEmail, accountPassword, accountCity])//this will help in printing all the values at once making it the usage of DRY principle that to in tabular form

