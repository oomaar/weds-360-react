import React from 'react';
import { Container, Title, Item, Pane, Icon, ItemTitle, ItemText, ItemLink, RowContainer, Row } from "./styles/styledJumbo";
import jubmoData from "../../data/jumbo.json";

// console.table(jubmoData[0].top);

const Jumbo = () => {
    return (
        <Container>
            <Title>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</Title>
            {/*  */}
            <RowContainer>
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
            </RowContainer>
        </Container>
    )
}

export default Jumbo;


// <div>
// <h1>I'm the Jumbo</h1>
// <div>
//     <img src="https://weds360.com/assets/icons/tools-registry-44ab24a86952730b44ec02ae3405b2665d61471f42a631968093d3613f4f95e8.png" alt="pic"/>
//     <h2>Title</h2>
//     <p>text</p>
//     <a href="">Link</a>
// </div>
// </div> 



// ,

//     {
//         "key": 4,
//         "src": "https://weds360.com/assets/icons/tools-guestlist-f425f68309d1c60ecfbd742d0c23f6ac6e4c5f06112cc32c7f03cb44e76e46c4.png",
//         "title": "GUEST LIST",
//         "text": "Who is coming? Who is not? Who replied with a 'Maybe'? Manage all of this while customizing your invitations. All in one place and right at your fingertips.",
//         "link": "Create your guest list"
//     },

//     {
//         "key": 5,
//         "src": "https://weds360.com/assets/icons/tools-vendors-ed23b60c6df77090fbdd0525fa4933dc63663550ded8c05f79e46168566f20b8.png",
//         "title": "VENDORS",
//         "text": "Meet your service providers, view their profiles and make all the perfect choice for your wedding night.",
//         "link": "Start your tour"
//     },

//     {
//         "key": 6,
//         "src": "https://weds360.com/assets/icons/tools-registry-44ab24a86952730b44ec02ae3405b2665d61471f42a631968093d3613f4f95e8.png",
//         "title": "REGISTRY LIST",
//         "text": "Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.",
//         "link": "Create your dream list"
//     }




// {jubmoData.map(jumboItem => (
//     (jumboItem.key === 1 || jumboItem.key === 2 || jumboItem.key === 3) ?
//    ( <Row>
//         <Item key={jumboItem.key}>
//             <Pane>
//                 <Icon src={jumboItem.src} alt="jumboIcon" />
//             </Pane>
//             <Pane>
//                 <ItemTitle>{jumboItem.title}</ItemTitle>
//                 <ItemText>{jumboItem.text}</ItemText>
//                 <ItemLink>{jumboItem.link}</ItemLink>
//             </Pane>
//         </Item>
//     </Row>) : 
//     (jumboItem.key === 4 || jumboItem.key === 5 || jumboItem.key === 6) ? (
//         <Row>
//         <Item key={jumboItem.key}>
//             <Pane>
//                 <Icon src={jumboItem.src} alt="jumboIcon" />
//             </Pane>
//             <Pane>
//                 <ItemTitle>{jumboItem.title}</ItemTitle>
//                 <ItemText>{jumboItem.text}</ItemText>
//                 <ItemLink>{jumboItem.link}</ItemLink>
//             </Pane>
//         </Item>
//     </Row>
//     ) : null
// ))}