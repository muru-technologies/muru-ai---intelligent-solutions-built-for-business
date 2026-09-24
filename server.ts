import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // Middleware
  app.use(express.json());

  const isProduction = process.env.NODE_ENV === 'production' || Boolean(process.argv[1]?.includes('dist'));

  // Health check endpoint for Linux reverse proxies (Nginx, Caddy, ALB, Docker, Kubernetes)
  app.get('/api/health', (_req, res) => {
    res.status(200).json({
      status: 'healthy',
      service: 'muru-it-platform',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: isProduction ? 'production' : 'development'
    });
  });

  // Vite middleware for development vs static asset serving for production
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve pre-built static assets from dist/
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, {
      maxAge: '1d',
      setHeaders: (res, filePath) => {
        // Cache immutable hashed assets for 1 year
        if (filePath.includes('/assets/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      }
    }));

    // SPA fallback - serve index.html for any unhandled routes
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Production Linux-ready server active on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[Server Error] Failed to start server:', err);
  process.exit(1);
});
