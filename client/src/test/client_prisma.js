"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcClientPrismaOptions = void 0;
var microservices_1 = require("@nestjs/microservices");
exports.grpcClientPrismaOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: 'node_prisma:50051',
        package: 'micr_prisma',
        protoPath: '/proto/micr_prisma.proto',
    },
};
