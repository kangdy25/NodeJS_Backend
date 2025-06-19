import http from "http";

function getBook(id) {
  const options = {
    hostname: "localhost",
    port: 3000,
    path: `/books/${id}`,
    method: "GET"
  };

  const req = http.request(options, res => {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => console.log("GET Response:", data));
  });

  req.on("error", err => console.error("Error:", err));
  req.end();
}

function addBook(title, author) {
  const postData = JSON.stringify({ title, author });

  const options = {
    hostname: "localhost",
    port: 3000,
    path: "/books",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, res => {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => console.log("POST Response:", data));
  });

  req.on("error", err => console.error("Error:", err));
  req.write(postData);
  req.end();
}

// getBook(2);
addBook("React", "Mito Rabbit");