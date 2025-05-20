import React from "react"

type itemsType =
    {
        _id: string
        designation: string
        company: Company
        description: string
        start: string
        end: string
    }

type Company = {
    name: string
}

type propt = {
    data: itemsType
}

export const ExperienceCard: React.FC<propt> = ({ data }) => {
    return (
        <div className="grid">
            {
                data.company.name
            }

        </div>
    )
}
