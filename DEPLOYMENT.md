# Linux Server Deployment Guide

This application is fully production-ready and can be deployed to any Linux distribution (Ubuntu, Debian, CentOS, RHEL, AlmaLinux, Rocky Linux, Alpine, Amazon Linux) using any of the methods below.

---

## Method 1: Docker & Docker Compose (Recommended)

The fastest, cleanest way to run on Linux. Requires Docker and Docker Compose.

### 1. Install Docker (if not installed)
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

### 2. Run with Docker Compose
```bash
docker compose up -d --build
```

### 3. Check status & logs
```bash
docker compose ps
docker compose logs -f
```

The app will be running on `http://YOUR_SERVER_IP:3000`.

---

## Method 2: Node.js + PM2 (Process Manager)

Ideal for standard VPS (Ubuntu/Debian) with Node.js.

### 1. Install Node.js (v20+) & PM2
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

### 2. Build the Application
```bash
# If your server has NODE_ENV=production set in its environment, use --include=dev:
npm install --include=dev
npm run build
```

### 3. Start with PM2
```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

---

## Method 3: Native Linux Systemd Service

For native daemon management without external process managers:

```bash
# 1. Build the app (ensure devDependencies are included for the build phase)
npm install --include=dev
npm run build

# 2. Copy service configuration to systemd
sudo cp muruit.service /etc/systemd/system/

# 3. Reload systemd, enable and start service
sudo systemctl daemon-reload
sudo systemctl enable muruit
sudo systemctl start muruit
sudo systemctl status muruit
```

---

## Method 4: Nginx Reverse Proxy & SSL (Domain Setup)

To route your public domain (e.g. `example.com`) to port 3000 with free SSL:

### 1. Install Nginx & Certbot
```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

### 2. Configure Nginx
```bash
sudo cp nginx.conf /etc/nginx/sites-available/muruit
# Edit /etc/nginx/sites-available/muruit with your domain name:
sudo nano /etc/nginx/sites-available/muruit
sudo ln -s /etc/nginx/sites-available/muruit /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. Enable Free SSL with Let's Encrypt
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Health Check Endpoint

You can verify the running application at any time:
```bash
curl http://localhost:3000/api/health
```
Expected response:
```json
{
  "status": "healthy",
  "service": "muru-it-platform",
  "uptime": 12.3,
  "timestamp": "2026-09-21T09:30:00.000Z",
  "environment": "production"
}
```

---

## Troubleshooting NPM Deployment Errors

1. **If you encounter `npm error ERESOLVE`:**
   Ensure you pull the latest repo containing `package-lock.json` and `esbuild: ^0.28.0`. You can also run:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **If you encounter `esbuild: not found` during `npm run build`:**
   This happens if your server has `NODE_ENV=production` set before building. Run:
   ```bash
   npm install --include=dev
   npm run build
   ```

3. **If using Docker:**
   ```bash
   docker compose down
   docker compose build --no-cache
   docker compose up -d
   ```
