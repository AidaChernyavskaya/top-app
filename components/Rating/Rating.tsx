import styles from "./Rating.module.css";
import cn from "classnames";
import {RatingProps} from "./Rating.props";
import {useEffect, useState, KeyboardEvent} from "react";
import StarIcon from "./star.svg";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
              <span
                  className = {cn(styles.star, {
                      [styles.filled]: i < currentRating,
                      [styles.editable]: isEditable
                  })}
                  onMouseEnter = {(): void => changeDisplay(i + 1)}
                  onMouseLeave = {(): void => changeDisplay(rating)}
                  onClick = {(): void => onClick(i + 1)}
              >
                  <StarIcon
                      tabIndex = {isEditable ? 0 : -1}
                      onKeyDown = {(e: KeyboardEvent<SVGElement>): void => {isEditable && handleSpace(i + 1, e)}}
                  />
              </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number): void => {
        if (!isEditable){
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number): void => {
        if (!isEditable || !setRating){
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
        if (e.code != 'Space' || !setRating){
            return;
        }
        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key = {i}>{r}</span>))}
        </div>
    );
};