module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            height: '1000px',
            width: '800px',
            suffix: '_small',
            quality: 30,
           aspectRatio: false
          },{
            name: 'large',
            width: '1920px',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['lightbulb.jpg', 'about_me.jpg', 'frantic.gif'],
          cwd: 'app/assets/images/',
          dest: 'app/assets/images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};