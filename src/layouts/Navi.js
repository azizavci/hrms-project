import React from "react";
import {
  Button,
  Menu,
  Segment
} from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Segment style={{ minHeight: 0, padding: "1em 0em" }} inverted>
        <Menu as="a" inverted pointing secondary>
          <Menu.Item name="Home" />
          <Menu.Item name="Employers" />
          <Menu.Item name="Job Adverts" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button inverted>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button inverted>Sign up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    
      </Segment>
    </div>
  );
}
