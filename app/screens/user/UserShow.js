/**
 * Created by usamaahmed on 4/25/17.
 */
import React , { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { imageRoute } from 'react-native-dotenv'

export default class UserShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const u = this.props.user;
        return (
            <Container>
                <Content>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri : imageRoute + u.user_meta.logo}}/>
                                <Body>
                                <Text>{u.name}</Text>
                                <Text note>{u.created_at}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image/>
                        </CardItem>
                        <CardItem content>
                            <Text>{u.user_meta.description}</Text>
                            <Button transparent>
                                <Icon active name="thumbs-up"/>
                                <Text>12 Likes</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles"/>
                                <Text>4 Comments</Text>
                            </Button>
                            <Text>11h ago</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}