export default function factory($, env) {
    return function task(done) {
        return $.delete([env.paths.output.server.scripts.src], done);
    };
}
