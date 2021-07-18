import React from 'react'
import { FooterBackground, Text, ContainerFooter, R, G, B } from './styled'


export default class Footer extends React.Component {

    render() {

        return (
            <FooterBackground>
                <Text>Desenvolvido por</Text>
                <ContainerFooter>
                    <a href={'https://www.linkedin.com/in/denisson-vasconcelos-da-silva-416093129/'} target={'_blank'}>
                        <R></R>
                    </a>
                    
                </ContainerFooter>
            </FooterBackground>
        )
    }
}