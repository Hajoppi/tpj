DIST=$1
SRC=$2
STARTDIR=$PWD
cd $DIST
rm -rf .cache dist || true
npm run build
cp .htaccess dist/
cd $STARTDIR
rm -rf $SRC/teekkarius147 || true
cp -r $DIST/dist $SRC/teekkarius147
