asar extract app.asar src
pushd src/src/app
find . -name "*.js" | xargs js-beautify -r
popd
