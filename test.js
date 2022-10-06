similarc = require('similarcommand')

command = process.argv[2]
commands = ['test1', 'test2', 'test3', 'tookie']

if(commands.length > 0) {
    console.log('\'' + command + '\'' + ' not found. Did you mean:')
    for (var i = 0; i < similarc(command, commands).length; i+=2) { // there is a bug here, so you have to run += 2 to get the correct output
    console.log('  ' + similarc(command, commands)[i])
    } 
}
else {
    console.log('\'' + command + '\'' + ' not found. No similar commands found.')
}