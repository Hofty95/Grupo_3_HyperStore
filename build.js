const { execSync } = require('child_process');

// Paso 1: Instalar las dependencias del proyecto
console.log('Instalando dependencias...');
execSync('npm install');

// Paso 2: Construir la aplicación
console.log('Construyendo la aplicación...');
execSync('npm run build');

// Paso 3: Desplegar en Netlify
console.log('Desplegando en Netlify...');
execSync('netlify deploy --prod');
