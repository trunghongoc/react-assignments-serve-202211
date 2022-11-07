web: node build/server.js
worker: sh -c 'cp dbs build/dbs'
release: node build/ace migration:run --force
