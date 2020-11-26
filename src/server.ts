import App from "./app";
const PORT = 30002;

async function start(){
    const appGenerator: App = new App();

    try {
        await appGenerator.create();
        const app = appGenerator.app;

        app.listen(PORT, () => {
            console.log('Express server listening on port ' + PORT);
        })
    } catch (err){
        console.log(err.message);
    }
}

start();
