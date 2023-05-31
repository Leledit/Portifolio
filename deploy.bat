cd ./view
npm run build
cp -r build ../
cd ../
gcloud config set project portifolio-388400
gcloud app deploy 
echo “Deploy finalizado com sucesso”