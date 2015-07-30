module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['./**/*.js'],
        // the location of the resulting JS file
        dest: './dist/js/<%= pkg.name %>.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
         options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
   nwjs: {
    options: {
        platforms: ['win','osx','linux'],
        buildDir: './build', // Where the build version of my NW.js app is saved
    },
    src: ['./dist/**/*'] // Your NW.js app
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};