// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react({
      include: "**/*.tsx"
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  },
  ...process.env.NODE_ENV === "production" && {
    esbuild: {
      drop: ["console", "debugger"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG4vKipcbiAqIFZpdGUgY29uZmlndXJhdGlvblxuICogQGF1dGhvciBTdGV2ZW4gUm9zYWxlc1xuICogQHZlcnNpb24gMS4wIDE3LzAzLzIwMjUgSGlkZSBjb25zb2xlIGFuZCBkZWJ1Z2dlciBpbiBwcm9kdWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBpbmNsdWRlOiAnKiovKi50c3gnXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6ICcvc3JjJ1xuICAgIH1cbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAzMFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogODA4MFxuICB9LFxuICAuLi4ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB7XG4gICAgZXNidWlsZDoge1xuICAgICAgZHJvcDogWydjb25zb2xlJywgJ2RlYnVnZ2VyJ11cbiAgICB9XG4gIH0pXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBUWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsR0FBSSxRQUFRLElBQUksYUFBYSxnQkFBZ0I7QUFBQSxJQUMzQyxTQUFTO0FBQUEsTUFDUCxNQUFNLENBQUMsV0FBVyxVQUFVO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
