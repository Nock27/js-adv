function addAndRemove(commands) {
  let arrOfNums = [1];
  temp = 1;
  for (let i = 1; i < commands.length; i++) {
    temp += 1;
    if (commands[i] == "add") {
      arrOfNums.push(temp);
    }
    if (commands[i] == "remove") {
      arrOfNums.pop();
    }
  }
  if (arrOfNums.length == 0) {
    console.log("Empty");
  } else {
    console.log(arrOfNums.join("\n"));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
