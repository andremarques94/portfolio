import { execSync } from 'child_process';

export default ({ input, output }) => {
    return {
        name: 'tailwind-builder',
        setup(build) {
            build.onStart(() => {
                execSync(`npx tailwindcss -i ${input} -o ${output}`.toString());
            });
        }
    };
};
