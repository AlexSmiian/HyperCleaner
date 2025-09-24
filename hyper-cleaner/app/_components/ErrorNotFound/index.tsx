"use client"

import ErrorNotFoundBase from '../ErrorNotFoundBase';

export default function ErrorNotFound() {

    return (
        <ErrorNotFoundBase
            title={"Oops. The page you were looking for doesn`t exist."}
            text={"Error (404). You may have mistyped the address or the page may have moved."}
            button={"Go home"}
        />
    )
}
