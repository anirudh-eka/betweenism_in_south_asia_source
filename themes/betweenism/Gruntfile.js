module.exports = grunt => {
  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    uglify: {
      js: {
        files: { 'source/js/dist/output.min.js': ['source/js/src/purs/pursout.js','source/js/src/*.js'] },
        options: {
          preserveComments: false
        }
      }
    },
    browserify: {
      dist: {
        files: {
          "source/js/dist/app.js": "source/js/src/ps/main.js"
        }
      }
    },
    shell: {
      pulp: {
        command: "cd source/js/src/purs/ && pulp build -O --to ./pursout.js && cd ../../../.."
      }
    }
  });
  grunt.registerTask("pulp", ["shell:pulp"])
  grunt.registerTask("default", ["pulp", "uglify"]);
}
