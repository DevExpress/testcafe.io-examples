const { promisify }        = require('util');
const { exec }             = require('child_process');
const { resolve, dirname } = require('path');
const { platform }         = require('os');

const promisifiedExec = promisify(exec);

const programmaticInterfaceExecutables = [
    '../interfaces/programmatic/create-testcafe/regular.js',
];

const symbols = platform() === 'win32' ?
    { ok: '√', err: '×' } :
    { ok: '✓', err: '✖' };

function reportExecutionResult (executable, executionResult) {
    const { error } = executionResult;

    let text = '';

    if (error)
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

        reportExecutionResult(programmaticInterfaceExecutable, result);

        if (result.error)
            exitCode++;
    }

    process.exitCode = exitCode;
})();
