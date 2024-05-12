let mix = require('laravel-mix');
//const url = 'frontend/web/'
const path = require('path');

mix.setPublicPath('./')
    .js('src/js/app.js', 'dist/js')
    //.js('src/js/catalog.js', 'dist/js')
    .sass('src/scss/app.scss', 'dist/css')
    .sass('src/scss/pages/index.scss', 'dist/css')
    //.sass(url + 'src/scss/pages/catalog.scss', 'dist/css')
    //.sass(url + 'src/scss/pages/news.scss', 'dist/css')
    //.sass(url + 'src/scss/pages/about.scss', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer')({
                cascade: false,
            }),
            require('postcss-sort-media-queries'),
        ],
        terser: {
            extractComments: false,
        },
        cssNano: true,
        manifest: false
    })
    .sourceMaps(false, "inline-source-map")
    .version()
    .webpackConfig({
        stats: {
            children: true
        },
        /*devServer: {
            proxy: {
                '*': 'http://localhost:3000'
            }
        }*/
    })
    .browserSync({
        open: false,
        server: {
            baseDir: path.normalize(__dirname),
            index: "index.html",
        },
        files: [
            '**/*.css',
            '**/*.scss',
            '**/*.js',
            '**/*.html',
        ]
    })
