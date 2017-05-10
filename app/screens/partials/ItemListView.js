/**
 * Created by usamaahmed on 4/11/17.
 */
import React , { Component } from 'react';
import { Text , List , ListItem , Button, Icon , Left , Right , Body } from 'native-base';
import { graphql } from 'react-apollo';
import { UserIndex } from '../../queries/queries';
import { ItemDelete , ItemEdit} from '../../queries/mutations';

class ItemListView extends Component {
    constructor(props) {
        super(props);
    }

    //deleteItem(item) {
    //    this.props.mutate({
    //        variables: {id: item.id},
    //        refetchQueries: [{query: UserIndex}]
    //    }).then(response => response.data).catch(e => console.log(e));
    //}


    editItem(item) {
        this.props.mutate({
            variables: {id: item.id, name: "name try 10", user_id: 3},
            //refetchQueries: [{query: UserIndex}]
            // working but in order to make it work perfect i have to include the whole list in the parent component so it updates directly
            optimisticResponse: {
                __typename: 'Mutation',
                ItemEdit: {
                    __typename: 'item',
                    id: item.id,
                    name: "name try 10",
                    user_id: 3
                }
            }
        }).then(response => response.data).catch(e => console.log(e));
    }

    render() {
        return (
            <List dataArray={this.props.items}
                  renderRow={(item) =>
                    <ListItem key={item.id} onPress={() => this.props.navigation.navigate('ItemShow',{ item })}>
                        <Left>
                            <Text>{`id: ${item.id} - name: ${item.name} - user_id ${item.user_id}`}</Text>
                        </Left>
                        <Right>
                            <Button small transparent light onPress={() => this.deleteItem(item)}>
                                <Icon name='ios-trash' style={{ color : 'red'}}/>
                            </Button>
                            <Button small transparent light onPress={() => this.editItem(item)}>
                                <Icon name='ios-open-outline' style={{ color : 'green'}}/>
                            </Button>
                        </Right>
                    </ListItem>}>
            </List>
        );
    }
}

const ItemListViewWithData = graphql(ItemEdit)(ItemListView);


export default ItemListViewWithData;