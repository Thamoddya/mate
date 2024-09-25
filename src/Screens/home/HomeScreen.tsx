import {Edit} from 'iconsax-react-native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenStyles, TextStyles} from '../../styles/AppStyles';
import {Colors} from '../../styles/Colors';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  // MARK: - Component
  const HeaderView: React.FC = () => {
    return (
      <View style={[styles.headerView]}>
        <TouchableOpacity>
          <Text style={[styles.headerText]}>Edit</Text>
        </TouchableOpacity>
        <Text style={[styles.middleText]}>Messages</Text>
        <TouchableOpacity>
          <Edit size={24} color={Colors.SUB_1} />
        </TouchableOpacity>
      </View>
    );
  };

  const MessageView: React.FC = () => {
    return (
      <View>
        <Text>Message</Text>
      </View>
    );
  };

  // MARK: - Render
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <HeaderView />
      <ScrollView contentContainerStyle={[styles.messagesContainer]}>
        <MessageView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerView: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    ...TextStyles.H6,
    color: Colors.SUB_1,
  },
  middleText: {
    ...TextStyles.H3,
    color: Colors.PRIMARY_WHITE,
  },
  messagesContainer: {
    backgroundColor: '#000',
    padding: 16,
    flexGrow: 1,
  },
});
