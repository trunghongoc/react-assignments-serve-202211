web: node build/server.js
release: node build/ace migration:run --force && node build/ace db:seed && node ace migration:run --force && node ace db:seed
