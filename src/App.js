
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
