const readline = require('readline');
const os = require('os');
const fs = require('fs');

const TEST = false;
const DEBUGFILE = "/tmp/debugjam";

// Only usable on local machine
const writeDebug = str => {
    if (!TEST) {
        return;
    }
    fs.appendFileSync(DEBUGFILE, str + os.EOL);
};

const writeSync = async (str) => {
    if (!str.endsWith(os.EOL)) { str += os.EOL; }
    return new Promise((res) => {
        process.stdout.write(str, res);
    });
};

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

const readNumber = async () => {
    const line = await getLine();
    return Number(line);
};
const readArray = async () => {
    const line = await getLine();
    return line.split(' ');
};
const readNumberArray = async () => {
    return (await readArray()).map(Number);
};

const solve = async (length) => {
    // TODO: solve here, using the helper i/o functions above
};

const main = async () => {
    const [ testCaseCount ] = await readNumberArray();
    for (let i = 1; i <= testCaseCount; i++) {
        await solve();
    }
};

main().then(() => {
    process.exit(0);
});
