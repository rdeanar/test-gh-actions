import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { version as packageVersion } from './package.json';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
        replace({
            preventAssignment: true,
            values: {
                '__SELECTORS_VERSION__': packageVersion,
            }
        }),
        typescript({
            module: 'ESNext',
            incremental: false,
            rootDir: 'src',
            declaration: false,
        }),
    ],
};
