import { Plugin } from 'vite';

export function delayHMR(ms: number): Plugin {
    return {
        name: 'plugin-delay-hmr',
        async handleHotUpdate(ctx) {
            await new Promise((resolve) => setTimeout(resolve, ms));

            return ctx.modules;
        }
    }
}