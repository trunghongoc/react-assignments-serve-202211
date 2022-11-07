web: node build/server.js
release: rm build/db.sqlite3 && node build/ace migration:run --force && node build/ace db:seed && node build/ace migration:refresh --seed
