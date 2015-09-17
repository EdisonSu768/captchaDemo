
module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  APP_PATH = 'coffee'

  grunt.initConfig
    coffee:
      frontend:
        options:
          sourceMap: true
        files:[
          expand: true
          cwd: "#{APP_PATH}"
          dest: "./js"
          src: ["*.coffee"]
          ext: ".js"
        ]

  grunt.registerTask 'compile:coffee',[
    'coffee:frontend'
  ]