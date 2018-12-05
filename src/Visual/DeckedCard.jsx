import React from 'react'

const DeckedCard = (props) => {
    return (
        <div className="card card-inverse card-success text-center">
            <div className="card-body">
                <blockquote className="card-blockquote">
                    {props.children}
                </blockquote>
            </div>
        </div>
    )
}

export default DeckedCard
