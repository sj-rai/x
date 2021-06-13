import React from "react";
import "./nav.scss";
import {
    Header,
    HeaderMenuItem,
    HeaderName,
    HeaderNavigation,
} from "carbon-components-react";

export class Nav extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <Header aria-label="IBM Platform Name">
                    <HeaderName href="#" prefix="IBM">
                        [X]
                    </HeaderName>
                    <HeaderNavigation aria-label="IBM [X]">
                        <HeaderMenuItem href="#">
                            Share Food Items/leftovers
                        </HeaderMenuItem>
                        <HeaderMenuItem href="#">
                            Excess Food Map
                        </HeaderMenuItem>
                        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                        <HeaderMenuItem href="#">Info</HeaderMenuItem>
                    </HeaderNavigation>
                </Header>
            </div>
        );
    }
}
