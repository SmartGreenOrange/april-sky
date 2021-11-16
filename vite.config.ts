import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default () => {
    return defineConfig({
        plugins: [
            vue()
        ],
        base: "/didi/",
        server: {
            host: true,
            port: 4001,
            // proxy: {
            //     '/api': {
            //         target: 'http://42.192.190.187:6060',
            //         changeOrigin: true,
            //         rewrite: ''
            //     }
            // }
        },
    });
};
