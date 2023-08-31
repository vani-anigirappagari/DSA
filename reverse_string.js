function runProgram(input) {
    console.log(input);
    let i;
    let result = "";
    for(i=input.length-1;i>0;i--){
        result += input[i] + "";
    }
    console.log(result);
}
if (process.env.USERNAME === "jtbb") {
    runProgram(`hey I am here`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}