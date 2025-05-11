# DevSecOps Deployment Guide

This guide outlines the steps to provision infrastructure, configure secrets, and deploy an application to Azure Kubernetes Service (AKS) using a DevSecOps approach.

---

## 🏗️ Step 1: Provision Infrastructure

Run the following PowerShell script to set up the infrastructure:

```powershell
# Provision the infrastructure
.\scripts\create_infrastructure.ps1
```

---

## 🔐 Step 2: Configure Repository Secrets

### ✅ Slack Webhook

1. Generate a Slack webhook URL.
2. Add it to your repository secrets with the name:

```
SLACK_CI_HOOK
```

### ✅ Azure Credentials

Add the following secrets to your repository:

- `AZURE_CREDENTIALS`
- `AZURE_SUBSCRIPTION_ID`

The `AZURE_CREDENTIALS` secret should have this JSON format:

```json
{
  "clientId": "<client_id>",
  "clientSecret": "<client_secret>",
  "subscriptionId": "<subscription_id>",
  "tenantId": "<tenant_id>"
}
```

---

## 🚀 Step 3: Deploy Application to AKS

Trigger the CI/CD workflow to perform the following:

- Build the application
- Create a Docker image
- Push the image to Azure Container Registry (ACR)
- Deploy the image to Azure Kubernetes Service (AKS)

---

## ✅ Done

Once the workflow completes, your application should be live on AKS.
