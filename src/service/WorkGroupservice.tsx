// import { IApiResponse, IItem, ICreateItemRequest, IImportTemplateResponse, IApiResponseUpdate, IApiResponseDelete, IUpdateItemRequest  } from "@/interfaces/WorkGroupinterfaces";
// import axios from "axios";

// const accessToken: string =
//   "eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik9xaHB1VnV6TU14OEJaUTBaYUd1bTc5OV9VSnc5aVpGVlB3VUtWRXRaZDQiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyIsImtpZCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iZDZhMjEwNS03NDM3LTQxNGUtYWI0Zi01YTE3MDFiMTYwMTkvIiwiaWF0IjoxNzI4ODIzNjIyLCJuYmYiOjE3Mjg4MjM2MjIsImV4cCI6MTcyODgyODg4OSwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhZQUFBQWloeEs4enljMWFSYkNndGg1clkzSXM5bU1tVEF1bWxCc3FZREkwMmEyN2grRUZJS05MZzVLWG5iZFgyQmlPTFMiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IlNQMzY1IiwiYXBwaWQiOiI0YTE3YzJlMi0yMDEyLTQ1ZDAtOGJmMy00YTFjOTlkMGYyYjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlF1YW5nIEFuaCIsImdpdmVuX25hbWUiOiJOZ3V54buFbiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjQyLjExMy4yMjAuMTA0IiwibmFtZSI6Ik5ndXnhu4VuIFF1YW5nIEFuaCIsIm9pZCI6IjljMjkwMGM1LWY2MTEtNDNmZi1hZDY5LTA4NTNjNTJkOWQ2MCIsInB1aWQiOiIxMDAzMjAwM0NFNDEwM0E2IiwicmgiOiIwLkFUNEFCU0ZxdlRkMFRrR3JUMW9YQWJGZ0dRTUFBQUFBQVBFUHpnQUFBQUFBQUFBLUFIby4iLCJzY3AiOiJBbGxTaXRlcy5GdWxsQ29udHJvbCBBbGxTaXRlcy5NYW5hZ2UgQ2FsZW5kYXJzLlJlYWRXcml0ZSBVc2VyLlJlYWQiLCJzaWQiOiIzMTgxNzZiZi04ZjM3LTQzMWEtYmY2My0zYjUwODIxN2RjYjMiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJKMnVLbUZyNmRBYkZtSWI5dy1CUzVKeTFpNlhWUF9fdTZWLTM5dXhyOUZJIiwidGlkIjoiYmQ2YTIxMDUtNzQzNy00MTRlLWFiNGYtNWExNzAxYjE2MDE5IiwidW5pcXVlX25hbWUiOiJhbmhucUBzcHN2bi5jb20iLCJ1cG4iOiJhbmhucUBzcHN2bi5jb20iLCJ1dGkiOiJBSXppU2tkaWlrcXlnamZvZnZzV0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMjQgMSIsInhtc19wZnRleHAiOjE3Mjg5MTUyODl9.0Shlap9aBZl6igjsaRvryIEbP0YxVNE--YYheCSXjHPhT9tDlxCRc42abF8w-hja2AqG34SkGfvhctbyUZL4axZeYYzVaE-2Bwc9amfIROkGRo_4DX2zAZPZ768RblVVyWkcYayC_UB5L-VXnRHAG0z22P0u-RcK6lUuu1l5UlyZ8o1EO6ItOSdKSo4-IF6YBMTkw13QgAC1yIJaLCXID6B6h36-1fz2BYp4Sj7VIyeFBvkk_YaomDZSoJ8vK20GZmELQKESHIXNCK5xM71UOl22ETNszaTIK3KbfoXwz8xeVMA42YKZnH7m4lf2mB_ZhAzPrSeyHxToIOgx1RjFTg";

// export const getAllDataWithPagination = async (): Promise<IApiResponse | undefined> => {
//   try {
//     const response = await axios.post(
//       "https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/GetItemsWithPagination",
//       {
//         ListUrl: "/Lists/WorkGroup",
//         PageSize: 30,
//         PageNumber: 1, // Sử dụng PageNumber = 1 mặc định
//         TotalPages: 3,
//         TotalCount: 72,
//         SearchTerm: "",
//         OrderBy: "",
//         OrderByAscending: true,
       
//       },
//       {
//         headers: {
//           Authorization: accessToken,
//           "Content-Type": "application/json",
//           Accept: "text/plain",
//         },
//       }
//     );

//     if (response.data) {
//       return response.data; // Đảm bảo trả về dữ liệu đúng
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return undefined;
// };

// // Hàm này không cần thay đổi
// export const getItemById = async ({
//   id,
// }: {
//   id: number;
// }): Promise<IItem | undefined> => {
//   try {
//     const response = await axios.post(
//       `https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/${id}`, // Sử dụng dấu nháy đơn
//       {
//         ListUrl: "/Lists/WorkGroup",
//         ItemId: id,
//       },
//       {
//         headers: {
//           Authorization: accessToken,
//           "Content-Type": "application/json",
//           Accept: "text/plain",
//         },
//       }
//     );

//     if (response.data) {
//       return response.data.Data; // Trả về dữ liệu IItem
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return undefined;
// };


// export const createNewItem = async (newItem: ICreateItemRequest): Promise<any | undefined> => {
//   try {
//     const response = await axios.post(
//       "https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup", // URL của API
//       newItem, // Dữ liệu item mới
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`, // Access token
//           "Content-Type": "application/json", // Định dạng JSON
//           Accept: "application/json",
//         },
//       }
//     );

//     if (response.data) {
//       return response.data; // Trả về dữ liệu từ API nếu thành công
//     }
//   } catch (error) {
//     console.error("Error creating new item:", error); // Bắt lỗi nếu có
//   }

//   return undefined; // Trả về undefined nếu thất bại
// };


// // Hàm cập nhật dữ liệu của mục theo ID
// export const updateItem = async (data: IUpdateItemRequest): Promise<IApiResponseUpdate | undefined> => {
//   try {
//     const requestData = {
//       ListUrl: "/Lists/WorkGroup",
//       ItemId: data.id,
//       Data: {
//         Title: {
//           FieldType: "Text",
//           Data: title,
//         },
//       },
//     };

//     const response = await axios.put(
//       `https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/${data.id}`, // URL với ID động
//       requestData, // Dữ liệu cập nhật
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`, // Access token
//           "Content-Type": "application/json", // Định dạng JSON
//           Accept: "application/json",
//         },
//       }
//     );

//     if (response.data) {
//       return response.data; // Trả về dữ liệu từ API nếu thành công
//     }
//   } catch (error) {
//     console.error("Error updating item:", error); // Bắt lỗi nếu có
//   }

//   return undefined; // Trả về undefined nếu thất bại
// };


// // export const updateJobTitle = async (
// //   data: IUpdateJobTitle

// // ): Promise<IApiResponseCreate | undefined> => {
// //   const fieldData = await getDataFields();

// //   const requestData = fieldData?.Data.reduce(
// //     (acc, field) => {
// //       acc[field.Name] = {
// //         FieldType: field.Type,
// //         Data:
// //           field.Name === "Title"
// //             ? data.title
// //             : field.Name === "Code"
// //               ? data.code
// //               : field.Name === "ID"
// //                 ? null
// //                 : null,
// //       };
// //       return acc;
// //     },
// //     {} as Record<string, { FieldType: string; Data: any }>
// //   );

// //   try {
// //     const response = await axios.put(
// //       https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FJobTitle/${data.id},
// //       {
// //         ListUrl: "/Lists/JobTitle",
// //         ItemId: data.id,
// //         Data: requestData,
// //       },
// //       {
// //         headers: {
// //           Authorization: accessToken,
// //           "Content-Type": "application/json",
// //           Accept: "text/plain",
// //         },
// //       }
// //     );

// //     if (response.data) {
// //       return response.data;
// //     }
// //   } catch (error) {
// //     console.log(error);
// //   }
// //   return undefined;
// // };



// export const deleteItem = async (id: number): Promise<IApiResponseDelete | undefined> => {
//   try {
//     const response = await axios.delete(
//       `https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       }
//     );

//     if (response.data) {
//       return response.data; 
//     }
//   } catch (error) {
//     console.error("Error deleting item:", error); 
//   }

//   return undefined; 
// };




// export const getImportTemplate = async (): Promise<IImportTemplateResponse | undefined> => {
//   try {
//     const response = await axios.post(
//       "https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/GetImportTemplate",
//       {
//         ListUrl: "/Lists/WorkGroup",
//       },
//       {
//         headers: {
//           Authorization: accessToken,
//           "Content-Type": "application/json",
//           Accept: "application/octet-stream",
//         },
//         responseType: "blob", // Đảm bảo axios trả về kiểu dữ liệu blob
//       }
//     );

//     if (response.data) {
//       return { data: response.data }; // Trả về đối tượng interface
//     }
//   } catch (error) {
//     console.error(error);
//   }
//   return undefined;
// };













import {
  IApiResponse,
  IApiResponseCreate,
  IApiResponseDataField,
  IApiResponseUpdate,
  IApiResponseDelete,
  ICreateItemRequest,
  IItem,
  IUpdateItemRequest,
} from "@/interfaces/WorkGroupinterfaces";
import axios from "axios";
import { apiServices } from "core/api";


export const getAllDataWithPagination = async ({
  currentPage,
  setError,
}: {
  currentPage: number;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}): Promise<IApiResponse | undefined> => {
  try {
    const response = await apiServices.post(
      "https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/GetItemsWithPagination",
      {
        ListUrl: "/Lists/WorkGroup",
        PageSize: 30,
        PageNumber: currentPage,
        SearchTerm: "",
        OrderBy: "",
        OrderByAscending: true,
      }
    );

    if (response) {
      setError(false);
      return response;
    }
  } catch (error) {
    console.log(error);
    setError(true);
  }
  return undefined;
};


export const getItemById = async ({
  id,
}: {
  id: number;
}): Promise<IItem | undefined> => {
  try {
    const response = await apiServices.post(
      `https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/${id}`,
      {
        ListUrl: "/Lists/WorkGroup",
        ItemId: id,
      }
    );

    if (response) {
      return response.Data;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};


export const deleteItemById = async ({
  id,
}: {
  id: number;
}): Promise<IApiResponseDelete | undefined> => {
  try {
    const response = await apiServices.delete(
      `https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/${id}`,
      {
        ItemId: id,
        ListUrl: "/Lists/WorkGroup",
      }
    );

    if (response) {
      return response.Data;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};


export const getDataFields = async (): Promise<IApiResponseDataField | undefined> => {
  try {
    const response = await apiServices.post(
      "https://apidevv2.workspace365.vn/api/SpLists/%2FLists%2FWorkGroup/GetFields",
      {
        ListUrl: "/Lists/WorkGroup",
      }
    );

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};


export const updateItem = async (
  data: IUpdateItemRequest
): Promise<IApiResponseUpdate | undefined> => {
  const fieldData = await getDataFields();

  const requestData = fieldData?.Data.reduce((acc, field) => {
    acc[field.Name] = {
      FieldType: field.Type,
      Data: field.Name === "Title" ? data.title : null,
    };
    return acc;
  }, {} as Record<string, { FieldType: string; Data: any }>);

  try {
    const response = await apiServices.put(
      `https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup/${data.id}`,
      {
        ListUrl: "/Lists/WorkGroup",
        ItemId: data.id,
        Data: requestData,
      }
    );

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const createNewItem = async (
  data: ICreateItemRequest
): Promise<IApiResponseCreate | undefined> => {
  const fieldData = await getDataFields();

  const requestData = fieldData?.Data.reduce((acc, field) => {
    acc[field.Name] = {
      FieldType: field.Type,
      Data: field.Name === "Title" ? data.title : null,
    };
    return acc;
  }, {} as Record<string, { FieldType: string; Data: any }>);

  try {
    const response = await apiServices.post(
      "https://apidevv2.workspace365.vn/api/Categories/%2FLists%2FWorkGroup",
      {
        ListUrl: "/Lists/WorkGroup",
        Data: requestData,
      }
    );

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
