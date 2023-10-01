export type Props = {
  title: string;
  data: string;
};

export type Name = string;

export type AboutType<T> = {
  title: T;
  data: string;
};

export type ContactType<T> = {
  title: T;
  data: string;
};
