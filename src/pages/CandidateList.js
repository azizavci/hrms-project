import React from "react";
import CandidateService from "../services/candidateService";
import { Menu, Table, Icon, Card } from "semantic-ui-react";
import { useState, useEffect } from "react";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Web Site</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidates) => (
            <Table.Row key={candidates.id}>
              <Table.Cell>{candidates.firstName}</Table.Cell>
              <Table.Cell>{candidates.lastName}</Table.Cell>
              <Table.Cell>{candidates.phone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

     

      
            
            <Card.Group itemsPerRow={4}>
            {candidates.map((candidates) => (
              <Card key={candidates.id}>
            <Card.Content>
              <Card.Header>{candidates.firstName}</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" />
              22 Friends
            </Card.Content>
          </Card>
          ))}
            </Card.Group>

            
          
    </div>
  );
}
