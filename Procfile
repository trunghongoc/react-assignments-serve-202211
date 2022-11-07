web: node build/server.js
worker: sh -c 'cp tmp build/tmp && cp public build/public'
release: node build/ace migration:run --force
