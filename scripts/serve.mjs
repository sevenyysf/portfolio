import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('site');
const port = 4173;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };

const server = createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end('Invalid URL');
    return;
  }
  const relative = pathname.replace(/^\/portfolio(?=\/|$)/, '');
  const path = resolve(root, `.${relative.endsWith('/') ? `${relative}index.html` : relative}`);
  if (!path.startsWith(root + sep)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  try {
    const body = await readFile(path);
    response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' });
    response.end(body);
  } catch (error) {
    const missing = error.code === 'ENOENT' || error.code === 'EISDIR';
    if (!missing) console.error(error);
    response.writeHead(missing ? 404 : 500).end(missing ? 'Not found' : 'Server error');
  }
});
server.on('error', (error) => { console.error(error); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Portfolio: http://127.0.0.1:${port}/ — repository-path preview: http://127.0.0.1:${port}/portfolio/`));
