import React, { ReactElement } from 'react'
import { SvgIconComponent } from '@material-ui/icons'

interface Props {
    icon?: SvgIconComponent
}

const Button = React.forwardRef(function Button(
    props: React.ComponentPropsWithoutRef<"button"> & Props,
    ref: React.Ref<HTMLButtonElement>
  ) {
      const { icon: Icon, children } = props
    return <button ref={ref} {...props} >
        { Icon && <Icon/> }
        { children }
    </button>;
  });

  export default Button