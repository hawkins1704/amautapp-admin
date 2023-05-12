import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Router from "./Router";
import { MyProvider } from "./providers/Context";


// console.log("NODE_ENV: ", process.env.REACT_APP_ENVIRONMENT);
function App() {
    
    return (
        <MyProvider>
           <Router/>
        </MyProvider>
    );
}

export default App;
