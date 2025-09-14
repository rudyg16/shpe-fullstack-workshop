# Use Debian-based Node.js image for Turbopack compatibility
FROM node:22-slim

# Set workdir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Create nextjs user for proper permissions
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app
USER nextjs

# Environment variables for Turbopack optimization
ENV TURBOPACK_DEV_MEMORY_LIMIT=8192
ENV NEXT_TELEMETRY_DISABLED=1
ENV FORCE_COLOR=0

# Run Next.js in development mode with Turbopack
CMD ["npm", "run", "dev"]
