import React from 'react'
// import { toast } from "react-hot-toast"
import { apiConnector } from '../apiConnector';
import { catalogData } from '../apis';


// ================ get Catalog Page Data  ================
export const getCatalogPageData = async (categoryId) => {
  let result = [];
  try {
      const response = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, { categoryId });
      if (!response?.data?.success) {
          throw new Error(response?.data?.message || "Error fetching data");
      }
      console.log("CATALOG PAGE DATA API RESPONSE:", response);
      result = response?.data?.data;
  } catch (error) {
      console.error("CATALOG PAGE DATA API ERROR:", error.message);
      result = { error: error.message };
  }
  return result;
};

