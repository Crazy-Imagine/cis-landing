FROM node:18.20.2

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

ENV NODE_ENV=production
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
