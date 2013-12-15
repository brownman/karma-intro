'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {}
    }
  });

  grunt.loadNpmTasks('grunt-karma');
};
