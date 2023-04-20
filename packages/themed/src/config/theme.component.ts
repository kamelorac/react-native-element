import { AvatarProps, AccessoryProps } from '../Avatar';
import { BadgeProps } from '../Badge';
import { BottomSheetProps } from '../BottomSheet';
import { ButtonGroupProps } from '../ButtonGroup';
import { ButtonProps } from '../Button';
import { CardProps } from '../Card';
import { CheckBoxProps } from '../CheckBox';
import { ChipProps } from '../Chip';
import {
  DialogActionsProps,
  DialogLoadingProps,
  DialogProps,
  DialogTitleProps,
} from '../Dialog';
import { DividerProps } from '../Divider';
import { FABProps } from '../FAB';
import { HeaderProps } from '../Header';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { InputProps } from '../Input';
import { LinearProgressProps } from '../LinearProgress';
import {
  ListItemProps,
  ListItemAccordionProps,
  ListItemSwipeableProps,
} from '../ListItem';
import { OverlayProps } from '../Overlay';
import { PricingCardProps } from '../PricingCard';
import { SearchBarProps } from '../SearchBar';
import { SliderProps } from '../Slider';
import { SocialIconProps } from '../SocialIcon';
import { SpeedDialProps, SpeedDialActionProps } from '../SpeedDial';
import { SwipeRatingProps } from '../Rating';
import { SwitchProps } from '../Switch';
import { SkeletonProps } from '../Skeleton';
import { TabItemProps, TabProps } from '../Tab';
import { TabViewProps } from '../TabView';
import { TapRatingProps } from '../AirbnbRating';
import { TextProps } from '../Text';
import { TileProps } from '../Tile';
import { TooltipProps } from '../Tooltip';
import { ViewProps } from 'react-native';

export interface ComponentTheme {
  AirbnbRating: Partial<TapRatingProps>;
  Avatar: Partial<AvatarProps>;
  AvatarAccessory: Partial<AccessoryProps>;
  Badge: Partial<BadgeProps>;
  BottomSheet: Partial<BottomSheetProps>;
  Button: Partial<ButtonProps>;
  ButtonGroup: Partial<ButtonGroupProps>;
  Card: Partial<CardProps>;
  CardDivider: Partial<DividerProps>;
  CardFeaturedSubtitle: Partial<TextProps>;
  CardFeaturedTitle: Partial<TextProps>;
  CardImage: Partial<ImageProps>;
  CardTitle: Partial<TextProps>;
  CheckBox: Partial<CheckBoxProps>;
  Chip: Partial<ChipProps>;
  Dialog: Partial<DialogProps>;
  DialogActions: Partial<DialogActionsProps>;
  DialogButton: Partial<ButtonProps>;
  DialogLoading: Partial<DialogLoadingProps>;
  DialogTitle: Partial<DialogTitleProps>;
  Divider: Partial<DividerProps>;
  FAB: Partial<FABProps>;
  FeaturedTile: Partial<TileProps>;
  Header: Partial<HeaderProps>;
  Icon: Partial<IconProps>;
  Image: Partial<ImageProps>;
  Input: Partial<InputProps>;
  LinearProgress: Partial<LinearProgressProps>;
  ListItem: Partial<ListItemProps>;
  ListItemAccordion: Partial<ListItemAccordionProps>;
  ListItemButtonGroup: Partial<ButtonGroupProps>;
  ListItemCheckBox: Partial<CheckBoxProps>;
  ListItemChevron: Partial<IconProps>;
  ListItemContent: Partial<ViewProps>;
  ListItemInput: Partial<InputProps>;
  ListItemSubtitle: Partial<TextProps>;
  ListItemSwipeable: Partial<ListItemSwipeableProps>;
  ListItemTitle: Partial<TextProps>;
  Overlay: Partial<OverlayProps>;
  PricingCard: Partial<PricingCardProps>;
  Rating: Partial<SwipeRatingProps>;
  SearchBar: Partial<SearchBarProps>;
  Slider: Partial<SliderProps>;
  SocialIcon: Partial<SocialIconProps>;
  SpeedDial: Partial<SpeedDialProps>;
  SpeedDialAction: Partial<SpeedDialActionProps>;
  Skeleton: Partial<SkeletonProps>;
  Switch: Partial<SwitchProps>;
  Tab: Partial<TabProps>;
  TabItem: Partial<TabItemProps>;
  TabView: Partial<TabViewProps>;
  TabViewItem: Partial<ViewProps>;
  Text: Partial<TextProps>;
  Tile: Partial<TileProps>;
  Tooltip: Partial<TooltipProps>;
}
