import React, { ReactElement } from 'react'
import { useState as useCTXstate } from '../../context'
import { State } from '../../context/reducer'


export default function ProfilePage(): ReactElement {

    const [{ user }]: [State] = useCTXstate()

    // "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=412775406385944&height=50&width=50&ext=1609274230&hash=AeQDxS4IHZbwEHecH_k"
    // https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=412775406385944&height=50&width=50&ext=1609274230&hash=AeQDxS4IHZbwEHecH_k
    return (
        <div>
            <h1> Hello broh { user?.username } </h1>
            <h2>ID: { user?.access_token }</h2>
            <img src={user?.userImg} alt="profile" />
        </div>
    )
}
