import React from 'react'

export type InitialProps = React.HTMLProps<HTMLDivElement>

export type additionalProps = {
    justify: 'center' | 'space-around' | 'space-between'  | 'flex-end' | 'flex-start' | 'initial' 
    align: 'center' | 'flex-end' | 'flex-start' | 'initial',
    direction: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse"
}

export type IFlexProps = InitialProps & Partial<additionalProps>;