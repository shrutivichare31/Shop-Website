import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding : 20px;

`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display : flex;
`
const SocialIcon = styled.div`
    width : 40px ;
    height : 40px;
    border-radius : 50%;
    color : white;
    background-color : #${ props => props.color};
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`

const Right = styled.div`
    flex : 1;
    padding : 20px;
`
const ContactItem = styled.div`
    margin-bottom : 20px;
    display : flex;
    align-items : center;
`
const Payment = styled.img`
    width : 50%;
`

const Center = styled.div`
    flex: 1;
    padding : 20px;

`
const Title = styled.h3`
    margin-bottom : 30px;

`
const List = styled.ul`
    margin : 0;
    padding : 0;
    list-style : none;
    display : flex;
    flex-wrap : wrap;


`
const ListItem = styled.li`
    width : 50%;
    margin-bottom : 10px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shop.</Logo>
                <Desc>
                    13.5 inch Touchscreen Laptop (8GB/256GB SSD/Windows 10 Home /AMD Radeon™ Graphics/Platinum/1.265 kg, 25% Off on Microsoft 365)
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon >
                    <SocialIcon color="E4405F" >
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon >
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} />
                    50 ABC path , South XYZ , PQR
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +91 1234567890
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    contact12shop@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
