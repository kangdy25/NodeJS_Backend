// HTTP 방식으로 URL을 읽어오는 프로그램

// import http from "http";
// import { URL } from "url";

// const server = http.createServer((req, res) => {
//   const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
//   const name = searchParams.get("name") || "Guest";

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write(`<h1>Hello, ${name}!</h1>`);
//   res.write(`<p>Nice to meet you.</p>`);
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// HTML 문서를 파일 시스템에서 읽어서 클라이언트에 반환하기

// import http from "http";
// import { readFile } from "fs/promises";

// const server = http.createServer(async (req, res) => {
//   try {
//     const content = await readFile("index.html", "utf-8");
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(content);
//   } catch (err) {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Error loading the page.");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// HTML 문서를 받아서 서버 측에서 데이터 수정하기
// import http from "http";
// import { readFile } from "fs/promises";
// import { URL } from "url";

// const server = http.createServer(async (req, res) => {
//   const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
//   const name = searchParams.get("name") || "Guest";
//   const place = searchParams.get("place") || "our site";

//   try {
//     let template = await readFile("template.html", "utf-8");
//     template = template.replaceAll("{{name}}", name).replaceAll("{{place}}", place);

//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(template);
//   } catch (err) {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Error loading the page.");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// RESTFul API
// import http from "http";

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the Home Page!");

//   } else if (req.method === "GET" && req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About Us Page");

//   } else if (req.method === "POST" && req.url === "/submit") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Form Submitted Successfully!");

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// 도서 관리 서비스
// import http from "http";
// import { URL } from "url";

// let books = [
//   { idx: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
//   { idx: 2, title: "1984", author: "George Orwell" },
//   { idx: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
// ];
// let nextId = 4;

// const server = http.createServer(async (req, res) => {
//   const url = new URL(req.url, `http://${req.headers.host}`);
//   const id = Number(url.pathname.split("/")[2]);
//   let body = "";

//   req.on("data", chunk => body += chunk);
//   req.on("end", () => {
//     if (req.method === "GET" && url.pathname === "/books") {
//       return send(res, 200, books);
//     }

//     if (req.method === "GET" && id) {
//       return send(res, 200, 
//         books.find(b => b.idx === id) || err("Not found"), id);
//     }

//     if (req.method === "POST" && url.pathname === "/books") {
//       const { title, author } = JSON.parse(body || "{}");
//       if (!title || !author) return send(res, 400, err("Invalid data"));

//       const newBook = { idx: nextId++, title, author };
//       books.push(newBook);
//       return send(res, 201, newBook);
//     }

//     if (req.method === "DELETE" && id) {
//       const beforeLen = books.length;
//       books = books.filter(b => b.idx !== id);

//       return send(res, 
//         beforeLen > books.length ? 200 : 404, 
//         beforeLen > books.length
//          ? { message: "Deleted" } : err("Not found"));
//     }
//     send(res, 404, err("Invalid request"));
//   });
// });

// function send(res, status, data) {
//   res.writeHead(status, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// }

// function err(msg) {
//   return { error: msg };
// }

// server.listen(3000, () => console.log(
//   "Server running at http://localhost:3000"));

// Cookie
// import http from "http";
// import { URL } from "url";

// function parseCookies(cookieHeader) {
//   return cookieHeader.split("; ").reduce((acc, cookie) => {
//     const [key, value] = cookie.split("=");
//     if (key && value) acc[key] = value;
//     return acc;
//   }, {});
// }

// const server = http.createServer((req, res) => {
//   const url = new URL(req.url, `http://${req.headers.host}`);
//   const path = url.pathname;
//   const key = url.searchParams.get("key");
//   const value = url.searchParams.get("value");

//   if (path === "/set-cookie" && key && value) {
//     res.writeHead(200, { 
//       "Set-Cookie": `${key}=${value}; HttpOnly`,
//       "Content-Type": "text/plain" });
//     return res.end(`Cookie set: ${key}=${value}`);
//   }

//   if (path === "/get-cookie" && key) {
//     const cookies = parseCookies(req.headers.cookie || "");
//     return res.end(cookies[key]
//        ? `Value: ${cookies[key]}` : "Cookie not found");
//   }

//   res.writeHead(404, { "Content-Type": "text/plain" });
//   res.end("Not Found");
// });

// server.listen(3000, () => console.log(
//   "Server running at http://localhost:3000"));

// HTTPS
import https from "https";
import { readFileSync } from "fs";

const options = {
  key: readFileSync("server-key.pem"),
  cert: readFileSync("server-cert.pem")
}

const secureServer = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, HTTPS!");
});

secureServer.listen(3443, () => {
  console.log("HTTPS Server running on https://localhost:3443");
});