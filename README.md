# 📝 Storytelling App

A dynamic web application that allows users to create unique stories by selecting a **genre**, **tone**, and adding their own **custom characters**. The app uses a **local API** to generate stories based on user preferences and character inputs.

---

## 🚀 Features

✅ Select story **genre** (Fantasy, Mystery, Romance, Sci-Fi)  
✅ Choose story **tone** (Happy, Sad, Sarcastic, Funny)  
✅ **Add, edit, and delete characters** with name, description, and personality  
✅ Generate a story using the configured settings and user-created characters  
✅ Story generation powered by a **local API**

---

## 🛠️ Tech Stack

- **React** – Frontend framework
- **TailwindCSS** – UI styling
- **Local API** – Handles text generation
- **Node.js/Express** (optional) – API backend (if applicable)

---

## 📚 How to Run Locally

### 1. Clone the Repository

````bash
git clone https://github.com/your-username/storytelling-app.git
cd storytelling-app
npm insall
npm run dev
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the node modules:
```bash
npm instal
````

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Discussion
Faster for tinyllama. specs: Output generated in 20.07 seconds (30.59 tokens/s, 614 tokens, context 806, seed 1905122696)
12:23:45-708059 INFO     Loaded "TinyLlama_TinyLlama-1.1B-Chat-v1.0" in 7.80 seconds.                                                                                                                                                                                          
12:23:45-709492 INFO     LOADER: "Transformers"                                                                                                                                                                                                                                
12:23:45-710264 INFO     TRUNCATION LENGTH: 2048                                                                                                                                                                                                                               
12:23:45-711128 INFO     INSTRUCTION TEMPLATE: "Custom (obtained from model metadata)"  
![tinyllama](/images/tinyllama.png)
Slower for mistral: Output generated in 653.46 seconds (0.46 tokens/s, 298 tokens, context 1326, seed 1711961390)
11:58:31-938765 INFO     Loaded "mistralai_Mistral-7B-Instruct-v0.3" in 16.91 seconds.                                                                                                                                                                                         
11:58:31-939871 INFO     LOADER: "Transformers"                                                                                                                                                                                                                                
11:58:31-940673 INFO     TRUNCATION LENGTH: 32768                                                                                                                                                                                                                              
11:58:31-941489 INFO     INSTRUCTION TEMPLATE: "Custom (obtained from model metadata)"   
![mistral](/images/mistral.png)