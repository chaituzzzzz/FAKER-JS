var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
faker.locale = "en";

//console.log(faker.lorem.sentences())


//console.log(faker.address)
for(var i=0;i<5;i++)
{
console.log(faker.departments.engineering());
console.log(faker.departments.semester());
console.log(faker.departments.division());
console.log(faker.departments.head());
console.log("\n");
}
return ;