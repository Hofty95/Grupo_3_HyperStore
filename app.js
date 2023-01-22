/* Constantes Base */

const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

/* Elementos Estaticos */

app.use(express.static(path.resolve(__dirname, "public")));

/* Rutas */

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "home.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "login.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "register.html"))
);
app.get("/detalle", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "detalle.html"))
);
app.get("/carrito", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "carrito.html"))
);
app.get("/resultado", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "busqueda.html"))
);
app.get("/help", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "help.html"))
);
app.get("/dashboard", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "dashboard.html"))
);

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "home.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "login.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "register.html"))
);
app.get("/detalle", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "detalle.html"))
);
app.get("/carrito", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "carrito.html"))
);
app.get("/resultado", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "busqueda.html"))
);
app.get("/help", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "help.html"))
);
app.get("/recuperarClave", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "cambioContraseñal.html"))
);
app.get("/dashboard", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "dashboard.html"))
);

/* Servidor */

app.listen(port, () =>
  console.log(`Server Running in: http://localhost:${port}`)
);
