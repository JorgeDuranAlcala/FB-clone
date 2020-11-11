import { Popover, PopoverProps } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PopupState, bindPopover } from "material-ui-popup-state/hooks";
import useStyles from './styles'

interface Props extends Partial<PopoverProps> {
    popupState: PopupState
}

export default function CustomPopover({
    popupState,
    children,
    ...rest
}: Props): ReactElement {

    const classes = useStyles()

  return (
    <>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        {...bindPopover(popupState)}
        classes={{
          paper: classes.paper,
        }}
        {...rest}
        
      >
      {children}
      </Popover>
    </>
  );
}
