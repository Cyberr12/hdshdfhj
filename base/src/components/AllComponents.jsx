import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import About from './Home'
import Home from './About'


function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<About />} />
                <Route path="/about" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;