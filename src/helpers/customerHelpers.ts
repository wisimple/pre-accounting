import { ICustomer } from "interfaces/ICustomer";

export const getAvatarUrl = (customer: ICustomer): string => {
  return (
    customer.imageUrl ||
    (customer.type === "company"
      ? "/images/avatar/company.png"
      : customer.gender
      ? "/images/avatar/male.png"
      : "/images/avatar/female.png")
  );
};
