module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        atBegin: true,
      },

      css: {
        files: ['sass/**/*.scss'],
        tasks: ['compass', 'cssmin']
      }
    },

    compass: {
      compile: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'expanded',
          require: [
            'sass-globbing'
          ]
        }
      }
    },

    cssmin: {
      options: {
        report: 'min'
      },

      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    }

  });

  grunt.registerTask('default', ['watch']);
};