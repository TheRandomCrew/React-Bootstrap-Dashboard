import React from 'react'

const CircleThumbnail = ({inside, title, subtitle}) => {
    return (
        <div className="col-6 col-sm-3 placeholder text-center">
            <img src={"//placehold.it/200/dddddd/fff?text="+inside} className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            <h4>{title}</h4>
            <span className="text-muted">{subtitle}</span>
        </div>
    )
}

export default CircleThumbnail
