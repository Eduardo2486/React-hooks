import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import Context from './context';
import SuspensePage from './suspense';
import Memo from './memo';
import Effect from './effect';

export default function app() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/context" element={<Context />}></Route>
                    <Route path="/suspense" element={<SuspensePage />}></Route>
                    <Route path="/memo" element={<Memo />}></Route>
                    <Route path="/effect" element={<Effect />}></Route>
                </Route>    
            </Routes>
        </BrowserRouter>
    );
};
