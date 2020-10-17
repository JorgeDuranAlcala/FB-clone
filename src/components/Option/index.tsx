import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React, { ReactElement } from "react";
import useStyles from './styles'

interface Props extends React.HTMLProps<HTMLDivElement> {
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    text?: string;
    icon_className?: string;
    color_icon?: string;
}

function Option({ 
  Icon, 
  text, 
  icon_className,
  color_icon, 
  ...rest 
}: Props): ReactElement {

    const classes = useStyles()

  return (
      <div {...rest} >
        <Icon className={icon_className} style={{color: color_icon}} />
        { text && <h5 className={classes.Options__text}>{text}</h5>}
      </div>
  );
}

export default Option;
