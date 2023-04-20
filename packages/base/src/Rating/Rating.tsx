import React from 'react';
import {
  Rating as SwipeRating,
  SwipeRatingProps as RatingProps,
} from 'react-native-ratings';
import { RneFunctionComponent } from '../helpers';

export interface SwipeRatingProps extends RatingProps {}

/** Ratings are used to collect measurable feedback from users.
 * Use Rating over an Input where imagery can increase user interaction.
 * This component is imported from [react-native-ratings](https://github.com/Monte9/react-native-ratings).
 * There are two tyoes of rating - TapRating and SwipeRating.
 * This documentation is for Swipe Rating version. */
export const Rating: RneFunctionComponent<SwipeRatingProps> = () => {
  return <SwipeRating />;
};

Rating.displayName = 'Rating';
