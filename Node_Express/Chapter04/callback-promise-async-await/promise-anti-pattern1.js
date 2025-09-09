function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") {
      resolve("게임 가능");
    } else {
      reject(new Error("게임 불가능"));
    }
  });
}

// 콜백이랑 다를 바 없음
myWork("done").then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.error(err);
  }
);

// 좋은 Promise 사용 방식
myWork("doing")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.error(err);
  });
