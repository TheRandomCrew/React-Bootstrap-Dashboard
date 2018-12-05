import React from 'react'

const ReviewCard = ({color, title, data, icon}) => {
    return (
        <div className="col-xl-3 col-sm-6 py-2">
            <div className="card bg-success text-white h-100">
                <div className={"card-body "+color}>
                    <div className="rotate">
                        <i className={icon+" fa-4x"}></i>
                    </div>
                    <h6 className="text-uppercase">{title}</h6>
                    <h1 className="display-4">{data}</h1>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
