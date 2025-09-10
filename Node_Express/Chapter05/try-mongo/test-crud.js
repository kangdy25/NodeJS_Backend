require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_PASSWORD;

const client = new MongoClient(uri, { useNewUrlParser: true });

async function main() {
  try {
    await client.connect();
    console.log("MongoDB 접속 성공");

    const collection = client.db("test").collection("person");

    // Create Document
    await collection.insertOne({ name: "동붕이", age: 25 });
    console.log("문서 추가 완료");

    // Read Document
    const documents = await collection.find({ name: "동붕이" }).toArray();
    console.log("찾은 문서: ", documents);

    // Update Document
    await collection.updateOne({ name: "동붕이" }, { $set: { age: 26 } });
    console.log("문서 업데이트");

    // Read Updated Document
    const updatedDocuments = await collection
      .find({ name: "동붕이" })
      .toArray();
    console.log("갱신된 문서: ", updatedDocuments);

    // Delete Document
    await collection.deleteOne({ name: "동붕이" });
    console.log("문서 삭제");

    await client.close();
  } catch (err) {
    console.log(err);
  }
}

main();
