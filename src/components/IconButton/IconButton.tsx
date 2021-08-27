import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButtonPropTypes } from "./IconButton.schema"

const IconButton = (props: IconButtonPropTypes) => {
	return (
		<button type='button' className='btn-lg btn' onClick={props.functionName}>
			<FontAwesomeIcon icon={props.iconName} />
		</button>
	)
}

export default IconButton
