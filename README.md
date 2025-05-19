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

1. Generate a Slack webhook URL at [Slack API](https://api.slack.com/messaging/webhooks).

---

### 🛠️ Create a Slack App

1. Visit [Slack API Apps](https://api.slack.com/apps).
2. Click **Create New App** → select **From scratch**.
3. Name your app and choose your workspace.

---

### 🔌 Enable Incoming Webhooks

1. In the app settings, go to **Features > Incoming Webhooks**.
2. Toggle **Activate Incoming Webhooks** to **On**.
3. Click **Add New Webhook to Workspace**.
4. Choose a channel and authorize.
5. Copy the generated **Webhook URL**.
6. Add the webhook URL to your repository secrets.
7. Name the secret `SLACK_CI_HOOK`.
8. Go to your repository on GitHub.
9. Click on **Settings**.
10. In the left sidebar, click on **Secrets and variables** → **Actions**.
11. Click on **New repository secret**.

```
SLACK_CI_HOOK
```

### ✅ Azure Credentials

Add the following secrets to your repository:

- `AZURE_CREDENTIALS`


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
