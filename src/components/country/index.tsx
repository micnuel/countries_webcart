import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Header, Icon, Image } from 'semantic-ui-react'
import {Link}  from 'react-router-dom'

import { AppState } from '../../types'

export default function CountryPage() {

    const {id} =useParams()
    console.log(typeof id)
    const country = useSelector((state:AppState) =>
    state.countries.countries.find(p=> p.id==id))
    if(!country){return <h4> Country not found!</h4>}
    
    return (
        <div>
            <Link to ="/" >
                <Icon name='angle double left' size='huge' textAlign='center'/>
            </Link>
            <Header as='h2' icon textAlign='center'>
                <Icon name='flag' circular />
                <Header.Content>
                    <Image src={country.flag} size='small' centered/>
                </Header.Content>
                <Header.Content>Country Name:{country.name}</Header.Content>
                <Header.Content>Country Population:{country.population}</Header.Content>
                <Header.Content>Country Region:{country.region}</Header.Content>
            </Header>
            <Image
                centered
                size='large'
                src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
            />
        </div>
    )
}
