module.exports = grunt => {
  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
           transform: [
             ["babelify"]
           ]
        },
        files: {
          "source/js/dist/app.js": "source/js/src/main.js"
        }
      }
    },
    shell: {
      pulp: {
        command: "cd source/js/src/ps/ && pulp build -O --to output.js && cd ../../../.."
      }
    }
  });
  grunt.registerTask("pulp", ["shell:pulp"])
  grunt.registerTask("default", ["pulp", "browserify"]);
}
