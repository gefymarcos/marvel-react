type Icon = {
    path: string;
    alt: string;
    icon: string;
}

import './index.css'

export const Icon = ({ path, icon }: Icon) => {
    return (
        <a href={path} target="_blank">
            <div className={icon === "imdb" ? "imdb" : "marvel"} />
        </a>
    )
}