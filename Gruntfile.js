module.exports = function (grunt) {
  grunt.initConfig({
  
    connect : {
      server : {
        options : {
          port      : 9000,
          hostname  : '192.168.2.172',
          base      : 'public'
        } 
      }
    },

    watch : {
      // context wide options
      options : {
        livereload : true
      }, 

      static : {
        files : ['public/css/**', 'public/js/**', 'public/index.html']
      }
    }

  })

  // load the grunt task package
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // register task, need a default at least
  grunt.registerTask('default', ['connect', 'watch'])
}

