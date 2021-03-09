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

var parseArgs = require('minimist');
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

function print_student(student) {
  console.log(`Student Name: ${student["name"]["first"]} ${student["name"]["last"]}
  Student DoB: ${student["dob"]}
  Student Gender: ${student["gender"]}
  Address: ${student["contact"]["contact_addr"]}
  VNU Email: ${student["emails"]["vnu_mail"]}
  Other Email: ${student["emails"]["other_mail"]}`)
}

function main() {
  var argv = parseArgs(process.argv.slice(2), {
    string: 'target',
  });
  var target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:50051';
  }
  var client = new hello_proto.Greeter(target,
                                       grpc.credentials.createInsecure());
  var user;
  if (argv._.length > 0) {
    sid = argv._[0]; 
  } else {
    console.log('Nhập MSV, làm ơn')
    return;
  }
  client.sayHello({sid: sid}, function(err, response) {
    print_student(response);
  });
}

main();
