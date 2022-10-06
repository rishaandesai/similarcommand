function similar(command, commands) {
  var similarCommand = []
  commands.forEach(function (c) {
    if (c.indexOf(command) === 0) {
      similarCommand.push(c)
    }
    if (command.split('').every(function (l) {
      return c.indexOf(l) !== -1
    })) {
      similarCommand.push(c)
    }
  })
  return similarCommand.filter(function (c, i) {
    return similarCommand.indexOf(c) === i
  })
}

module.exports = similar