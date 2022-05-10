import app from "./src/config/config";
import mailconfig from "./src/config/mailConfig"

app.listen(process.env.PORT, () => console.log('app is running', process.env.PORT))