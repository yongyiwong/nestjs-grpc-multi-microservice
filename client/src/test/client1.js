"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcClientOptions1 = void 0;
var microservices_1 = require("@nestjs/microservices");
exports.grpcClientOptions1 = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: 'node_1:50051',
        package: 'micr1',
        protoPath: '/proto/micr1.proto',
    },
};
