'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      dev: {},
      ci: {
        browsers: ['PhantomJS'],
        singleRun: true
      },
      coverage: {
        browsers: ['PhantomJS'],
        reporters: ['coverage'],
        preprocessors: {
          'js/**/*.js': ['coverage']
        },
        singleRun: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma:ci', 'karma:coverage']);
};
