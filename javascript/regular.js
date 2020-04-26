const readline = require('readline');

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

const solve = async () => {
    // TODO: write solution here, using helper input functions above
};

const main = async () => {
    const testCaseCount = await readNumber();
    for (let i = 1; i <= testCaseCount; i++) {
        const answer = await solve();
        console.log(`Case #${i}: ${answer}`);
    }
};

main().then(() => {
    rl.close();
});
