import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/pages/produk/**/*.{ts,tsx}',
        '<rootDir>/src/components/layouts/navbar/**/*.{ts,tsx}',
        '<rootDir>/src/views/produk/**/*.{ts,tsx}',
        '!<rootDir>/src/**/*.d.ts',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/.next/**'
    ]
}

export default createJestConfig(config)