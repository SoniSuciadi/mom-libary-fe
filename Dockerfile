FROM node:22-alpine
WORKDIR /app

ENV NODE_ENV production

COPY ./.next/standalone ./
COPY ./.next/static ./.next/static
COPY ./public ./public

ENV PORT=4041
EXPOSE 4041

CMD ["node", "server.js"]