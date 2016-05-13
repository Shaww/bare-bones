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

    browserify : {
      develop : {
        options : {
          transform : [ ['babelify'] ],

          browserifyOptions : {
            debug: true 
          }
        },

        files : {
          'public/js/bundle.js' : 'src/app.js' 
        }
      }
    },

    watch : {
      static : {
        options : {
          livereload : true 
        },

        files : ['public/css/**', 'public/js/**', 'public/index.html']
      },

      develop : {
        files : ['src/**/*.js'],
        tasks : ['browserify']
      }
    }

  })

  // load the grunt task package
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // register task, need a default at least
  grunt.registerTask('default', ['connect', 'watch'])
}

