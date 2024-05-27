import { build } from 'esbuild';
import path from 'path';
import buildRoutesPlugin from './esbuild-plugins/build-routes.js';
import buildTailwind from './esbuild-plugins/build-tailwind.js';
import { BUILD_DIR } from './commons/commons.js';

await build({
    entryPoints: ['js/**'],
    format: 'esm',
    bundle: true,
    minify: true,
    treeShaking: true,
    loader: { '.html': 'text' },
    drop: ['debugger', 'console'],
    dropLabels: ['DEV'],
    logLevel: 'info',
    plugins: [
        buildRoutesPlugin({
            src: `${path.join(BUILD_DIR, 'js', 'pages')}`,
            dest: `${path.join(BUILD_DIR, 'js')}`,
            file: 'routes.json'
        }),
        buildTailwind({
            input: path.resolve('./css/input.css'),
            output: path.resolve('./css/stylesheet.css')
        })
    ],
    outdir: `${path.join(BUILD_DIR, '/js')}`
});

await build({
    entryPoints: ['css/stylesheet.css'],
    bundle: true,
    minify: true,
    external: ['/*'],
    loader: {
        '.png': 'copy',
        '.jpg': 'copy',
        '.svg': 'dataurl'
    },
    outdir: `${path.join(BUILD_DIR, '/css')}`
});

await build({
    entryPoints: ['index.html', 'favicon/*', 'assets/*'],
    loader: {
        '.ico': 'copy',
        '.jpg': 'copy',
        '.jpeg': 'copy',
        '.png': 'copy',
        '.html': 'copy',
        '.svg': 'copy',
        '.webmanifest': 'copy',
        '.xml': 'copy',
        '.pdf': 'copy'
    },
    outdir: `${path.resolve(BUILD_DIR)}`
});
