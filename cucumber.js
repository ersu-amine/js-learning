module.exports = {
    default: {
      require: ["./step-definitions/*.js"],  // Path to step definitions
      format: ["progress"],                 // Test output format
      publishQuiet: true,                    // Disables publishing test results
      formatOptions: {
        snippetInterface: "synchronous"       // Ensures step definitions use synchronous snippets
      }
    }
  };
  
  