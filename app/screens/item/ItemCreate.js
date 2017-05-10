/**
 * Created by usamaahmed on 4/11/17.
 */
import React , { Component } from 'react';
import { View , Text } from 'react-native';
import { graphql } from 'react-apollo';
import { Button } from 'native-base';
import { ItemStore } from '../../queries/mutations';
import { UserIndex } from '../../queries/queries';


class ItemCreate extends Component {
    constructor(props) {
        super(props);
    }

    handlePress() {
        let item = {
            name: 'my test 3',
            user_id: 3,
            category_id: 1,
            type: 'product'
        };
        this.props.mutate({
            variables: {
                name: item.name,
                user_id: item.user_id,
                category_id: item.category_id,
                type: item.type
            },
            refetchQueries: [{query: UserIndex}]
        }).then(r => console.log(r.data)).then(() => this.props.navigation.goBack()).catch(e => console.log(e));
    }

    render() {
        return (
            <View>
                <Button onPress={ () => this.handlePress()}>
                    <Text>Create Item</Text>
                </Button>
            </View>
        );
    }
}

const ItemCreateWithData = graphql(ItemStore)(ItemCreate);

export default ItemCreateWithData;