const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
    getProcess: async () => {
        try {
            const stdOut = await exec("docker ps --all --format '{{.ID}},{{.Names}},{{.Ports}},{{.CreatedAt}}'");
            if (stdOut.stdout) {
                const list = stdOut.stdout.replace(/'/g, "").split('\n');

                const parsedList = list.map(element => {
                    const processArr = element.split(',');
                    return {
                        id: processArr[0],
                        name: processArr[1],
                        ports: processArr[2],
                        createdAt: processArr[3]
                    }
                });

                return parsedList.filter(el => (el.id !== ""));
            }

            return [];

        } catch (err) {
            return [];
        }
    }
}