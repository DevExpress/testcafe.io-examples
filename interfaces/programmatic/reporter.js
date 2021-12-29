module.exports = function () {
    return {
        async reportTaskStart (/* startTime, userAgents, testCount */) {

        },

        async reportFixtureStart (/* name, path, meta */) {

        },

        async reportTestStart (/* name, meta */) {
            // NOTE: This method is optional.
        },

        async reportTestDone (/* name, testRunInfo, meta */) {

        },

        async reportTaskDone (endTime, passed, warnings, result) {
            const time        = this.moment(endTime).format('M/D/YYYY h:mm:ss a');
            const durationMs  = endTime - this.startTime;
            const durationStr = this.moment.duration(durationMs).format('h[h] mm[m] ss[s]');
            const summary = JSON.stringify({
                time,
                duration: durationStr,
                passed:   result.passedCount,
                failed:   result.failedCount,
                skipped:  result.skippedCount,
                warnings: warnings.length,
            });

            this.write(`Task done: ${summary}`);
        },
    };
};
