import React, { useEffect, useRef } from "react";
import './styles/basic.scss';
import CyberFrameStyle from "./components/CyberFrameStyle";
import GridBackground from "./components/GridBackground";
import makeInfiniteComeTrue from "./utils/MakeInfiniteComeTrue";

function App() {
    const finalWordRef = useRef(null);
    const NWordRef = useRef(null);

    useEffect(() => {
        // Initialisez script ici
        makeInfiniteComeTrue(finalWordRef, NWordRef);
    }, []);

    return (
        <>
            <CyberFrameStyle />
            <GridBackground />
            <div ref={finalWordRef} className="finalWord"></div>
            <div ref={NWordRef} className='numberOfTheWord'></div>
        </>
    );
}

export default App;