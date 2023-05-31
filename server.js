import express from 'express';
import {fileURLToPath} from 'url';
import path,{dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
    const app = express();
    app.use(express.static(path.join(__dirname,'/build')));

    app.get('/*',(req, res) => {
      res.sendFile(path.join(__dirname,'build','index.html'));
  });
  
  const PORT = process.env.PORT || 8081 ;app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
  });
}

startServer(); 