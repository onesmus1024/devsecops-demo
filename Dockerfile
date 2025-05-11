# Stage 1: Install development dependencies
FROM node:20-alpine AS development-dependencies-env
WORKDIR /app
COPY . /app
RUN npm ci --force

# Stage 2: Install production dependencies only
FROM node:20-alpine AS production-dependencies-env
WORKDIR /app
COPY ./package.json package-lock.json /app/
RUN npm ci --omit=dev --force

# Stage 3: Build the app
FROM node:20-alpine AS build-env
WORKDIR /app
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
RUN npm run build

# Stage 4: Final image with production setup
FROM node:20-alpine

# Add non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set workdir and copy production files
WORKDIR /app
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build

# Switch to non-root user
USER appuser

# Add a healthcheck (adjust path/port to fit your app)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start the app
CMD ["npm", "run", "start"]
