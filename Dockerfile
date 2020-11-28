FROM node:12.0.0 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

RUN yarn build

FROM node:alpine AS production

WORKDIR /app

COPY --from=builder /app/build ./build

RUN npm install -g serve 

ENV PORT=8080

EXPOSE 8080

ENTRYPOINT ["serve", "-s", "build"]