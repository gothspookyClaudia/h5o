You will need:
  * JDK and Apache Ant configured
  * [SvnAnt](http://subclipse.tigris.org/svnant.html) (extracted in the `build` folder)
  * [YUI Compressor 2.4.2](http://developer.yahoo.com/yui/compressor/) (JAR in the `build` folder)

`build` folder should be placed in the "trunk" folder (i.e. one level above h5o-js or h5o-chrome)

Running `ant min` will produce a minified version in `dist` folder. Then, if you have [Firefox](http://www.mozilla.com/firefox/), [Firebug](http://getfirebug.com/) and [FireUnit](http://fireunit.org/), you can open up the `index.html` in the `test` folder and observe how nicely it passes several simplistic tests.