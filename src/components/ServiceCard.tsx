import React, { FunctionComponent } from 'react'
import { ServiceProps } from '../../types'

export const ServiceCard:FunctionComponent<{service:ServiceProps}> = ({service: {Icon, about, title}}) => {
    const createMarkup = () => {
        return {
            __html:about
        }
    }
    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-green" />
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}
