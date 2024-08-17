export const { LuaFactory } = await import('https://cdn.jsdelivr.net/npm/wasmoon@1.16.0/+esm');
export const factory = new LuaFactory()
export const lua = await factory.createEngine()
