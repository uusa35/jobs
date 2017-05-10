/**
 * Created by usamaahmed on 4/11/17.
 */
import React , { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';


/*
 location
 Animated.Value.Animated
 how to move
 Animated.Types.Spring
 what to move
 Animated.Components.View
 */
export default class ItemShow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.navigation.state.params.item;
        return (
            <Container>
                <Content>
                    <Card key={item.id}>
                        <CardItem header ref="myText">
                            <Text>{item.name}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                Item type : { item.type }
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere obcaecati
                                    ratione sed sint vel. Blanditiis consequuntur, est et eveniet, minima molestiae
                                    nisi nobis quas quidem sunt suscipit vitae voluptas voluptates.

                                    Architecto culpa doloribus eligendi error laboriosam molestias natus officiis
                                    recusandae rerum, sunt ullam voluptates voluptatum? Aspernatur deserunt
                                    dignissimos dolor in laborum magnam modi nihil repudiandae veritatis voluptatum.
                                    Ad, cum exercitationem!

                                    Accusamus accusantium aliquam dolore doloremque earum, eligendi eveniet
                                    expedita fugiat illo libero maiores molestiae, nam neque odit porro provident
                                    rem repellat suscipit velit vero? Accusamus deserunt ipsa sed sit voluptates.

                                    Amet eius enim error fugit officiis optio quas quos tempora ullam veritatis.
                                    Fuga modi nemo ratione sit ut. Aliquid animi blanditiis doloremque expedita
                                    minima pariatur quod saepe sunt totam ut.

                                    Consectetur corporis deleniti esse facilis, ipsa labore nihil non numquam
                                    soluta totam. Assumenda corporis harum ipsa ipsum laudantium minus nisi
                                    praesentium provident quas quos. A distinctio error ipsam modi sint!

                                </Text>
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem header>
                            <Text>Category Id : {item.category_id}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}