export interface MenuItemType {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    active?: boolean;
};

export interface DataRow {
  id: number;
  username: string;
  email: string;
};
