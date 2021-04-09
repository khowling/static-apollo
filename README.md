

## Instructions to Deploy

Azure Static Websites use Github Actions  CD/CI to deploy your site. When you create the Azure Website, you will need provide your own git repo containing the project that will be deployed.

1. Copy this repo into your own github account

    * Click on this link, https://github.com/khowling/static-apollo/generate
    * Enter a name for your repo
    * Press 'Create repository from templte' button
    
2. Create the Azure Static Website thats 

    * Follow instructions [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to Create a github __Personal Access Token__ to set `GH_PAT` below

    * Set the `GH_PAT` & `GH_REPO` variables with your values, and create the Azure resource

        ```
        # Generate unique name
        APPNAME=apollodemo$(date +%s | cut -c 6-10)

        # Add your Github Personal Access Token
        GH_PAT=< github personal access token >

        # Add your Github repo "account/repo"
        GH_REPO=< gtihub_account / cloned_repo_name >

        az group create -n $APPNAME -l westeurope

        az staticwebapp create \
        -l westeurope \
        -g $APPNAME \
        -n $APPNAME \
        -s https://github.com/${GH_REPO}  -b master \
        --token $GH_PAT
        ```


3. Track the depolyment progress

    * Click the `Actions` tab on your github repo, and track the build and deploy progress


## How it was built

###  follow to create apollo function ```./apollo```

https://www.apollographql.com/docs/apollo-server/deployment/azure-functions/



### follow to create React assets

https://github.com/facebook/create-react-app


### static webapp

follow to create a static webapp
https://docs.microsoft.com/en-gb/azure/static-web-apps/get-started-cli?tabs=react

```
build presets : React
App Location : /
Api Location : apollo
output location : build  (output of npm run-scripts build)
```

### References

https://github.com/Azure/static-web-apps-deploy

https://github.com/Azure/static-web-apps


https://docs.microsoft.com/en-gb/azure/static-web-apps/github-actions-workflow


github action
https://github.com/Azure/static-web-apps-deploy

