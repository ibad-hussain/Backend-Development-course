// Sessions and Cookies

// Form handling
// Handling forms data coming from any library, framework, or templating engines

// Use the following line when data coming from framework
app.use(express.json());

// Use the following line when data coming from templating engine (eg, EJS)
app.use(express.urlencoded({extended: true}));