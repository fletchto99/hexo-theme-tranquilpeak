var jsDestFolder = './source/assets/js/';
var cssDestFolder = './source/assets/css/';
var fontsDestFolder = './source/assets/fonts/';
var soundsDestFolder = './source/assets/sounds/';

var fancyboxPath = './node_modules/@fancyapps/fancybox';
var fontAwesomePath = './node_modules/@fortawesome/fontawesome-free';
var jqueryPath = './node_modules/jquery';
var gitmentPath = './node_modules/gitment';
var gitalkPath = './node_modules/gitalk';

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
          dest: jsDestFolder + 'jquery.js'
        },
        // harlem shake
        {
          src: harlemshakePath + '/js/harlemshake.js',
          dest: jsDestFolder + 'harlemshake.js'
        },
        {
          src: harlemshakePath + '/css/harlemshake.css',
          dest: cssDestFolder + 'harlemshake.css'
        },
        {
          src: harlemshakePath + '/sound/harlemshake.mp3',
          dest: soundsDestFolder + 'harlemshake.mp3'
        },
        // gitment
        {
          src: gitmentPath + '/dist/gitment.browser.js',
          dest: jsDestFolder + 'gitment.js'
        },
        {
          src: gitmentPath + '/style/default.css',
          dest: cssDestFolder + 'gitment.css'
        },
        // gitalk
        {
          src: gitalkPath + '/dist/gitalk.min.js',
          dest: jsDestFolder + 'gitalk.js'
        },
        {
          src: gitalkPath + '/dist/gitalk.css',
          dest: cssDestFolder + 'gitalk.css'
        },
        {
          src: './node_modules/moment/min/moment-with-locales.min.js',
          dest: jsDestFolder + 'moment-with-locales.js'
        },
        // algoliasearch
        {
          src: './node_modules/algoliasearch/dist/algoliasearch.min.js',
          dest: jsDestFolder + 'algoliasearch.js'
        },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
