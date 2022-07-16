import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Name}</th>
            <th>{individualExcelData.Quantity}</th>
            <th>{individualExcelData.Price}</th>
            
        </>
    )
}