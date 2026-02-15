import { vi } from "vitest";

type ResponseSuccessMock = {
  sendSuccess: ReturnType<typeof vi.fn>;
  sendCreated: ReturnType<typeof vi.fn>;
  sendUpdated: ReturnType<typeof vi.fn>;
  sendNoChanges: ReturnType<typeof vi.fn>;
};

export const responseSuccessMock = (): ResponseSuccessMock => ({
  sendSuccess: vi.fn(),
  sendCreated: vi.fn(),
  sendUpdated: vi.fn(),
  sendNoChanges: vi.fn(),
});

/**
 * Obtiene la última instancia creada del mock de ResponseSuccess.
 *
 * @param ResponseSuccessConstructor El constructor mockeado de ResponseSuccess (el que se mockea con vi.mock)
 * @returns La última instancia mockeada de ResponseSuccess
 */
export function getLastInstanceResponseSuccessMock(
  ResponseSuccessConstructor: unknown,
): ResponseSuccessMock {
  const mockConstructor = ResponseSuccessConstructor as ReturnType<typeof vi.fn>;

  return mockConstructor.mock.instances.at(-1) as ResponseSuccessMock;
}
