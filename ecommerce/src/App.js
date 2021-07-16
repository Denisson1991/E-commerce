import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import PopUp from './components/PopUp'

import GlobalStyle from './GlobalStyle';
import { FlexContainer, DivAddedToCart, CloseMessage } from './styled';





const arrayDeNaves = [
    {
        image: "https://cdn.awsli.com.br/600x450/1081/1081393/produto/86832467e0c2eae01e.jpg",
        title: 'Homem na Lua',
        price: 59,
        quantity: 1,
        description: 'A Vostok entrou para a história como a nave que transportou o primeiro humano a ir para o espaço. A nave tem o formato retrô típico dos projetos soviéticos e é capaz de transportar apenas uma pessoa dentro de sua cabine esférica. '
    }, {
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/azul-marinho1-7f78c7f70c1f7e618116136551726503-1024-1024.png",
        title: 'Astronauta numa Boa',
        price: 49,
        quantity: 1,
        description: 'Sobrevivente de uma guerra com os seres cibernéticos cilônios, a Galactica lidera dezenas de outras pequenas naves na busca por um planeta conhecido como Terra.'
    }, {
        image: "https://ae01.alicdn.com/kf/H85d11f475e674f16888c75482f5f16fda/Espa-o-gal-xia-planeta-universo-3d-impresso-camiseta-das-senhoras-dos-homens-crian-as-c.jpg_q50.jpg",
        title: 'Planetas',
        price: 89,
        quantity: 1,
        description: 'Uma das naves mais reconhecidas e requisitadas de todos os tempos, capaz de transportar até duas pessoas em sua cabine'
    }, {
        image: "https://http2.mlstatic.com/D_NQ_NP_665847-MLB31669694969_082019-W.jpg",
        title: 'Canção da Lua',
        price: 99,
        quantity: 1,
        description: 'As Soyuzs são pequenas naves de apenas um ocupante, fáceis de manobrar, e armadas com lasers.'
    }, {
        image: "https://www.guller.com.br/7526-large_default/camiseta-escava%C3%A7%C3%A3o-da-lua-3d-imprens%C3%A3o-fashion-estampada-moda-ver%C3%A3o-b%C3%A1sica-masculina.jpg",
        title: 'Lua Decrescente',
        price: 95,
        quantity: 1,
        description: 'A nave é bastante semelhante aos veículos russos Soyuz. Desse modo, ela possui três módulos: orbital, de reentrada e de serviço. O módulo orbital, no entanto, possui painéis solares próprios.'
    }, {
        image: "https://www.camisetas4fun.com.br/media/product/627/camiseta-astronauta-259.jpg",
        title: 'Perdido em Marte',
        price: 67,
        quantity: 1,
        description: 'A Millenium Falcon se destaca pela sua amplitude e sua versatilidade em quesito conforto e adaptação, podendo transportar até 3 pessoas em sua cabine.'
    }, {
        image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/957/992/products/976667-mlb27426675225_052018-o-004f70d9f4470d2dbb15520786298354-640-0.jpg",
        title: 'Astro-Cat',
        price: 52,
        quantity: 1,
        description: 'A Viper é a nave espacial com maior período de uso na história da exploração espacial e é considerada muito eficiente e segura'
    }, {
        image: "https://cdn.awsli.com.br/400x400/281/281967/produto/3515071837bc9a39b0.jpg",
        title: 'Infinit',
        price: 55,
        quantity: 1,
        description: 'Este modelo costuma ser escohido para missões mais perigosas, esta nave possui uma velocidade jamais vista até os dias atuais, e transporta apenas 1 pessoa.'
    }, {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_HTydUHUhmoKi_Ho85u2NpVmzg7HDiqrVKhlt7YI15GhHLcSwCyVJFCGbuFyB9BU4_8&usqp=CAU",
        title: 'Rave',
        price: 89,
        quantity: 1,
        description: 'Possui 3 cabines separadas, podendo transportar até 8 pessoas em cada.'
    }, {
        image: "https://img.elo7.com.br/product/zoom/2550A40/camiseta-astronauta-skate-feminino.jpg",
        title: 'Pensando na Terra',
        price: 150,
        quantity: 1,
        description: 'Modelo Yamato é o modelo clássico para viagens espaciais, pode transportar até 4 pessoas.'
    }, {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMt1yxPEQuft1JCTTB4tpN45GvQSF_0_1Mah9f2vCES7cLhRcbZp_U3WAxzSxBmXJiDw&usqp=CAU",
        title: 'Gravity',
        price: 180,
        quantity: 1,
        description: 'Modelo Axiom se tornou a maior nave já vista, podendo transportar até 30 tripulantes.'
    }, {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNw4uCp4rC8p-xCaR3A26fuswr5_2xUT_mwZomk9OJsOWw9GHIXqAsa8CM6YmoIvoU_H0&usqp=CAU",
        title: 'To Earth',
        price: 79,
        quantity: 1,
        description: 'O modelo mais recente, do ano de 2020, possui asas planejadas para maior velocidade. Possui 4 cabines diferentes, podendo transportar até 5 pessoas. '
    }
]

class App extends React.Component {

    state = {
        products: arrayDeNaves,
        cart: [],
        searchInputArea: '',
        inputFilterMin: '',
        inputFilterMax: Infinity,
        orderByPrice: 'default',
        wasAddedToCart: false,
        successPopUp: false,
        isCartOpen: false
    }

    componentDidMount() {
        if (localStorage.getItem("cart")) {
            const cartString = localStorage.getItem("cart")
            const cartObject = JSON.parse(cartString)
            this.setState({ cart: cartObject })
        }      
    };

    componentDidUpdate() {
        localStorage.setItem("cart", JSON.stringify(this.state.cart))
      };

    addToCart = (product) => {
        let alreadyExists = false

        if (this.state.cart.length === 0) {
            this.setState({
                cart: [...this.state.cart, product]
            })
        }

        for (let i = 0; i < this.state.cart.length; i++) {

            if (this.state.cart[i].title === product.title) {
                const cartCopy = [...this.state.cart]

                cartCopy[i] = { ...product, quantity: cartCopy[i].quantity + 1 }

                this.setState({
                    cart: [...cartCopy]
                })

                alreadyExists = true
            }
        }

        if (!alreadyExists) {
            this.setState({
                cart: [...this.state.cart, product]
            })

            alreadyExists = false
        }

        this.addedToCartMessage()
    }
    
    addedToCartMessage = () => {
        this.setState({
            wasAddedToCart: true
        })

        setTimeout(() => {
            this.setState({
                wasAddedToCart: false
            })
        }, 2000);
    }

    closeCartMessage = () => {
        this.setState({
            wasAddedToCart: false
        })
    }

    finishPopUp = () => {
        this.setState({
            successPopUp: true
        })
    }

    cleanCart = () => {
        this.setState({
            successPopUp: false,
            cart: [],
            isCartOpen: false
        })
    }

    openCartButton = () => {
        this.setState({
            isCartOpen: !this.state.isCartOpen
        })
    }

    CartTotal = () => {
        const totalCompra = this.state.cart.map((item) => {
            return item.price * item.quantity
        }).reduce((accumulator, totalCompra) => totalCompra += accumulator, 0)

        return <span>{totalCompra}</span>
    }


    delete = (index) => {
        this.setState({
            cart: this.state.cart.filter((item, i) => {
                if (i !== index) {
                    return true
                } else {
                    return false
                }
            })
        })
    }

    add = (index) => {
        this.setState({
            cart: this.state.cart.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else
                    return item
            })
        })
    }

    sub = (index) => {
        this.setState({
            cart: this.state.cart.map((item, i) => {
                if (i === index && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else return item
            })
        })
    }

    searchInput = (e) => this.funcToUpdateComponentsByInputSearch(e)
    funcToUpdateComponentsByInputSearch = (e) => {
        this.setState({
            searchInputArea: e.target.value,
        })
    }

    filterByInputPriceMax = (e) => this.functToUpdateByInutPrice({ isMaxInputValue: true, value: e.target.value })
    filterByInputPriceMin = (e) => this.functToUpdateByInutPrice({ isMaxInputValue: false, value: e.target.value })
    functToUpdateByInutPrice = (objectValues) => {
        if (objectValues.isMaxInputValue) {
            if (objectValues.value.length === 0 || objectValues.value === " ") {
                this.setState({
                    inputFilterMax: Infinity
                })
            } else {
                this.setState({
                    inputFilterMax: objectValues.value
                })
            }
        } else {
            this.setState({
                inputFilterMin: objectValues.value
            })
        }
    }

    majorPrice = () => {
        this.setState({
            orderByPrice: 'highToLow'
        })

    }

    minorPrice = () => {
        this.setState({
            orderByPrice: 'lowToHigh'
        })
    }

    render() {
        return (
            <FlexContainer>
                <GlobalStyle />
                <Header
                    cart={this.state.cart}
                    add={this.add}
                    sub={this.sub}
                    delete={this.delete}
                    totalcart={this.state.totalcart}
                    CartTotal={this.CartTotal}
                    searchInput={this.searchInput}
                    searchValue={this.state.searchInputArea}
                    cleanCart={this.cleanCart}
                    finishPopUp={this.finishPopUp}
                    openCartButton={this.openCartButton}
                    isCartOpen={this.state.isCartOpen}
                />

                {<Main
                    products={this.state.products}
                    addToCart={this.addToCart}
                    searchInputArea={this.state.searchInputArea}
                    inputFilterMax={this.state.inputFilterMax}
                    inputFilterMin={this.state.inputFilterMin}
                    filterByInputPriceMin={this.filterByInputPriceMin}
                    filterByInputPriceMax={this.filterByInputPriceMax}
                    majorPrice={this.majorPrice}
                    minorPrice={this.minorPrice}
                    orderByPrice={this.state.orderByPrice}
                />}

                {this.state.wasAddedToCart &&
                    <DivAddedToCart>
                        Produto adicionado ao carrinho
                        <CloseMessage onClick={this.closeCartMessage}>
                            x
                        </CloseMessage>
                    </DivAddedToCart>
                }

                {this.state.successPopUp && 
                    <PopUp 
                        cleanCart={this.cleanCart} 
                    />
                }

                <Footer />
            </FlexContainer>
        );
    }
}

export default App;

