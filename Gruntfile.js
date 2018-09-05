module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            'build/hello.js': ['hello1.js', 'hello2.js']
        }
    })

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat'])

}