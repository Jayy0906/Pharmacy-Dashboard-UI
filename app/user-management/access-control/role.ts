// access-control/role.ts
export interface Role {
  id: string;
  name: string;
  description: string;
  usersAssigned: number;
  icon: string;
  iconColor: string;
  textColor: string;
  deletable?: boolean;
}
