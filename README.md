

## How it was built

#  follow to create apollo function ```./apollo```

https://www.apollographql.com/docs/apollo-server/deployment/azure-functions/



# follow to create React assets

https://github.com/facebook/create-react-app


# static webapp

follow to create a static webapp
https://docs.microsoft.com/en-gb/azure/static-web-apps/get-started-cli?tabs=react

```az staticwebapp create``` 

build presets : React
App Location : /
Api Location : apollo
output location : build  (output of npm run-scripts build)

will create the app in Azure, and add a workflow file to your github repo that will build the site to generate the assets, using the action https://github.com/Azure/static-web-apps-deploy

https://github.com/Azure/static-web-apps


https://docs.microsoft.com/en-gb/azure/static-web-apps/github-actions-workflow


github action
https://github.com/Azure/static-web-apps-deploy

