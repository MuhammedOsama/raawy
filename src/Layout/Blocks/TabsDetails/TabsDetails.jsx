import React from "react";
import {Tab, Tabs} from "react-bootstrap";

// block
import TabsContent from "../TabsContent/TabsContent";

// style
import "./TabsDetails.scss";

export default function TabsDetails() {
    return <div id="tabs">
        <Tabs defaultActiveKey="scheduled" id="uncontrolled-tab-example">
            <Tab eventKey="new" title="جديدة">
                <TabsContent/>
            </Tab>
            <Tab eventKey="active" title="نشطة">
                <TabsContent/>
            </Tab>
            <Tab eventKey="ended" title="منتهية">
                <TabsContent/>
            </Tab>
            <Tab eventKey="scheduled" title="مجدولة">
                <TabsContent/>
            </Tab>
            <Tab eventKey="refused" title="مرفوضة">
                <TabsContent/>
            </Tab>
        </Tabs>
    </div>
}
