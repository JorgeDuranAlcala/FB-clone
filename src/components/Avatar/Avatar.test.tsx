import React from 'react'
import { render } from '@testing-library/react'
import Avatar from "./index";

describe('Render the avatar component', () => {
    it('Render the username well', () => {
        const { container, getByText, rerender } = render(<Avatar name="George Duran" />)
        expect(getByText("George Duran")).toBeInTheDocument()
        expect(container.querySelector('h6').textContent).toBe("George Duran")
        
        rerender(<Avatar/>)
        expect(container.querySelector('h6')).toBeNull()

    })

    it("Display user image", () => {
        const randomUrl = "http://anyurl.com"
        const defaultImage = "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow"
        const { container, rerender } = render(<Avatar src={randomUrl} />)
        expect(container.querySelector('img')).toHaveAttribute('src', randomUrl)

        rerender(<Avatar/>)
        expect(container.querySelector('img')).toHaveAttribute('src', defaultImage)
    })
})