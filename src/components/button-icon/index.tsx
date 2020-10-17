import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    text: string;
}

function Icon({}: Props): ReactElement {
    return (
        <div>
            
        </div>
    )
}

export default Icon
