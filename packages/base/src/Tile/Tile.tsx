import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageProps,
  ImageURISource,
  ImageSourcePropType,
} from 'react-native';
import { Image } from '../Image';
import { Text } from '../Text';
import { Icon, IconObject, IconProps } from '../Icon';
import { FeaturedTile } from './components/FeaturedTile';
import { androidRipple, defaultTheme, RneFunctionComponent } from '../helpers';
import Color from 'color';

export interface TileProps extends PressableProps {
  /** Text inside the tile. */
  title?: string;

  /** Icon Component Props.
   * @type IconObject
   */
  icon?: IconObject & IconProps;

  /** Text inside the tilt when tile is featured. */
  caption?: React.ReactNode;

  /** Source for the image. */
  imageSrc?: ImageSourcePropType | string | number;

  /** Number passed to control opacity on press. */
  activeOpacity?: number;

  /** Styling for the outer tile container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Styling for the image. */
  imageContainerStyle?: StyleProp<ViewStyle>;

  /** Styling for the outer icon container. */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /** Styling for the overlay container when using featured tile. */
  overlayContainerStyle?: StyleProp<ViewStyle>;

  /** Styling for the title. */
  titleStyle?: StyleProp<TextStyle>;

  /** Styling for the caption (optional); You only use this if `caption` is a string. */
  captionStyle?: StyleProp<TextStyle>;

  /** Width for the tile.
   * @default 'screen width'
   */
  width?: number;

  /** Height for the tile.
   * @default 'width/2'
   */
  height?: number;

  /** Changes the look of the tile. */
  featured?: boolean;

  /** Styling for bottom container when not featured tile. */
  contentContainerStyle?: StyleProp<ViewStyle>;

  /** Number of lines for Title. */
  titleNumberOfLines?: number;

  /** Optional properties to pass to the image if provided e.g "resizeMode". */
  imageProps?: Partial<ImageProps>;

  /** Custom ImageComponent for Tile.
   * @default RNE Image
   */
  ImageComponent?: typeof React.Component;
}

/** Tiles like Cards, are a convenient way to display related content about a single subject.
 * Also receives all [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props) (iOS) props. */
export const Tile: RneFunctionComponent<TileProps> = ({
  featured,
  imageSrc,
  icon,
  title,
  children,
  caption,
  titleStyle,
  onPress,
  activeOpacity,
  overlayContainerStyle,
  captionStyle,
  iconContainerStyle,
  imageContainerStyle,
  containerStyle,
  contentContainerStyle,
  titleNumberOfLines,
  ImageComponent = Image,
  imageProps = {},
  width = Dimensions.get('window').width,
  height = width * 0.8,
  theme = defaultTheme,
  ...attributes
}) => {
  if (featured) {
    const featuredProps = {
      title,
      icon,
      caption,
      imageSrc,
      onPress,
      activeOpacity,
      containerStyle,
      imageContainerStyle,
      overlayContainerStyle,
      titleStyle,
      captionStyle,
      width,
      height,
      imageProps,
      ImageComponent,
    };
    return <FeaturedTile {...(featuredProps as TileProps)} />;
  }

  return (
    <Pressable
      {...{
        onPress,
        android_ripple: androidRipple(
          Color(theme?.colors?.primary).alpha(activeOpacity).rgb().toString()
        ),
        ...attributes,
      }}
      style={StyleSheet.flatten([
        {
          width,
          height,
        },
        containerStyle && containerStyle,
      ])}
    >
      <ImageComponent
        resizeMode="cover"
        source={imageSrc as ImageURISource}
        containerStyle={StyleSheet.flatten([
          styles.imageContainer,
          imageContainerStyle && imageContainerStyle,
        ])}
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...(imageProps as Partial<ImageProps>)}
      >
        <View
          style={StyleSheet.flatten([
            styles.iconContainer,
            iconContainerStyle && iconContainerStyle,
          ])}
        >
          {icon && <Icon {...icon} />}
        </View>
      </ImageComponent>

      <View
        style={StyleSheet.flatten([
          styles.contentContainer,
          contentContainerStyle && contentContainerStyle,
        ])}
      >
        <Text
          testID="tileTitle"
          h4={!titleStyle || !('fontSize' in titleStyle)}
          style={StyleSheet.flatten([styles.text, titleStyle && titleStyle])}
          numberOfLines={titleNumberOfLines}
        >
          {title}
        </Text>
        {children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 5,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

Tile.displayName = 'Tile';
