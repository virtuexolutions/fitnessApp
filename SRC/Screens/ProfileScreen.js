import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';
import { Icon, View } from 'native-base';
import CustomImage from '../Components/CustomImage';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import Feather from 'react-native-vector-icons/Feather'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.safe_are_view}>
            <Header showBack isRightIcon />
            <View style={styles.header_view}>
                <View style={styles.row_view}>
                    <View style={styles.image_view}>
                        <CustomImage style={styles.image} source={require('../Assets/Images/no_profile_image.png')} />
                    </View>
                    <View style={{
                        width: moderateScale(20, 0.6),
                        height: moderateScale(20, 0.6),
                        backgroundColor: Color.green,
                        borderRadius: windowHeight,
                        top: moderateScale(20, 0.6),
                        left: moderateScale(-20, 0.6),
                        alignItems: "center",
                        justifyContent: 'center'
                    }}>
                        <Icon
                            name={'plus'}
                            as={Feather}
                            size={moderateScale(15, 0.3)}
                            color={Color.white} />
                    </View>
                    <View>
                        <CustomText isBold style={styles.name_text}>User Name</CustomText>
                        <CustomText style={styles.age_text}>19 Years Old</CustomText>
                    </View>
                </View>
                <View style={styles.lines} />
                <View style={[styles.row_view, { justifyContent: "space-between" }]}>
                    <CustomText style={styles.name_text}>Current weight</CustomText>
                    <CustomText style={styles.age_text}>19 Years Old</CustomText>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    safe_are_view: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: Color.themeBgColor
    },
    bgcImageStyle: {
        width: windowWidth,
        height: windowHeight,
    },
    logoImage: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.2,
        marginTop: moderateScale(80, 0.6),
    },
    header_view: {
        backgroundColor: Color.peach,
        width: windowWidth * 0.9,
        height: windowHeight * 0.32,
        alignSelf: 'center',
        marginTop: moderateScale(10, 0.6),
        borderRadius: moderateScale(10, 0.6)
    },
    container: {
        alignItems: 'center',
    },
    row_view: {
        paddingHorizontal: moderateScale(20, 0.6),
        marginTop: moderateScale(10, 0.6),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    image_view: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        backgroundColor: 'red',
        borderRadius: windowHeight
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: windowHeight

    },
    name_text: {
        fontSize: moderateScale(14, 0.6),
        color: Color.darkGray
    },
    age_text: {
        fontSize: moderateScale(12, 0.6),
        color: Color.lightGrey
    },
    lines: {
        width: windowWidth * 0.8,
        height: 1.2,
        backgroundColor: Color.veryLightGray,
        marginTop: moderateScale(15, 0.6),
        alignSelf: 'center',
        opacity: 0.5
    }
});
