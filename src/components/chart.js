/**
 * Created by haruna on 9/28/17.
 */
import React from 'react'
import _, {sum} from 'lodash'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

function average(data) {
    return _.round(sum(data) / data.length)
}
export default (props) => {
    return (
        <div>
            <Sparklines width={180} height={120} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)}{props.units}</div>
        </div>
    )
}