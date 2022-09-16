export interface Message {
  message: string;
}

export interface User {
  email: string;
  password: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Kicker extends BaseEntity {
  title: string;
  description: string;
}
