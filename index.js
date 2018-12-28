const Table = require('cli-table');

const table = new Table({
    head: ["ID", "NAME", "PORTS", "CREATED_AT"], 
    colWidths: [50, 50, 25, 35]
});

const { getProcess } = require('./utils/docker');

(async function () {
    const processes = await getProcess();

    let list = "";
    // processes.forEach((process) => {
    //     list += `ID: ${process.id} | NAME: ${process.name} | PORTS ${process.ports} | CREATED_AT ${process.createdAt}\n`
    // })

    // const response = `Total process: ${processes.length}\n${list}`;

    processes.forEach(element => {
        table.push([element.id, element.name, element.ports, element.createdAt]);
        
    });


    console.log(table.toString());
})();

