import React, { ReactElement } from 'react'
import { IFlexProps } from './types'


function Flex({ 
    align = 'initial',
    justify = 'initial', 
    direction = 'initial',
    children,
    ...rest 
}: IFlexProps): ReactElement {
    return (
        <div 
            style={{ 
                display: 'flex',
                justifyContent: justify,
                alignItems: align,
                flexDirection: direction
            }} 
            {...rest}>
            {children}
        </div>
    )
}

export default Flex
