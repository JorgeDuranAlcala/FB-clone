import React from 'react'

export type InitialProps = React.HTMLProps<HTMLDivElement>

export type additionalProps = {
    justify: 'center' | 'space-around' | 'space-between'  | 'flex-end' | 'flex-start' | 'initial' 
    align: 'center' | 'flex-end' | 'flex-start' | 'initial'
}

export type IFlexProps = InitialProps & Partial<additionalProps>;