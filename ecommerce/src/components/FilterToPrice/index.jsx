import React from 'react'

import {
    FilterToPriceContainer,
    FilterToPriceGroup,
    FilterToPriceTitle,
    FilterToPriceP,
    InputFilterToPrice,
    DivInputFilterToPrice
} from './styled'

export default class FilterToPrice extends React.Component {

    render() {
        return (
            <FilterToPriceContainer>
                <FilterToPriceGroup>
                  <FilterToPriceTitle>Ordenar por:</FilterToPriceTitle>
                  <FilterToPriceP onClick={this.props.minorPrice}>Menor preço</FilterToPriceP>
                  <FilterToPriceP onClick={this.props.majorPrice}>Maior preço</FilterToPriceP>
                  <FilterToPriceTitle>Filtrar por:</FilterToPriceTitle>
                  <DivInputFilterToPrice>
                      <InputFilterToPrice type="number" placeholder='Minimo' value={this.props.inputFilterMin} onChange={(e) => this.props.filterByInputPriceMin(e)}/>
                      <InputFilterToPrice type="number" placeholder='Máximo' value={this.props.inputFilterMax} onChange={(e) => this.props.filterByInputPriceMax(e)}/>
                  </DivInputFilterToPrice>
                </FilterToPriceGroup>
            </FilterToPriceContainer> 
        )
    }
}