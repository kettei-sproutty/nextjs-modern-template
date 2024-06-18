import type { MetadataRoute } from 'next'

export const robots = (): MetadataRoute.Robots => ({
  rules: [{ userAgent: '*' }],
  host: 'https://example.com',
})
