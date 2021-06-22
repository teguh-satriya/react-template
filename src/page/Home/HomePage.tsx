import React, { useState } from "react";
import { Button, Jumbotron } from "react-bootstrap";

export default (() => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
    };
    return ( 
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    );
});