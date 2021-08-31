FROM node:12-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

RUN npm run build

FROM node:12-alpine

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/build ./build

RUN npm ci --only=prod && \
    adduser -D app

RUN chown app ./*
USER app

CMD ["npm", "start"]
