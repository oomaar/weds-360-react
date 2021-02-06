import React from 'react';
import { 
    Container,
    Title,
    RowBox,
    Row,
    Item,
    Pane,
    Icon,
    ItemTitle,
    ItemText,
    ItemLink
} from "./styles/styledJumbotron";
import jubmoData from "../../data/jumbo.json";

const Jumbotron = () => {
    return (
        <Container>
            <Title>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</Title>
            <RowBox>
                <Row>
                    {jubmoData[0].top.map(jumboItem => (
                        <Item key={jumboItem.key}>
                            <Pane>
                                <Icon src={jumboItem.src} alt="jumboIcon" />
                            </Pane>
                            <Pane>
                                <ItemTitle>{jumboItem.title}</ItemTitle>
                                <ItemText>{jumboItem.text}</ItemText>
                                <ItemLink>{jumboItem.link}</ItemLink>
                            </Pane>
                        </Item>
                    ))}
                </Row>

                <Row>
                    {jubmoData[1].bottom.map(jumboItem => (
                        <Item key={jumboItem.key}>
                            <Pane>
                                <Icon src={jumboItem.src} alt="jumboIcon" />
                            </Pane>
                            <Pane>
                                <ItemTitle>{jumboItem.title}</ItemTitle>
                                <ItemText>{jumboItem.text}</ItemText>
                                <ItemLink>{jumboItem.link}</ItemLink>
                            </Pane>
                        </Item>
                    ))}
                </Row>
            </RowBox>
        </Container>
    )
}

export default Jumbotron;
