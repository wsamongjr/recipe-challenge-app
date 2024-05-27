import { ThemeProvider } from "styled-components";
import "./App.css";
import RecipePage from "containers/RecipePage";
import Theme from "./Theme";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="App">
                <RecipePage />
            </div>
        </ThemeProvider>
    );
}

export default App;
