/**
 * Created by usamaahmed on 4/25/17.
 */
import React , { Component } from 'react';
import { View , Image , StyleSheet } from 'react-native';
//import { Container, Content , View , Text , Card, CardItem, Thumbnail, Button, Icon, Left, Body, Spinner, H3 } from 'native-base';
import { Card, ListItem, Button, Tile, Text } from 'react-native-elements'
import { imageRoute } from '../../Contstants';
import Deck from './Deck';

export default class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    //renderUsers(u) {
    //    const users = this.props.navigation.state.params.users;
    //    return users.map(u => {
    //        <Card key={u.id}>
    //            <CardItem>
    //                <Left>
    //                    <Thumbnail source={{ uri : imageRoute + u.user_meta.logo}}/>
    //                    <Body>
    //                    <Text>{u.name}</Text>
    //                    <Text note>{u.created_at}</Text>
    //                    </Body>
    //                </Left>
    //            </CardItem>
    //            <CardItem cardBody>
    //                <Image source={{ uri : imageRoute + u.user_meta.logo}} style={{ width : 400, height : 100}}/>
    //            </CardItem>
    //            <CardItem content>
    //                <Text>{u.user_meta.description}</Text>
    //            </CardItem>
    //            <CardItem>
    //                <Button transparent>
    //                    <Icon active name="thumbs-up"/>
    //                    <Text>12 Likes</Text>
    //                </Button>
    //                <Button transparent>
    //                    <Icon active name="chatbubbles"/>
    //                    <Text>4 Comments</Text>
    //                </Button>
    //                <Text>11h ago</Text>
    //            </CardItem>
    //        </Card>
    //    })
    //}

    renderElement(item) {
        return (
            <Card
                key={item.id}
                title={item.name}
                image={{uri: imageRoute + item.user_meta.logo}}
            >
                <Text style={{marginBottom: 10}}>
                    {item.user_meta.description}
                </Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW'/>
            </Card>
        );
    }

    renderNoCards() {
        return <View><Text>there are no more cards</Text></View>
    }

    render() {
        const users = this.props.navigation.state.params.users;
        return (
            <View>
                <Deck
                    data={users}
                    renderElement={this.renderElement}
                    renderNoCards={this.renderNoCards}
                />
            </View>
        );
    }
}

