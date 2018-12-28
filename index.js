const commands = require('./utils/commands');

(async () => {
    console.log(await commands.getProcess());
})()

