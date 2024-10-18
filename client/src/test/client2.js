"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcClientOptions2 = void 0;
var microservices_1 = require("@nestjs/microservices");
exports.grpcClientOptions2 = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: 'node_2:50051',
        package: 'micr2',
        protoPath: '/proto/micr2.proto',
    },
};
