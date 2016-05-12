module.exports = function (grunt) {
  grunt.initConfig({
  
    connect : {
      server : {
        options : {
          port      : 9000,
          hostname  : '192.168.2.172',
          base      : 'public',
          keepalive : true
        } 
      }
    }

  })

  // load the grunt task package
  grunt.loadNpmTasks('grunt-contrib-connect')


  // register task, need a default at least
  grunt.registerTask('default', ['connect'])
}

