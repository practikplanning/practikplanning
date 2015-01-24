module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dist: 'production',
    stylus: {
      compile: {
        files: {
          'css/main.css': 'css/main.styl'
        }
      }
    },

    watch: {
      babysit: {
        files: ['css/**/*.styl'],
        tasks: ['stylus:compile']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('stylus2css', ['stylus:compile', 'watch:babysit']);

};
