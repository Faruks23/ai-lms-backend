"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import seedSuperAdmin from './app/DB';
const config_1 = __importDefault(require("./config/config"));
const app_1 = __importDefault(require("./app"));
let server;
async function main() {
    try {
        // await mongoose.connect(config.database_url as string);
        // seedSuperAdmin();
        server = app_1.default.listen(config_1.default.port, () => {
            console.log(`app is listening on port ${config_1.default.port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}
main();
process.on('unhandledRejection', (err) => {
    console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on('uncaughtException', () => {
    console.log(`😈 uncaughtException is detected , shutting down ...`);
    process.exit(1);
});
