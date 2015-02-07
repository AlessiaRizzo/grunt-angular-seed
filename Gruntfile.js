module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            build: {
                options: {
                    targetDir: './app/lib'
                }
                //just run 'grunt bower:build' and you'll see files from your Bower packages in lib directory
            }
        },
        replace: {
            development: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./environment/development.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./environment/config.js'],
                    dest: './app/config/'
                }]
            },
            staging: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./environment/staging.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./environment/config.js'],
                    dest: './app/config/'
                }]
            },
            production: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./environment/production.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./environment/config.js'],
                    dest: './app/config/'
                }]
            }
        }
    });


    //Copy dependecies in  lib directories
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('development', [
        'replace:development',
        'bower:build'
    ]);

    grunt.registerTask('staging', [
        'replace:staging',
        'bower:build'
    ]);

    grunt.registerTask('production', [
        'replace:production',
        'bower:build'
    ]);

};
