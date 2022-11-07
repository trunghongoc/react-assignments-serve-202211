web: node build/server.js
worker: sh -c 'cp tmp build/tmp'
release: node build/ace migration:run --force
