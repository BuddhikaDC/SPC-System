# SPC System - Local Backend Setup

## Prerequisites
- Node.js 18+ installed

## Install dependencies
```bash
npm install
```

## Run the server
```bash
npm start
```
This serves the static files and provides APIs:
- POST `/api/register` { companyName, licenseNo, email, password, address }
- POST `/api/login` { email, password, role? }

Open in your browser:
- `http://localhost:3000/register.html`
- `http://localhost:3000/login.html`

The database file `spc.sqlite` will be created on first run.