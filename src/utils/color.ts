

export const darkenColor = (HEXcolor: string, opacity: number): string => {
    const HEXopacity = opacity.toFixed(16)
    return HEXcolor + HEXopacity
}