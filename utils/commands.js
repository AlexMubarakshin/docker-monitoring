const Table = require('cli-table2');

const table = new Table({
    head: ["ID", "NAME", "PORTS", "CREATED_AT"], 
    colWidths: [50, 50, 25, 35]
});

const { getProcess } = require('./docker');

module.exports = {
    getProcess: async () => {

        const processes = await getProcess();
        
        processes.forEach(element => {
            table.push([element.id, element.name, element.ports, element.createdAt]);
            
        });
        
        
        return table.toString();
    }
}


