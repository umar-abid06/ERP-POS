import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.id}</th>
            <th>{individualExcelData.barcode}</th>

            <th>{individualExcelData.name}</th>
            <th>{individualExcelData.cost_price}</th>
            <th>{individualExcelData.quantity}</th>
            <th>{individualExcelData.sell_price}</th>

        </>
    )
}