# Create a Slack account
# Create a Slack channel
# Create a Slack app

# Define variables
$AZ_AKS_CLUSTER = "aks-devsecops-uk-south"
$AZ_RESOURCE_GROUP = "rg-devsecops-uk-south"
$AZ_CONTAINER_REGISTRY = "acrdevsecopsuksouth"

# Create resource group
az group create --name $AZ_RESOURCE_GROUP --location uksouth

# Register monitoring provider
az provider register --namespace "Microsoft.Insights"

# Create Azure Container Registry
az acr create `
  --name $AZ_CONTAINER_REGISTRY `
  --resource-group $AZ_RESOURCE_GROUP `
  --location uksouth `
  --sku Standard

# Create AKS cluster and attach ACR
az aks create `
  -n $AZ_AKS_CLUSTER `
  -g $AZ_RESOURCE_GROUP `
  --generate-ssh-keys `
  --attach-acr $AZ_CONTAINER_REGISTRY `
  --node-count 1 `
  --node-vm-size Standard_B2s `
  --node-osdisk-size 30 `
  --nodepool-name webapps `
  --enable-addons monitoring `
  --enable-cluster-autoscaler `
  --min-count 3 `
  --max-count 6 `
  --node-count 3 `
  --enable-addons open-service-mesh


# Attach ACR again (optional redundancy if needed)
az aks update `
  --name $AZ_AKS_CLUSTER `
  --resource-group $AZ_RESOURCE_GROUP `
  --attach-acr $AZ_CONTAINER_REGISTRY

# Get AKS credentials
az aks get-credentials `
  --resource-group $AZ_RESOURCE_GROUP `
  --name $AZ_AKS_CLUSTER
