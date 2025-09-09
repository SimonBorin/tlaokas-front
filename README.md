# 🕵️ The Lost Art of Keeping a Secret — Frontend

> Minimalist React UI for one-time secret sharing with server-side encryption.

---

## 🔍 About

This is the **frontend** for [The Lost Art of Keeping a Secret](https://github.com/mrblooomberg/thelostartofkeepingasecret), a pet project written in Go for secure, ephemeral sharing of sensitive data such as passwords, tokens, or credentials.

- 🔐 Secrets are **encrypted on the backend**
- 🗑️ Automatically deleted after first view or after 12 hours
- 🌐 Generates **one-time shareable links**
- 💨 Fast, clean, and modern UI with no tracking or storage

---

## 🧱 Tech Stack

| Layer       | Tech                                      |
|-------------|-------------------------------------------|
| Framework   | [React](https://reactjs.org)              |
| Bundler     | [Vite](https://vitejs.dev)                |
| Language    | [TypeScript](https://www.typescriptlang.org/) |
| Styling     | [CSS Modules](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| Web Server  | [nginx](https://www.nginx.com/) (optional in production) |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mrblooomberg/thelostartofkeepingasecret.git
cd thelostartofkeepingasecret/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm run dev
```

App should be available at [http://localhost:5173](http://localhost:5173)

---

## 🧪 Build for production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

You can preview the built app locally:

```bash
npm run preview
```

---

## 🐳 Docker

A Dockerfile is included for serving the app using **nginx**.

### Build the image

```bash
docker build -t tlaokas-frontend .
```

### Run the container

```bash
docker run -d -p 5173:80 tlaokas-frontend
```

---

## ☁️ Deployment (HTTPS via ALB)

In production, this frontend is expected to be:

- Served over HTTPS via **AWS ALB**
- Backed by a certificate (e.g. `*.ops.ringcentral.com`)
- Exposed through Kubernetes Ingress with ALB annotations

**Note:** The frontend app itself does not handle HTTPS directly — it relies on the platform (e.g. ALB) to terminate TLS.

---

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/                 # React app source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page views (e.g., Home, Secret View)
│   ├── styles/          # CSS modules
│   ├── App.tsx          # App entry point
│   └── main.tsx         # React root
├── nginx.conf           # nginx config for static hosting
├── Dockerfile           # Docker image for production
├── vite.config.ts       # Vite configuration
└── index.html           # HTML template
```

---

## 📜 License

This project is released under the [MIT License](LICENSE).

---

## 🤘 Author

Made with ❤️ by [@mrblooomberg](https://github.com/mrblooomberg) as a pet project to learn Go and full-stack deployment.
