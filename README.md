This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

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
# alpcaweb

## Formulario de contacto funcional (correo + captcha)

El formulario de [contacto](http://localhost:3000/contacto) ahora envía correos reales a:

`alpcontadoresyauditores@gmail.com`

### 1) Configurar variables de entorno

1. Duplica `.env.example` como `.env.local`.
2. Completa los valores, especialmente `SMTP_PASS` (App Password de Gmail).

Variables usadas:

- `SMTP_USER` (por defecto: `alpcontadoresyauditores@gmail.com`)
- `SMTP_PASS` (requerido)
- `SMTP_HOST` (por defecto: `smtp.gmail.com`)
- `SMTP_PORT` (por defecto: `465`)
- `CONTACT_CAPTCHA_SECRET` (secreto para firmar el captcha)

### 2) Ejecutar el proyecto

```bash
npm run dev
```

### 3) Probar el formulario

1. Ve a `/contacto`.
2. Llena el formulario.
3. Resuelve el captcha.
4. Envía la consulta.
