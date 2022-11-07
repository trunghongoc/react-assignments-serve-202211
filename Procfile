web: node build/server.js
release: (cd build && yarn install --production) && node build/ace migration:run --force && node build/ace db:seed
