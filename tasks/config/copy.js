var jsDestFolder = './source/assets/js/';
var cssDestFolder = './source/assets/css/';
var fontsDestFolder = './source/assets/fonts/';
var soundsDestFolder = './source/assets/sounds/';

var fancyboxPath = './node_modules/@fancyapps/fancybox';
var fontAwesomePath = './node_modules/@fortawesome/fontawesome-free';
var jqueryPath = './node_modules/jquery';
var harlemshakePath = './source/_vendor'

module.exports = function(grunt) {
  grunt.config.set('copy', {
    // Copy all needed files by types
    dev: {
      files: [
        // fancybox
        {
          src: fancyboxPath + '/dist/jquery.fancybox.css',
          dest: cssDestFolder,
          flatten: true,
          expand: true
        },
        {
          src: fancyboxPath + '/dist/jquery.fancybox.js',
          dest: jsDestFolder,
          flatten: true,
          expand: true
        },
        {
          src: fancyboxPath + '/src/js/thumbs.js',
          dest: jsDestFolder,
          flatten: true,
          expand: true
        },
        {
          src: fancyboxPath + '/src/css/thumbs.css',
          dest: cssDestFolder,
          flatten: true,
          expand: true
        },
        // font-awesome
        {
          src: fontAwesomePath + '/css/all.css',
          dest: cssDestFolder,
          flatten: true,
          expand: true
        },
        {
          src: fontAwesomePath + '/webfonts/*',
          dest: fontsDestFolder,
          flatten: true,
          expand: true
        },
        // jquery
        {
          src: jqueryPath + '/dist/jquery.js',
          dest: jsDestFolder,
          flatten: true,
          expand: true
        },
        // harlem shake
        {
          src: harlemshakePath + '/js/harlemshake.js',
          dest: jsDestFolder,
          flatten: true,
          expand: true
        },
        {
          src: harlemshakePath + '/css/harlemshake.css',
          dest: cssDestFolder,
          flatten: true,
          expand: true
        },
        {
          src: harlemshakePath + '/sound/harlemshake.mp3',
          dest: soundsDestFolder,
          flatten: true,
          expand: true
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
