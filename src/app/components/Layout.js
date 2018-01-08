import React from "react";

import Column from "./global/Columns/Column";
import Container from "./global/Container/Container"
import Row from "./global/Row/Row";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
 
  }

  render() {
    return (
      <div>
          <Container className="container">  
            <Row>
              <Column className="col-12">
                H3LL0 !!
              </Column>
            </Row>
          </Container>
       </div>
    );
  }
}
