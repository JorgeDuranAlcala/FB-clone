import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React, { ReactElement } from "react";
import useStyles from './styles'

interface Props {
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    text: string;
}

function Option({ Icon, text }: Props): ReactElement {

    const classes = useStyles()

  return (
      <div className={classes.Options}>
        <Icon className={classes.Options__Icon} />
        <h5 className={classes.Options__text}>{text}</h5>
      </div>
  );
}

export default Option;
