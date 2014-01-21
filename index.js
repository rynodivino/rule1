var calc = require('./lib/calculator');
    burglar = require('./lib/numburglar'),
    argv = require('optimist').argv,
    type = argv.type ? argv.type : "vet",
    years = argv.years || 1;

if (type === 'growth') {
    console.log('Growth baby');
    console.log(calc.growth(argv.prev, argv.current, years));
}
