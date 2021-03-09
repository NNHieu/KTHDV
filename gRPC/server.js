/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var PROTO_PATH = __dirname + '/protos/student.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;


data = [
  {
    "dob": "29/10/2000",
    "sid": '18020543',
    "gender": "Male",
    "contacts": {
      "contact_addr": "Hanoi",
      "contact_name": "Nguyen Le Hoang"
    },
    "name": {
      "first": "Hoang",
      "last": "Nguyen Le"
    },
    "emails": {
      "other_mail": "hoangnl2000@gmail.com",
      "vnu_mail": "18020543@vnu.edu.vn"
    }
  },
  {
    "dob": "04/12/2000",
    "sid": '18020779',
    "gender": "Male",
    "contacts": {
      "contact_addr": "Ha Noi",
      "contact_name": "Nguyen Huu Loc"
    },
    "name": {
      "first": "Huu Loc",
      "last": "Nguyen"
    },
    "emails": {
      "other_mail": "locnguyenhuu2k@gmail.com",
      "vnu_mail": "18020779@vnu.edu.vn"
    }
  },
  {
    sid: '18020510',
    dob: '12/03/2000',
    gender: 'Male',
    name: {
      first: 'Hieu',
      last: 'Nguyen',
    },
    contact: {
      contact_addr: 'fads',
      contact_name: 'asdfs',
    },
    emails: {
      vnu_mail: "18020510@vnu.edu.vn",
      other_mail: ''
    }
  }
]

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  student = data.filter(s => s.sid == call.request.sid)
  callback(null, student[0]);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
