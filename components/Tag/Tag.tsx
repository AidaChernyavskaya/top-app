import styles from "./Tag.module.css";
import cn from "classnames";
import {TagProps} from "./Tag.props";


export const Tag = ({children, size = 's', color = 'ghost', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, styles[color], {
                [styles.s]: size == 's',
                [styles.m]: size == 'm'
            })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
}