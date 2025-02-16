type UserProps = {
  avatar: string;
  first_name: string;
  id: number;
  last_name: string;
};

type CategoryProps = {
  id: number;
  name: string;
};

type CountProps = {
  category_id: number;
  count: number;
  user_id: number;
};
