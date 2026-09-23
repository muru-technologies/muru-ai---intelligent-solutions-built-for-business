// PM2 Ecosystem Configuration for Linux Servers
module.exports = {
  apps: [
    {
      name: "muruit-platform",
      script: "dist/server.js",
      instances: "max", // Cluster mode across all available CPU cores
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
