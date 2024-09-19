export type NavListsType = {
  title: string;
  to: string;
  id: number;
};

type category = {
  id: string;
  name: string;
  link: string;
  status: string;
};
type subCategory = {
  id: string;
  name: string;
  link: string;
  category: category;
};
type attachments = {
  attachmentFileId: string;
  productId: string;
  id: number;
  url: string;
};
export type ProductType = {
  id: string;
  name: string;
  price: number;
  priceSuffix: number;
  color: string;
  country: string;
  series: string;
  thickness: string;
  manufacturer: string;
  size: string;
  discount: number;
  additionalInfo: string;
  subCategory: subCategory;
  subCategoryId: null;
  attachments: attachments[];
};
