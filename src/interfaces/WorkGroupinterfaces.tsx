
export interface IAuthor {
  Email: string;
  TypeId: string;
  LookupId: number;
  LookupValue: string;
}

export interface IEditor {
  Email: string;
  TypeId: string;
  LookupId: number;
  LookupValue: string;
}

export interface IItem {
  ID: number;
  Title: string;
  Modified: string; 
  Created: string;
  Author: IAuthor;
  Editor: IEditor;
  WorkGroupValue: string;
}

export interface IApiResponse {
  Error: boolean;
  Message: string | null;
  Data: {
      Items: IItem[];
      TotalCount: number;
      TotalPages: number;
      PageSize: number;
      PageNumber: number;
      HasPreviousPage: boolean;
      HasNextPage: boolean;
  };
}

export interface ICreateItemRequest {
  ListUrl: string;
  Data: {
      ID: {
          Type: "Integer";
          Data: string;
      };
      Title: {
          Type: "Text";
          Data: string;
      };
      WorkGroupValue: {
          Type: "Text";
          Data: string;
      };
  };
}

export interface IUpdateItemRequest {
  ListUrl: string; 
  ItemId: number; 
  Data: Record<string, { FieldType: string; Data: any }>; 
}

export interface IApiResponseUpdate {
  success: boolean; 
  message?: string; 
  data?: any; 
}

export interface IApiResponseDelete {
  Error: boolean;
  Message: string | null;
  Data: boolean;
  ResultCode: number;
}

export interface IImportTemplateResponse {
  data: Blob;  
}


