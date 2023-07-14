export interface IModal<T> {
  isOpen: boolean;
  opening: (data: T) => void;
  closing: () => void;
}
