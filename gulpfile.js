var gulp = require("gulp");
var babel = require("gulp-babel");
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
 
/*gulp.task('build', () => {
    return browserify({
            entries: './app/components/App.jsx',
            extensions: ['.jsx'],
            debug: true
        })
		.pipe(sourcemaps.init())
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});*/
 
gulp.task('build', function() {
    const src = [
        './app/components/*.js',
        './app/components/*.jsx'
        ];

    return gulp.src(src)
                .pipe(sourcemaps.init())
                .pipe(babel({
                    presets: [
                        'es2015',
                        'react'
                        ]
                    }))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest('./public/script'));
});
 
gulp.task('less', function () {
	const src = [
	    './app/components/*.less',
	    './app/components/*.css'
    ];
	return gulp.src('./less/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less({
		  paths: [ path.join(__dirname, 'less', 'includes') ],
		  plugins: [autoprefix]
		}))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./public/css'));
});


gulp.task('watch', ['build'], () => {
    gulp.watch('./app/components/**/', ['build','less']);
});
 
gulp.task('default', ['watch']);


