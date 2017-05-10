/**
 * Created by usamaahmed on 4/21/17.
 */
import React , { Component } from 'react';
import { View , StyleSheet , NetInfo , FlatList , Image , LayoutAnimation } from 'react-native';
import { graphql } from 'react-apollo';
import { Container, Content, List, ListItem, Text , Spinner , Button ,H2, H3 ,  Card, CardItem , Thumbnail , Icon} from 'native-base';
import I18n from 'react-native-i18n'
import I18nTrans from '../I18n';
import { Items} from '../queries/queries';
import _ from 'lodash';
import moment from 'moment';

class HomeFlatList extends Component {
    constructor(props) {
        super(props);
    }

    //componentWillUpdate() {
    //    LayoutAnimation.spring();
    //}
    _doClick() {
        console.log('clickced');
    }

    _renderItem(i) {
        return (
            <Card key={i.id}>
                <CardItem>
                    <Image
                        source={{ uri : 'http://127.0.0.1:8000/storage/uploads/images/' + i.image}}
                        style={{width: 150, height: 280}}/>
                </CardItem>
                <CardItem left>
                    <Text style={{ textAlign: 'center', fontSize : 20, fontWeight : 'bold' }}>{i.name}</Text>
                    <View>
                        <Button iconRight small transparent onPress={ () => { console.log('click from date')}}>
                            <Icon name="md-calendar"/>
                            <Text>{moment(i.created_at, 'YYYY-MM-DD').format('LL')}</Text>
                        </Button>
                    </View>
                </CardItem>
            </Card>
        );
    }

    render() {
        return (
            <View>
                { this.props.data.loading ? <Spinner></Spinner> :
                    <View>
                        <Text>Flat List</Text>
                        <FlatList
                            HeaderComponent="header Component"
                            FooterComponent="footer component"
                            SeparatorComponent="separator component"
                            renderItem={({item}) => this._renderItem(item)}
                            data={this.props.data.items}

                            onEndReached={({ distanceFromEnd }) => {
                                console.log('on end reached ', distanceFromEnd)
                              }}
                        />
                    </View>

                }
            </View>
        );
    }
}

const HomeFlatListWithData = graphql(Items)(HomeFlatList);

export default HomeFlatListWithData;
