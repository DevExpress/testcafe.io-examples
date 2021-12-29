const { promisify }        = require('util');
const { exec }             = require('child_process');
const { resolve, dirname } = require('path');
const { platform }         = require('os');

const promisifiedExec = promisify(exec);

const programmaticInterfaceExecutables = [
    '../interfaces/programmatic/create-testcafe/regular/index.js',
    '../interfaces/programmatic/create-testcafe/ssl/index.js',
];

const symbols = platform() === 'win32' ?
    { ok: '√', err: '×' } :
    { ok: '✓', err: '✖' };

function reportExecutionResult (executable, executionResult) {
    const { failed } = executionResult;

    let text = '';

    if (failed)
        text = `${symbols.err} ${executable}`;
    else
        text = `${symbols.ok} ${executable}`;

    console.log(text);
}

let exitCode = 0;

(async () => {
    for (let programmaticInterfaceExecutable of programmaticInterfaceExecutables) {
        const resolvedExecutablePath = resolve(__dirname,programmaticInterfaceExecutable);
        const command                = `node ${resolvedExecutablePath}`;
        const executableCwd          = dirname(resolvedExecutablePath);
        const result                 = await promisifiedExec(command, { cwd: executableCwd });
        const parsedResult           = JSON.parse(result.stdout.match(/(?<=Task done: ){.*}/));

        reportExecutionResult(programmaticInterfaceExecutable, parsedResult);

        if (parsedResult.failed)
            exitCode++;
    }

    process.exitCode = exitCode;
})();
