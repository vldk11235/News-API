import logo from './logo.svg';
import './App.css';
import NewsList from "./components/NewsList";
import axios from 'axios';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


// axios.get('/api/v2/everything?q=bitcoin&apiKey=42b0dee9b6904907823c7975c2a3fd92')
//
//     .then((response) => {
//       console.log(response);
//     }, (error) => {
//       console.log(error);
//     });

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/top-headlines" element={<NewsList/>} />
            </Routes>


        </Router>
    );
}

export default App;
