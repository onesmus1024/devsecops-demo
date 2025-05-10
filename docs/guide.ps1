


# Create a slack account 
# Create a slack channel
# Create a slack app
# Create AKS cluster
$AZ_AKS_CLUSTER="aks-devsecops-uk-south"
$AZ_RESOURCE_GROUP="rg-devsecops-uk-south"
$AZ_CONTAINER_REGISTRY="acrdevsecopsuksouth"
az group create --name $AZ_RESOURCE_GROUP --location uksouth

az provider register --namespace 'microsoft.insights'

az acr create --name $AZ_CONTAINER_REGISTRY -g  $AZ_RESOURCE_GROUP -l uksouth --sku Standard
az aks create -n ${AZ_AKS_CLUSTER} -g ${AZ_RESOURCE_GROUP} --generate-ssh-keys --attach-acr ${AZ_CONTAINER_REGISTRY} `
    --node-count 1  --node-vm-size Standard_B2s `
    --node-osdisk-size 30  --nodepool-name webapps`
    --enable-addons monitoring  --enable-cluster-autoscaler`
    --min-count 3 --max-count 6  --node-count 3  --enable-addons open-service-mesh


az aks update -n ${AZ_AKS_CLUSTER} -g ${AZ_RESOURCE_GROUP} --attach-acr ${AZ_CONTAINER_REGISTRY}


az aks get-credentials --resource-group ${AZ_RESOURCE_GROUP} --name ${AZ_AKS_CLUSTER}
