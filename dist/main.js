"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = 1005;
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(PORT, () => {
        console.log(`Application run on port:`, PORT);
    });
}
start();
//# sourceMappingURL=main.js.map