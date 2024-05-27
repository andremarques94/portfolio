import { context } from 'esbuild';
import { rmSync } from 'fs';
import process from 'node:process';
import path from 'path';
import { DEV_DIR, BUILD_DIR } from './commons/commons.js';
import buildRoutesPlugin from './esbuild-plugins/build-routes.js';
import buildTailwind from './esbuild-plugins/build-tailwind.js';

const publicDir = path.join(DEV_DIR, BUILD_DIR);

const buildJs = await context({
    entryPoints: ['js/**'],
    format: 'esm',
    bundle: true,
    logLevel: 'info',
    plugins: [
        buildRoutesPlugin({
            src: `${path.join(publicDir, 'js', 'pages')}`,
            dest: `${path.join(publicDir, 'js')}`,
            file: 'routes.json'
        }),
        buildTailwind({
            input: path.resolve('./css/input.css'),
            output: path.resolve('./css/stylesheet.css')
        })
    ],
    outdir: `${path.join(publicDir, 'js')}`
});

const buildCss = await context({
    entryPoints: ['css/stylesheet.css'],
    bundle: true,
    loader: {
        '.png': 'copy',
        '.jpg': 'copy',
        '.svg': 'dataurl'
    },
    outdir: `${path.join(publicDir, 'css')}`
});

const staticAssetsBuild = await context({
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
    outdir: `${publicDir}`
});

//Setting up for cleanup when process is interrupted
process.on('SIGINT', () => {
    console.log(`\nDeleting ${path.resolve(DEV_DIR)} directory and exiting...`);
    rmSync(path.resolve(DEV_DIR), { recursive: true });
    process.exit(0);
});

await buildJs.watch();
await staticAssetsBuild.watch();
await buildCss.watch();

await buildJs.serve({
    servedir: `${publicDir}`,
    fallback: `${publicDir}/index.html`
});
