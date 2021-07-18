import React from 'react'
import CardsGrid from '../CardsGrid'
import FilterToPrice from '../FilterToPrice'

import { Main } from './styled'

export default class MainContainer extends React.Component {

    render() {
        return (
            <Main>
                <FilterToPrice
                    inputFilterMax={this.props.inputFilterMax}
                    inputFilterMin={this.props.inputFilterMin}
                    filterByInputPriceMin={this.props.filterByInputPriceMin}
                    filterByInputPriceMax={this.props.filterByInputPriceMax}
                    majorPrice={this.props.majorPrice}
                    minorPrice={this.props.minorPrice}
                />
                <CardsGrid
                    products={this.props.products}
                    addToCart={this.props.addToCart}
                    searchInputArea={this.props.searchInputArea}
                    inputFilterMax={this.props.inputFilterMax}
                    inputFilterMin={this.props.inputFilterMin}
                    orderByPrice={this.props.orderByPrice}
                />
            </Main>
        )
    }
}
