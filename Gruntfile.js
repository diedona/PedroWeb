module.exports = function (grunt) {

    grunt.initConfig({

        //limpando a pasta de release
        clean: {
            release: ["release"],
            tmp: ["release/tmp"]
        },

        //concatenando todos os scripts e css
        concat: {
            options: {
                separator: ';',
            },
            css: {
                src: 'dev/css/**/*.css',
                dest: 'release/tmp/styles.concat.css'
            },
            js: {
                src: [
                    'dev/scripts/**/*.js'
                ],
                dest: 'release/tmp/scripts.concat.js'
            },
        },

        //minificando e zoando o javascript
        uglify: {
            release: {
                files: [
                    //3rd party
                    {
                        'release/scripts/vendor.min.js': [
                            'bower_components/angular/angular.js',
                            'bower_components/angular-ui-router/release/angular-ui-router.js',
                            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                        ]
                    },
                    //nossos scripts (previamente concatenados)
                    {
                        'release/scripts/scripts.min.js': [
                            'release/tmp/scripts.ordered.concat.js',
                            'release/tmp/scripts.concat.js'
                        ]
                    }
                ]
            }
        },

        //minificando o CSS
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            release: {
                files: [
                    //3rd party
                    {
                        'release/css/vendor.min.css': [
                            'bower_components/bootstrap/dist/css/bootstrap.css'
                        ]
                    },
                    //nosso CSS previamente concatenados
                    {
                        'release/css/styles.min.css': [
                            'release/tmp/styles.concat.css'
                        ]
                    }
                ]
            }
        },

        //gerando a index do release
        htmlbuild: {
            release: {
                src: 'dev/index.html',
                dest: 'release/',
                options: {
                    relative: true,
                    scripts: {
                        bundle: [
                            'release/scripts/vendor.min.js',
                            'release/scripts/scripts.min.js'
                        ]
                    },
                    styles: {
                        bundle: [
                            'release/css/vendor.min.css',
                            'release/css/styles.min.css'
                        ]
                    }
                }
            }
        },

        //minificando as views (html)
        htmlmin: {
            release: {
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    //minificando o index.html
                    {
                        'release/index.html': 'release/index.html'
                    },
                    //minificando as outras views
                    {
                        expand: true, // Enable dynamic expansion.
                        cwd: 'dev/views', // Src matches are relative to this path.
                        src: ['**/*.html'], // Actual pattern(s) to match.
                        dest: 'release/views', // Destination path prefix.
                    }
                ]
            }
        },
        
        //copiando as fontes, imagens e etc
        copy: {
            release: {
                files: [
                    {
                        expand: true, 
                        src: ['bower_components/bootstrap/dist/fonts/*'], 
                        dest: 'release/fonts',
                        flatten: true
                    },
                    {
                        expand: true, 
                        cwd: 'dev/images',
                        src: ['**/*.*'], 
                        dest: 'release/images'
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('release', [
        'clean:release',
        'concat:css', 'concat:js',
        'uglify:release', 'cssmin:release',
        'htmlbuild:release', 'htmlmin:release',
        'copy:release',
        'clean:tmp'
    ]);
}