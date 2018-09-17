/**
 * react-native-spinner
 * eye catching Spinner for both Android and iOS
 * GitHub:https://github.com/trinadhkoya/react-native-spinner
 * Email:trinadhkoya9@gmail.com
 * Profile:https://in.linkedin.com/in/trinadhkoya
 */


import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Image, Modal, StatusBar, StyleSheet, View} from 'react-native';

export default class ProgressBar extends Component {

    componentDidMount() {
        StatusBar.setHidden(false)
    }

    componentWillUnmount() {
        StatusBar.setHidden(true)
    }

    render() {
        const {animationType, modalVisible, type} = this.props;
        return (
            <Modal
                animationType={animationType}
                transparent
                visible={modalVisible}>
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                        {this.renderGif(type)
                        }

                    </View>
                </View>
            </Modal>
        );

    }

    renderGif(type) {
        /**
         * based on type ,just render your image
         */
        if (type === 'r') {
            return (
                <Image
                    style={styles.loaderImage}
                    // source={require('./img/redSpinner.gif')}
                />
            )
        } else if (type === 'g') {
            return (
                <Image
                    style={styles.loaderImage}
                    // source={require('./img/redSpinner.gif')}
                />
            )
        } else if (type === 'p') {
            return (
                <Image
                    style={styles.loaderImage}
                    // source={require('./img/redSpinner.gif')}
                />
            )
        } else if (type === 'l') {
            return (
                <Image
                    style={styles.loaderImage}
                    // source={require('./img/redSpinner.gif')}
                />
            )
        } else {
            return (
                <Image
                    style={styles.loaderImage}
                    // source={require('./img/redSpinner.gif')}
                />
            )
        }
    }
}

ProgressBar.propTypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    loaderContainer: {
        width: 90,
        height: 90,
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45,
    },
    loaderImage: {
        width: 70,
        height: 70,
        borderRadius: 15,
        position: 'relative',
        left: '50%',
        marginLeft: -35,
        top: '50%',
        marginTop: -35,
    },
});
