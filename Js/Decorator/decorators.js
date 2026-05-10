function withLogging(fn) {
  return function (...args) {
    console.log("Function Started");
    console.log("Arguments: ", args);

    const result = fn(...args);
    console.log("Function Finished");

    return result;
  };
}

function withExecutionTime(fn) {
  return function (...args) {
    const start = Date.now();
    const result = fn(...args);
    const end = Date.now();

    console.log(`Execution Time: ${end - start}ms`);

    return result;
  };
}

export { withLogging, withExecutionTime };
