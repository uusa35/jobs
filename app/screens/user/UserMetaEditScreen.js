/**
 * Created by usamaahmed on 4/27/17.
 */
import Expo from 'expo';
import React , { Component } from 'react';
import { Image , Platform} from 'react-native';
import { View , Text , Thumbnail , List , ListItem , Icon , Button } from 'native-base';
import { UserIndex } from '../../queries/queries';
import { UserMetaEdit } from '../../queries/mutations';
import { graphql } from 'react-apollo';
import axios from 'axios';


class UserMetaEditClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUri: null,
            imageType: null,
            message: false
        }
    }

    fetchImage() {
        Expo.ImagePicker.launchImageLibraryAsync({
                allowsEditing: false
            })
            .then(r => {
                console.log(r);
                this.setState({imageUri: r.uri, imageType: r.origURL});
            }).catch(e => console.log(e));
    }

    uploadImage = async() => {
        let imageUpload = {
            uri: this.state.imageUri,
            name: 'whatever.png'
        }
        var data = new FormData();
        data.append('logo', imageUpload);
        data.append('fax', '345');
        data.append('_method', 'PATCH');
        let result = await axios.post(`http://localhost:8000/api/meta/1`,
            data,
            {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'multipart/form-data'
                }
            }).then(r => this.setState({message: r.message})).catch(e => console.log(e));

        await this.props.mutate({
            variables: {
                id: 1,
                fax: "0000000",
                establishment_year: "2017"
            },
            refetchQueries: [{query: UserIndex}]
        }).then(r =>r.data).then(() => this.props.navigation.goBack()).catch(e => console.log(e));
    }

    render() {
        return (
            <View>
                <List>
                    <ListItem onPress={() => this.fetchImage()}>
                        <View style={{ justifyContent : 'center', alignItems : 'center' , minHeight : 150}}>
                            { (this.state.imageUri !== null) ?
                                <Thumbnail source={{ uri: this.state.imageUri }}
                                           style={{ width: 130, height: 130 }}/>
                                :
                                <Icon name="ios-images"
                                      style={{ fontSize : 100 , borderWidth: 1, borderColor : 'lightgrey', borderRadius : 30,  padding: 15 , color : 'lightblue'}}/>
                            }
                            <Text style={{ fontSize : 12 , marginTop : 2}}>best fit : (475*800)</Text>
                        </View>
                    </ListItem>
                </List>
                <Button onPress={ () => this.uploadImage() }>
                    <Text>
                        uploade the logo
                    </Text>
                </Button>
            </View>
        );
    }
}

const UserMetaEditScreen = graphql(UserMetaEdit)(UserMetaEditClass);

export default UserMetaEditScreen;