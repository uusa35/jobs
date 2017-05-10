/**
 * Created by usamaahmed on 4/21/17.
 */
import React , { Component } from 'react';
import { View , StyleSheet , NetInfo , FlatList , Image , LayoutAnimation } from 'react-native';
import { Text } from 'native-base';
import VideoPlayer from 'react-native-video-controls';

export default class VideoContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VideoPlayer
                source={{ uri: "02.mov" }}
                // react-native-video options
                playInBackground={ false }   // play audio when entering background
                playWhenInactive={ false }   // [iOS] continuing playing when notification centre active
                resizeMode={ 'contain' }     // 'contain' or 'cover' should be used.
                paused={ false }             // stop playback entirely
                repeat={ false }             // Repeats at end of duration
                muted={ false }              // Mutes the audio entirely.
                //title={ 'test title' }                 // Video title, if null title area is hidden
                volume={ 1 }                 // 0 is muted, 1 is normal.
                rate={ 1 }                   // 0 is paused, 1 is normal.

                // settings
                controlTimeout={ 15000 }     // hide controls after ms of inactivity.
                seekColor={ '#FFF' }         // fill/handle colour of the seekbar
                videoStyle={ {} }            // Style appended to <Video> component
                style={ {} }                 // Style appended to <View> container

                // event callbacks
                //onError={ () => {} }         // Fired when an error is encountered on load
                onBack={ () => { this.props.navigation.goBack()} }          // Function fired when back button is pressed.
                //onEnd={ () => {} }           // Fired when the video is complete.

            />
        );
    }
}