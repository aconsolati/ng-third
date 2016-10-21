export interface IItemStock {
    "DisplayName": string,
    "Item_Code": number,
    "Item_Service": string,
    "Item_Name": string,
    "Item_Standard_Fee": number,
    "Item_Deactivated_Date": string,
    "Charge_Procedure_Only": boolean,
    "Item_Component_Charge_Pack": boolean
}

export interface IBatchItem {
        "ItemCode": number,
        "StockLocationID": number,
        "BatchNumber": string,
        "Brand_Code": string,
        "Item_Name": string,
        "Brand_Name": string,
        "ItemBrandBatchID": string,
        "ExpiryDate": string,
        "DeactivatedDate": string,
        "UnitsOnHand": number
}

export interface IItemStockControl {
      "Item_Code": number,
      "Stock_Location_ID": number,
      "Item_Ideal_Level": number,
      "Item_Critical_Level": number,
      "Item_On_Hand": number,
      "Item": IItemStock
}

export interface IItemBatch {
    "ItemStockControl": IItemStockControl,
    "UnitsOnHand": number,
    "Batches": IBatchItem[],
    "HasBatches": boolean
}