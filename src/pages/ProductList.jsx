
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive";


const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
 

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products:</FilterText> 
                <Select>
                    <Option disabled selected>
                        color
                    </Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>green</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>pink</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        size
                    </Option>
                    <Option>s</Option>
                    <Option>l</Option>
                    <Option>m</Option>
                    <Option>xl</Option>
                    <Option>xxl</Option>
                    <Option>xxxl</Option>
                </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                 <Select>
                    <Option>Newest</Option>
                    <Option>price (asc)</Option>
                    <Option>price (desc)</Option>
                    
                </Select>
                 </Filter>
                
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList

