const { getProcess } = require('./utils/docker');

(async function () {
    const processes = await getProcess();

    let list = "";
    processes.forEach((process) => {
        list += `ID: ${process.id} | NAME: ${process.name} | PORTS ${process.ports} | CREATED_AT ${process.createdAt}\n`
    })

    const response = `Total process: ${processes.length}\n${list}`;

    console.log(response);
})();

