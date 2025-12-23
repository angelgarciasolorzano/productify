import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["vitest.setup.ts"],
    include: ["tests/**/*.test.ts", "src/**/*.spec.ts"],
    exclude: ["node_modules", "dist", "logs", "prisma/**", "src/generated/**"],
    reporters: ["default"],
    coverage: {
      enabled: true,
      provider: "v8",
      reportsDirectory: "./coverage",
      reporter: ["text", "html", "lcov"],
      exclude: [
        "node_modules/**",
        "dist/**",
        "tests/**",
        "vitest.setup.ts",
        "**/*.d.ts",
        "prisma/**",
        "src/generated/**",
      ],
    },
    restoreMocks: true,
    clearMocks: true,
  },
  resolve: {
    alias: {
      "@productify/*": path.resolve(__dirname, "src/*"),
      "@productify/categorie/*": path.resolve(__dirname, "src/modules/categorie/*"),
      "@tests/*": path.resolve(__dirname, "tests"),
    },
  },
});
