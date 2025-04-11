import { TouchableOpacity,Text,TouchableOpacityProps,} from "react-native"
import {styles} from "./style"

type Props = TouchableOpacityProps &{
    title:String,
    
}
export function Button({title, ...rest}:Props){
    return(
        <TouchableOpacity activeOpacity={0.5} style={styles.button} {...rest} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}