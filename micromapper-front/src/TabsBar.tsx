import React from 'react';
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import Specifications from "./Specifications";

function TabsBar() {
  return (
    <Tabs defaultActiveKey="specifications" id="uncontrolled-tab-example">
        <Tab eventKey="specifications" title="Spécifications">
            <Specifications />
        </Tab>
        <Tab eventKey="implementation" title="Implémentation">
            TODO
        </Tab>
        <Tab eventKey="differential" title="Différentiel" disabled>
            TODO
        </Tab>
    </Tabs>
  );
}

export default TabsBar;
