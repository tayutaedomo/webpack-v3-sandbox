# webpack-v3-sandbox
Try webpack v3


# Setup and lunch web server
```
$ git clone git@github.com:tayutaedomo/webpack-v3-sandbox.git
$ cd webpack-v3-sandbox
$ npm install
$ bin/www
```

Your app should now be running on [localhost:3000](http://localhost:3000).


# Development
## Using Watch Mode
```
$ npm run watch
```


# Trials
## 1
Try to import Function and Class.

```
$ ./node_modules/.bin/webpack --config public/javascripts/trial_1/webpack.config.js
$ ./node_modules/.bin/gulp trial_1
```

## 2
Try to import npm module and local lib.

```
$ ./node_modules/.bin/webpack --config public/javascripts/trial_2/webpack.config.js
$ ./node_modules/.bin/gulp trial_2
```

## 3
Try to import Three.js and Three.js examples.

```
$ ./node_modules/.bin/webpack --config public/javascripts/trial_3/webpack.config.js
$ ./node_modules/.bin/gulp trial_3
```

## 4
Try to import Video.js and videojs-contrib-hls.

```
$ ./node_modules/.bin/webpack --config public/javascripts/trial_4/webpack.config.js
$ ./node_modules/.bin/gulp trial_4
```

