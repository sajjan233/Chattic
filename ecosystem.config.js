module.exports = {
  apps: [
    {
      name: "Chattic",          // 👈 Custom name to start with
      script: "./server/index.js",    // 👈 Path to your backend entry file
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    }
  ]
}

