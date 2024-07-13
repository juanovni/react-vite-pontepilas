FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat bash
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install --production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

#ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
#ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# COPY --from=builder --chown=nextjs:nodejs --chmod=755 /app/.next ./.next
# COPY --from=builder --chown=nextjs:nodejs --chmod=755 /app/node_modules ./node_modules
# COPY --from=builder --chown=nextjs:nodejs --chmod=755 /app/package.json ./package.json
# # COPY --chown=nextjs:nodejs --chmod=755 --from=builder  /app/ ./

# USER nextjs

#COPY --from=builder --chown=node:node --chmod=755 /app/.next ./.next
COPY --from=builder --chown=node:node --chmod=755 /app/node_modules ./node_modules
COPY --from=builder --chown=node:node --chmod=755 /app/package.json ./package.json

EXPOSE 4000

ENV PORT 4000

CMD ["npm", "start"]
