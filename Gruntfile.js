module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({

        uglify: {
            my_target: {
                files: {
                    'dist/resources/js/scripts.min.js': [
                        'bower_components/angular/angular.js',
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/materialize/dist/js/materialize.js',
                        'dist/resources/js/sidebar.js'
                    ]
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/resources/css/styles.min.css': [
                        'bower_components/materialize/dist/css/materialize.css',
                        'dist/resources/css/custom.css'
                    ]
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        cwd: 'bower_components/materialize/dist/font/',
                        //src: ['bower_components/materialize/dist/font/*'],
                        src: '**/*', 
                        dest: 'dist/resources/font/',
                        expand: true
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);

};