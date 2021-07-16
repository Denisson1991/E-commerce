import React from 'react'
import ItemsChosenByUser from '../ItemsChosenByUser'

import {
    HeaderTag,
    HeaderBackground,
    HeaderContainer,
    HeaderItems,
    LogoHeader,
    DivSearch,
    InputSearch,
    LupaIcon,
    ButtonCart,
    CartCounter
} from './styled'

import Logo from '../../icons/Logo.svg'
import CartIcon from '../../icons/Carrinho.svg'
import Lupa from '../../icons/Lupa.svg'
import UpArrow from '../../icons/up-arrow.svg'
import Img from '../../img/space.PNG'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default class Header extends React.Component {
    state = {
        buttonHasClicked: false
    }

    clickHeaderButton = () => this.setState({ 
        buttonHasClicked: !this.state.buttonHasClicked 
    })


    render() {
        return (
            <HeaderTag>
                <HeaderBackground>
                    <HeaderContainer>
                        <HeaderItems>
                            <LogoHeader src={Img} alt="Logo Space eCommerce" />
                            <DivSearch>
                            
                            
                                
                               
                                <InputSearch
                                    type="text"
                                    name="Digite os items"
                                    placeholder="Digite sua busca..."
                                    onChange={(e) => this.props.searchInput(e)}
                                    value={this.props.searchInputArea}
                                />
                                <LupaIcon src={Lupa} alt="Lupa Icon" />
                                
                            </DivSearch>
                            <IconButton aria-label="show 4 new mails" color="default" fontSize="large" >
                            <Badge badgeContent={this.props.cart.length} color="primary">
                                <ShoppingCartIcon fontSize="large"
                                onClick={this.props.openCartButton}/>
                            </Badge>
                            </IconButton>
                           
                        </HeaderItems>
                    </HeaderContainer>
                </HeaderBackground>
                
                {this.props.isCartOpen && 
                <ItemsChosenByUser
                    cart={this.props.cart}
                    add={this.props.add}
                    sub={this.props.sub}
                    delete={this.props.delete}
                    CartTotal={this.props.CartTotal}
                    cleanCart={this.props.cleanCart}
                    finishPopUp={this.props.finishPopUp}
                />
                }
            </HeaderTag>
        )
    }
}