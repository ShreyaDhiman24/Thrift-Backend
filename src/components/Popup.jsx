import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Popup(props) {
    return (
    
            <Popover id="popover-basic">
                <Popover.Header as="h3">Popover right</Popover.Header>
                <Popover.Body>
                    And here's some <strong>amazing</strong> content. It's very engaging.
                    right?
                </Popover.Body>
            </Popover>
    );
}

export default Popup;