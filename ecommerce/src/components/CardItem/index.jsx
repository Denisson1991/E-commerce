import React from 'react'

import {CardItemContainer, CardImageContainer, CardImage, CardContentContainer, CardTitle, CardPrice, CardButton} from './styled'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Fab from '@material-ui/core/Fab';


export default class CardItem extends React.Component{

    render(){
        return (
            <CardItemContainer>
                <CardImageContainer>
                    <CardImage src={this.props.product.image}></CardImage>
                </CardImageContainer>
                <CardContentContainer>
                    <CardTitle>{this.props.product.title}</CardTitle>
                    <CardPrice>R$ {this.props.product.price},00</CardPrice>
                    <Fab variant="extended" color="secondary" onClick={() => this.props.addToCart(this.props.product)}>
                        <AddShoppingCartIcon  />
                        ADICIONAR AO CARRINHO
                    </Fab>
                </CardContentContainer>
            </CardItemContainer>
        )
    }
}