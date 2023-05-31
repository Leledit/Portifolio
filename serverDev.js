import express from 'express';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
    const app = express();
    app.use(express.static(__dirname + "/leads-view/src/assets"));
    app.use(cors())
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:3000',
          changeOrigin: true,
        })
      );

    app.get('/*',(req, res) => {
        res.sendFile(path.join(__dirname,'build','index.html'));
    });

    const PORT = process.env.PORT || 8082 ;app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}...`);
    });
}

startServer(); 