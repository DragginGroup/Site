const { LuaFactory } = await import('https://cdn.jsdelivr.net/npm/wasmoon@1.16.0/+esm');
const factory = new LuaFactory()
const lua = await factory.createEngine()