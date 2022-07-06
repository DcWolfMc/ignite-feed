import { FunctionComponent } from 'react';
import styles from './Avatar.module.css'
interface AvatarProps{
    hasBorder?: boolean;
    src: string;
}
export const Avatar:FunctionComponent<AvatarProps> = ({hasBorder = true, src})=>{
    return(
        <img className={hasBorder?styles.avatarWithBorder: styles.avatar} src={src}/>
    )
}