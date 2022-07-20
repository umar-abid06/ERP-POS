import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.id}</th>
            <th>{individualExcelData.name}</th>
            <th>{individualExcelData.quantity}</th>
            <th>{individualExcelData.price}</th>
        </>
    )
}