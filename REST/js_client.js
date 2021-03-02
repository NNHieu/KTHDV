// const http = require('http');

// http.get('http://127.0.0.1:5000/getinfo', (resp) => {
//   let data = '';

//   // a data chunk has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // complete response has been received.
//   resp.on('end', () => {
//     JSON.parse(data).map( (student, i) => {
//             console.log(`--------Student ${i}-----------`)
//             console.log(`Họ tên: ${student["name"]["firstname"]} ${student["name"]["lastname"]}`)
//             console.log(`Tuổi: ${student["age"]}`)
//             console.log(`Giới tính: ${student["gender"]}`)
//             console.log(`Địa chỉ: ${student["address"]["street"]}, ${student["address"]["city"]}, ${student["address"]["postalCode"]}`)
//         }
//     )
    
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });